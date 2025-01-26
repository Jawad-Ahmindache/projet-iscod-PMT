package com.visiplus.pmt.service;

import com.visiplus.pmt.dto.TaskDto;
import com.visiplus.pmt.dto.TaskHistoryDto;
import com.visiplus.pmt.dto.UpdateTaskDto;
import com.visiplus.pmt.exception.PermissionDeniedException;
import com.visiplus.pmt.model.*;
import com.visiplus.pmt.repository.ProjectMemberRepository;
import com.visiplus.pmt.repository.TaskRepository;
import com.visiplus.pmt.repository.TaskHistoryRepository;
import com.visiplus.pmt.repository.ProjectRepository;
import com.visiplus.pmt.repository.UserRepository;
import com.visiplus.pmt.security.RoleService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.server.ResponseStatusException;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class TaskService {

    private final TaskRepository taskRepository;
    private final ProjectRepository projectRepository;
    private final ProjectMemberRepository projectMemberRepository;
    private final TaskHistoryRepository taskHistoryRepository;
    private final UserRepository userRepository;
    private final RoleService roleService;
    private final EmailService emailService;
    private final ProjectService projectService;

    @Transactional(readOnly = true)
    public List<TaskDto> getTasksByProject(Long projectId, User user) {
        projectService.checkProjectAccess(projectId, user);
        return taskRepository.findByProjectId(projectId)
                .stream()
                .map(TaskDto::fromEntity)
                .toList();
    }

    @Transactional
    public TaskDto createTask(Long projectId, Task task, User user) {
        Project project = projectRepository.findById(projectId)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Projet non trouvé"));

        ProjectMember member = projectMemberRepository.findByProjectAndUser(project, user)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.FORBIDDEN, "Vous n'êtes pas membre de ce projet"));
        
        projectService.isAdminOrMember(member);

        task.setId(null);
        task.setProject(project);
        task.setStatus(Task.Status.TODO);
        if (task.getPriority() == null) {
            task.setPriority(Task.Priority.LOW);
        }

        Task savedTask = taskRepository.save(task);
        createHistoryEntry(savedTask, user, "Tâche créée");

        return TaskDto.fromEntity(savedTask);
    }

    @Transactional
    public TaskDto updateTask(Long projectId, Long taskId, UpdateTaskDto updateTaskDto, User user) {
        Project project = projectRepository.findById(projectId)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Projet non trouvé"));

        ProjectMember member = projectMemberRepository.findByProjectAndUser(project, user)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.FORBIDDEN, "Vous n'êtes pas membre de ce projet"));
        
        projectService.isAdminOrMember(member);
        
        Task task = findAndValidateTask(projectId, taskId);
        Task.Status oldStatus = task.getStatus();
        Task.Priority oldPriority = task.getPriority();

        if (updateTaskDto.getName() != null) {
            task.setName(updateTaskDto.getName());
            createHistoryEntry(task, user, String.format("Nom changé en '%s'", updateTaskDto.getName()));
        }

        if (updateTaskDto.getDescription() != null) {
            task.setDescription(updateTaskDto.getDescription());
            createHistoryEntry(task, user, "Description mise à jour");
        }

        if (updateTaskDto.getPriority() != null && !updateTaskDto.getPriority().equals(oldPriority)) {
            task.setPriority(updateTaskDto.getPriority());
            createHistoryEntry(task, user, String.format("Priorité changée en %s", updateTaskDto.getPriority()));
        }

        if (updateTaskDto.getDueDate() != null) {
            task.setDueDate(updateTaskDto.getDueDate());
            createHistoryEntry(task, user, "Date d'échéance mise à jour");
        }

        if (updateTaskDto.getStatus() != null && !updateTaskDto.getStatus().equals(oldStatus)) {
            task.setStatus(updateTaskDto.getStatus());
            createHistoryEntry(task, user, String.format("Statut changé en %s", updateTaskDto.getStatus()));
        }

        task.setUpdatedAt(LocalDateTime.now());
        Task savedTask = taskRepository.save(task);

        return TaskDto.fromEntity(savedTask);
    }

    private Task findAndValidateTask(Long projectId, Long taskId) {
        Task task = taskRepository.findById(taskId)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Tâche non trouvée"));

        if (!task.getProject().getId().equals(projectId)) {
            throw new ResponseStatusException(HttpStatus.FORBIDDEN, "Cette tâche n'appartient pas à ce projet");
        }

        return task;
    }

    private void createHistoryEntries(Task task, TaskSnapshot snapshot, User user) {
        if (hasStatusChanged(task, snapshot)) {
            createHistoryEntry(task, user, 
                String.format("Statut changé de %s à %s", snapshot.status(), task.getStatus()));
        }

        if (hasPriorityChanged(task, snapshot)) {
            createHistoryEntry(task, user,
                String.format("Priorité changée de %s à %s", snapshot.priority(), task.getPriority()));
        }

        if (hasNameChanged(task, snapshot)) {
            createHistoryEntry(task, user,
                String.format("Nom changé de '%s' à '%s'", snapshot.name(), task.getName()));
        }

        if (hasDescriptionChanged(task, snapshot)) {
            createHistoryEntry(task, user, "Description mise à jour");
        }

        if (hasAssigneeChanged(task, snapshot)) {
            String message = task.getAssignedUser() != null ?
                String.format("Tâche assignée à %s", task.getAssignedUser().getUsername()) :
                "Tâche désassignée";
            createHistoryEntry(task, user, message);

            notifyNewAssignee(task);
        }
    }

    private boolean hasStatusChanged(Task task, TaskSnapshot snapshot) {
        return snapshot.status() != task.getStatus();
    }

    private boolean hasPriorityChanged(Task task, TaskSnapshot snapshot) {
        return snapshot.priority() != task.getPriority();
    }

    private boolean hasNameChanged(Task task, TaskSnapshot snapshot) {
        return !snapshot.name().equals(task.getName());
    }

    private boolean hasDescriptionChanged(Task task, TaskSnapshot snapshot) {
        String oldDescription = snapshot.description();
        String newDescription = task.getDescription();
        return (oldDescription == null && newDescription != null) ||
               (oldDescription != null && !oldDescription.equals(newDescription));
    }

    private boolean hasAssigneeChanged(Task task, TaskSnapshot snapshot) {
        User oldAssignee = snapshot.assignedUser();
        User newAssignee = task.getAssignedUser();
        return (oldAssignee == null && newAssignee != null) ||
               (oldAssignee != null && !oldAssignee.equals(newAssignee));
    }

    private void notifyNewAssignee(Task task) {
        if (task.getAssignedUser() != null) {
            emailService.sendEmail(
                task.getAssignedUser().getEmail(),
                "Nouvelle tâche assignée",
                String.format("La tâche '%s' vous a été assignée dans le projet '%s'.",
                    task.getName(),
                    task.getProject().getName())
            );
        }
    }

    private record TaskSnapshot(
        Task.Status status,
        Task.Priority priority,
        String name,
        String description,
        User assignedUser
    ) {
        public TaskSnapshot(Task task) {
            this(
                task.getStatus(),
                task.getPriority(),
                task.getName(),
                task.getDescription(),
                task.getAssignedUser()
            );
        }
    }

    @Transactional
    public TaskDto updateTaskStatus(Long projectId, Long taskId, Task.Status status, User user) {
        Project project = projectRepository.findById(projectId)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Projet non trouvé"));

        ProjectMember member = projectMemberRepository.findByProjectAndUser(project, user)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.FORBIDDEN, "Vous n'êtes pas membre de ce projet"));
        
        projectService.isAdminOrMember(member);

        Task task = findAndValidateTask(projectId, taskId);
        Task.Status oldStatus = task.getStatus();

        if (!status.equals(oldStatus)) {
            task.setStatus(status);
            task.setUpdatedAt(LocalDateTime.now());
            createHistoryEntry(task, user, String.format("Statut changé de %s à %s", oldStatus, status));
        }

        return TaskDto.fromEntity(taskRepository.save(task));
    }

    @Transactional
    public TaskDto updateTaskPriority(Long projectId, Long taskId, Task.Priority priority, User user) {
        Project project = projectRepository.findById(projectId)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Projet non trouvé"));

        ProjectMember member = projectMemberRepository.findByProjectAndUser(project, user)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.FORBIDDEN, "Vous n'êtes pas membre de ce projet"));
        
        projectService.isAdminOrMember(member);

        Task task = findAndValidateTask(projectId, taskId);
        Task.Priority oldPriority = task.getPriority();

        if (!priority.equals(oldPriority)) {
            task.setPriority(priority);
            task.setUpdatedAt(LocalDateTime.now());
            createHistoryEntry(task, user, String.format("Priorité changée de %s à %s", oldPriority, priority));
        }

        return TaskDto.fromEntity(taskRepository.save(task));
    }
   

    /**
     * Assigne une tâche à un utilisateur
     */
    @Transactional
    public TaskDto updateTaskAssignee(Long projectId, Long taskId, Long assigneeId, User assigner) {
        Project project = projectRepository.findById(projectId)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Projet non trouvé"));

        ProjectMember member = projectMemberRepository.findByProjectAndUser(project, assigner)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.FORBIDDEN, "Vous n'êtes pas membre de ce projet"));
        
        projectService.isAdminOrMember(member);

        Task task = findAndValidateTask(projectId, taskId);

        User assignee = null;
        if (assigneeId != null) {
            User potentialAssignee = userRepository.findById(assigneeId)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, 
                    "Utilisateur non trouvé"));
                    
            ProjectMember assigneeMember = projectMemberRepository.findByProjectAndUser(project, potentialAssignee)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.BAD_REQUEST, 
                    "L'utilisateur assigné n'est pas membre du projet"));
            assignee = assigneeMember.getUser();
        }

        task.setAssignedUser(assignee);
        task.setUpdatedAt(LocalDateTime.now());

        Task savedTask = taskRepository.save(task);

        String historyMessage = assignee != null ?
            String.format("Tâche assignée à %s", assignee.getUsername()) :
            "Tâche désassignée";
        createHistoryEntry(savedTask, assigner, historyMessage);

        if (assignee != null) {
            emailService.sendEmail(
                assignee.getEmail(),
                "Nouvelle tâche assignée",
                String.format("La tâche '%s' vous a été assignée dans le projet '%s'.",
                    task.getName(),
                    task.getProject().getName())
            );
        }

        return TaskDto.fromEntity(savedTask);
    }

    /**
     * Récupère l'historique d'une tâche
     */
    public List<TaskHistory> getTaskHistory(Task task, User user) {
        ProjectMember projectMember = projectMemberRepository.findByProjectAndUser(task.getProject(), user)
            .orElseThrow(() -> new PermissionDeniedException("Vous n'êtes pas membre de ce projet"));

        roleService.hasRole(projectMember, new ProjectMember.Role[]{
            ProjectMember.Role.ADMIN,
            ProjectMember.Role.MEMBER,
            ProjectMember.Role.OBSERVER
        });

        return taskHistoryRepository.findByTaskOrderByChangedAtDesc(task);
    }

    private void createHistoryEntry(Task task, User changedBy, String description) {
        TaskHistory history = new TaskHistory();
        history.setTask(task);
        history.setChangedBy(changedBy);
        history.setChangeDescription(description);
        history.setChangedAt(LocalDateTime.now());
        taskHistoryRepository.save(history);
    }

    @Transactional(readOnly = true)
    public TaskDto getTask(Long projectId, Long taskId, User user) {
        projectService.checkProjectAccess(projectId, user);
        Task task = findAndValidateTask(projectId, taskId);
        return TaskDto.fromEntity(task);
    }

    @Transactional(readOnly = true)
    public List<TaskHistoryDto> getTaskHistory(Long projectId, Long taskId, User user) {
        projectService.checkProjectAccess(projectId, user);
        Task task = findAndValidateTask(projectId, taskId);
        
        return taskHistoryRepository.findByTaskOrderByChangedAtDesc(task)
            .stream()
            .map(TaskHistoryDto::fromEntity)
            .toList();
    }
} 