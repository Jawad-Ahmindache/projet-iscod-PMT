package com.visiplus.pmt.service;

import com.visiplus.pmt.dto.TaskDto;
import com.visiplus.pmt.exception.PermissionDeniedException;
import com.visiplus.pmt.model.*;
import com.visiplus.pmt.repository.ProjectMemberRepository;
import com.visiplus.pmt.repository.TaskRepository;
import com.visiplus.pmt.repository.TaskHistoryRepository;
import com.visiplus.pmt.repository.ProjectRepository;
import com.visiplus.pmt.security.RoleService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.server.ResponseStatusException;

import java.time.LocalDateTime;
import java.util.List;

@Service
@RequiredArgsConstructor
public class TaskService {

    private final TaskRepository taskRepository;
    private final ProjectRepository projectRepository;
    private final ProjectMemberRepository projectMemberRepository;
    private final TaskHistoryRepository taskHistoryRepository;
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

        projectService.checkProjectAccess(projectId, user);

        task.setId(null);
        task.setProject(project);
        task.setStatus(Task.Status.TODO);
        if (task.getPriority() == null) {
            task.setPriority(Task.Priority.LOW);
        }

        return TaskDto.fromEntity(taskRepository.save(task));
    }

    @Transactional
    public TaskDto updateTask(Long projectId, Long taskId, Task updatedTask, User user) {
        projectService.checkProjectAccess(projectId, user);

        Task task = taskRepository.findById(taskId)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Tâche non trouvée"));

        if (!task.getProject().getId().equals(projectId)) {
            throw new ResponseStatusException(HttpStatus.FORBIDDEN, "Cette tâche n'appartient pas à ce projet");
        }

        task.setName(updatedTask.getName());
        task.setDescription(updatedTask.getDescription());
        task.setPriority(updatedTask.getPriority());
        task.setDueDate(updatedTask.getDueDate());
        task.setAssignedUser(updatedTask.getAssignedUser());

        return TaskDto.fromEntity(taskRepository.save(task));
    }

    @Transactional
    public TaskDto updateTaskStatus(Long projectId, Long taskId, Task.Status status, User user) {
        projectService.checkProjectAccess(projectId, user);

        Task task = taskRepository.findById(taskId)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Tâche non trouvée"));

        if (!task.getProject().getId().equals(projectId)) {
            throw new ResponseStatusException(HttpStatus.FORBIDDEN, "Cette tâche n'appartient pas à ce projet");
        }

        task.setStatus(status);
        return TaskDto.fromEntity(taskRepository.save(task));
    }

    /**
     * Crée une nouvelle tâche dans un projet
     */
    @Transactional
    public Task createTask(Project project, Task task, User creator) {
        ProjectMember projectMember = projectMemberRepository.findByProjectAndUser(project, creator)
            .orElseThrow(() -> new PermissionDeniedException("Vous n'êtes pas membre de ce projet"));

        roleService.hasRole(projectMember, new ProjectMember.Role[]{
            ProjectMember.Role.ADMIN,
            ProjectMember.Role.MEMBER
        });

        task.setProject(project);
        task.setCreatedAt(LocalDateTime.now());
        task.setUpdatedAt(LocalDateTime.now());
        task.setStatus(Task.Status.TODO);

        Task savedTask = taskRepository.save(task);

        TaskHistory history = new TaskHistory();
        history.setTask(savedTask);
        history.setChangedBy(creator);
        history.setChangeDescription("Tâche créée");
        history.setChangedAt(LocalDateTime.now());
        taskHistoryRepository.save(history);

        return savedTask;
    }

    /**
     * Met à jour une tâche existante
     */
    @Transactional
    public Task updateTask(Task task, Task updates, User editor) {
        ProjectMember projectMember = projectMemberRepository.findByProjectAndUser(task.getProject(), editor)
            .orElseThrow(() -> new PermissionDeniedException("Vous n'êtes pas membre de ce projet"));

        roleService.hasRole(projectMember, new ProjectMember.Role[]{
            ProjectMember.Role.ADMIN,
            ProjectMember.Role.MEMBER
        });

        Task.Status oldStatus = task.getStatus();
        Task.Priority oldPriority = task.getPriority();
        String oldName = task.getName();
        String oldDescription = task.getDescription();
        User oldAssignedUser = task.getAssignedUser();

        task.setName(updates.getName());
        task.setDescription(updates.getDescription());
        task.setDueDate(updates.getDueDate());
        task.setPriority(updates.getPriority());
        task.setStatus(updates.getStatus());
        task.setAssignedUser(updates.getAssignedUser());
        task.setUpdatedAt(LocalDateTime.now());

        Task updatedTask = taskRepository.save(task);

        if (oldStatus != task.getStatus()) {
            createHistoryEntry(task, editor, 
                String.format("Statut changé de %s à %s", oldStatus, task.getStatus()));
        }
        if (oldPriority != task.getPriority()) {
            createHistoryEntry(task, editor,
                String.format("Priorité changée de %s à %s", oldPriority, task.getPriority()));
        }
        if (!oldName.equals(task.getName())) {
            createHistoryEntry(task, editor,
                String.format("Nom changé de '%s' à '%s'", oldName, task.getName()));
        }
        if ((oldDescription == null && task.getDescription() != null) ||
            (oldDescription != null && !oldDescription.equals(task.getDescription()))) {
            createHistoryEntry(task, editor, "Description mise à jour");
        }
        if ((oldAssignedUser == null && task.getAssignedUser() != null) ||
            (oldAssignedUser != null && !oldAssignedUser.equals(task.getAssignedUser()))) {
            String message = task.getAssignedUser() != null ?
                String.format("Tâche assignée à %s", task.getAssignedUser().getUsername()) :
                "Tâche désassignée";
            createHistoryEntry(task, editor, message);

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

        return updatedTask;
    }

    /**
     * Assigne une tâche à un utilisateur
     */
    @Transactional
    public Task assignTask(Task task, User assignee, User assigner) {
        ProjectMember assignerMember = projectMemberRepository.findByProjectAndUser(task.getProject(), assigner)
            .orElseThrow(() -> new PermissionDeniedException("Vous n'êtes pas membre de ce projet"));

        roleService.hasRole(assignerMember, new ProjectMember.Role[]{
            ProjectMember.Role.ADMIN,
            ProjectMember.Role.MEMBER
        });

        ProjectMember assigneeMember = projectMemberRepository.findByProjectAndUser(task.getProject(), assignee)
            .orElseThrow(() -> new IllegalArgumentException("L'utilisateur assigné n'est pas membre du projet"));

        task.setAssignedUser(assignee);
        task.setUpdatedAt(LocalDateTime.now());

        Task savedTask = taskRepository.save(task);

        createHistoryEntry(task, assigner,
            String.format("Tâche assignée à %s", assignee.getUsername()));

        emailService.sendEmail(
            assignee.getEmail(),
            "Nouvelle tâche assignée",
            String.format("La tâche '%s' vous a été assignée dans le projet '%s'.",
                task.getName(),
                task.getProject().getName())
        );

        return savedTask;
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
} 