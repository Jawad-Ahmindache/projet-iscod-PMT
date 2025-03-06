package com.visiplus.pmt.utils;

import com.visiplus.pmt.model.*;
import com.visiplus.pmt.repository.*;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.stereotype.Component;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.Arrays;
import java.util.List;

@Component
@RestController
@RequiredArgsConstructor
public class DataSeeder implements CommandLineRunner {

    private final UserRepository userRepository;
    private final ProjectRepository projectRepository;
    private final ProjectMemberRepository projectMemberRepository;
    private final TaskRepository taskRepository;
    private final TaskHistoryRepository taskHistoryRepository;
    private final NotificationRepository notificationRepository;
    private final PasswordEncoder passwordEncoder;

    @Override
    public void run(String... args) {
        if (shouldSeed(args)) {
            clearData();
            User[] users = createUsers();
            Project[] projects = createProjects(users);
            createProjectMembers(projects, users);
            Task[] tasks = createTasks(projects, users);
            createTaskHistories(tasks, users);
            createNotifications(users);
            
            System.out.println("✅ Données de test générées avec succès !");
        }
    }

    private boolean shouldSeed(String... args) {
        return Arrays.asList(args).contains("--seed");
    }

    private void clearData() {
        System.out.println("🗑️ Suppression des données existantes...");
        taskHistoryRepository.deleteAll();
        notificationRepository.deleteAll();
        taskRepository.deleteAll();
        projectMemberRepository.deleteAll();
        projectRepository.deleteAll();
        userRepository.deleteAll();
    }

    private User[] createUsers() {
        System.out.println("👥 Création des utilisateurs...");
        String password = passwordEncoder.encode("admin123");
        
        User[] users = {
            createUser("admin", "admin@example.com", password),
            createUser("alice", "alice@example.com", password),
            createUser("bob", "bob@example.com", password),
            createUser("charlie", "charlie@example.com", password),
            createUser("david", "david@example.com", password),
            createUser("emma", "emma@example.com", password)
        };

        return Arrays.stream(users)
                    .map(userRepository::save)
                    .toArray(User[]::new);
    }

    private User createUser(String username, String email, String password) {
        User user = new User();
        user.setUsername(username);
        user.setEmail(email);
        user.setPassword(password);
        return user;
    }

    private Project[] createProjects(User[] users) {
        System.out.println("📁 Création des projets...");
        Project[] projects = {
            createProject("Projet E-commerce", "Développement d'une plateforme e-commerce complète", 
                        LocalDate.of(2024, 1, 1)),
            createProject("Application Mobile", "Application mobile de gestion de tâches", 
                        LocalDate.of(2024, 2, 1)),
            createProject("Refonte Site Web", "Refonte complète du site web corporate", 
                        LocalDate.of(2024, 3, 1))
        };

        return Arrays.stream(projects)
                    .map(projectRepository::save)
                    .toArray(Project[]::new);
    }

    private Project createProject(String name, String description, LocalDate startDate) {
        Project project = new Project();
        project.setName(name);
        project.setDescription(description);
        project.setStartDate(startDate);
        return project;
    }

    private void createProjectMembers(Project[] projects, User[] users) {
        System.out.println("👥 Création des membres des projets...");
        List<ProjectMember> members = Arrays.asList(
            // Projet E-commerce
            createProjectMember(projects[0], users[0], ProjectMember.Role.ADMIN),
            createProjectMember(projects[0], users[1], ProjectMember.Role.MEMBER),
            createProjectMember(projects[0], users[2], ProjectMember.Role.OBSERVER),
            // Application Mobile
            createProjectMember(projects[1], users[1], ProjectMember.Role.ADMIN),
            createProjectMember(projects[1], users[2], ProjectMember.Role.MEMBER),
            createProjectMember(projects[1], users[3], ProjectMember.Role.MEMBER),
            createProjectMember(projects[1], users[4], ProjectMember.Role.OBSERVER),
            // Refonte Site Web
            createProjectMember(projects[2], users[2], ProjectMember.Role.ADMIN),
            createProjectMember(projects[2], users[3], ProjectMember.Role.MEMBER),
            createProjectMember(projects[2], users[5], ProjectMember.Role.MEMBER)
        );

        projectMemberRepository.saveAll(members);
    }

    private ProjectMember createProjectMember(Project project, User user, ProjectMember.Role role) {
        ProjectMember member = new ProjectMember();
        member.setProject(project);
        member.setUser(user);
        member.setRole(role);
        return member;
    }

    private Task[] createTasks(Project[] projects, User[] users) {
        System.out.println("📋 Création des tâches...");
        Task[] tasks = {
            // Projet E-commerce
            createTask(projects[0], "Configuration du serveur", 
                      "Mise en place de l'infrastructure serveur",
                      LocalDate.of(2024, 1, 15), Task.Priority.HIGH, 
                      Task.Status.TODO, users[1]),
            createTask(projects[0], "Développement Frontend",
                      "Création des interfaces utilisateur",
                      LocalDate.of(2024, 2, 1), Task.Priority.MEDIUM,
                      Task.Status.IN_PROGRESS, users[1]),
            createTask(projects[0], "Intégration API Paiement",
                      "Intégration de Stripe",
                      LocalDate.of(2024, 2, 15), Task.Priority.HIGH,
                      Task.Status.TODO, users[0]),
            // Application Mobile
            createTask(projects[1], "Design UI/UX",
                      "Création des maquettes",
                      LocalDate.of(2024, 2, 15), Task.Priority.LOW,
                      Task.Status.COMPLETED, users[3]),
            createTask(projects[1], "Développement iOS",
                      "Développement de l'app iOS",
                      LocalDate.of(2024, 3, 1), Task.Priority.HIGH,
                      Task.Status.IN_PROGRESS, users[2]),
            createTask(projects[1], "Développement Android",
                      "Développement de l'app Android",
                      LocalDate.of(2024, 3, 15), Task.Priority.HIGH,
                      Task.Status.TODO, users[1]),
            // Refonte Site Web
            createTask(projects[2], "Analyse des besoins",
                      "Analyse des besoins clients",
                      LocalDate.of(2024, 3, 10), Task.Priority.MEDIUM,
                      Task.Status.COMPLETED, users[3]),
            createTask(projects[2], "Design System",
                      "Création du design system",
                      LocalDate.of(2024, 3, 20), Task.Priority.HIGH,
                      Task.Status.IN_PROGRESS, users[5]),
            createTask(projects[2], "Développement Frontend",
                      "Intégration des composants",
                      LocalDate.of(2024, 4, 1), Task.Priority.MEDIUM,
                      Task.Status.TODO, users[2])
        };

        return Arrays.stream(tasks)
                    .map(taskRepository::save)
                    .toArray(Task[]::new);
    }

    private Task createTask(Project project, String name, String description, 
                          LocalDate dueDate, Task.Priority priority, 
                          Task.Status status, User assignedUser) {
        Task task = new Task();
        task.setProject(project);
        task.setName(name);
        task.setDescription(description);
        task.setDueDate(dueDate);
        task.setPriority(priority);
        task.setStatus(status);
        task.setAssignedUser(assignedUser);
        return task;
    }

    private void createTaskHistories(Task[] tasks, User[] users) {
        System.out.println("📝 Création de l'historique des tâches...");
        List<TaskHistory> histories = Arrays.asList(
            createTaskHistory(tasks[0], users[0], "Tâche créée"),
            createTaskHistory(tasks[1], users[0], "Tâche créée"),
            createTaskHistory(tasks[1], users[1], "Statut changé à EN_COURS"),
            createTaskHistory(tasks[2], users[0], "Tâche créée"),
            createTaskHistory(tasks[3], users[1], "Tâche créée"),
            createTaskHistory(tasks[3], users[3], "Tâche marquée comme terminée"),
            createTaskHistory(tasks[4], users[1], "Tâche créée"),
            createTaskHistory(tasks[4], users[2], "Statut changé à EN_COURS"),
            createTaskHistory(tasks[5], users[1], "Tâche créée"),
            createTaskHistory(tasks[6], users[2], "Tâche créée"),
            createTaskHistory(tasks[6], users[3], "Tâche marquée comme terminée"),
            createTaskHistory(tasks[7], users[2], "Tâche créée"),
            createTaskHistory(tasks[7], users[5], "Statut changé à EN_COURS"),
            createTaskHistory(tasks[8], users[2], "Tâche créée")
        );

        taskHistoryRepository.saveAll(histories);
    }

    private TaskHistory createTaskHistory(Task task, User changedBy, String description) {
        TaskHistory history = new TaskHistory();
        history.setTask(task);
        history.setChangedBy(changedBy);
        history.setChangeDescription(description);
        return history;
    }

    private void createNotifications(User[] users) {
        System.out.println("🔔 Création des notifications...");
        List<Notification> notifications = Arrays.asList(
            createNotification(users[1], "Nouvelle tâche assignée",
                             "Vous avez été assigné à la tâche \"Configuration du serveur\"",
                             LocalDateTime.now().minusDays(3), false),
            createNotification(users[1], "Modification de priorité",
                             "La priorité de la tâche \"Développement Frontend\" a été modifiée",
                             LocalDateTime.now().minusDays(2), false),
            createNotification(users[2], "Nouvelle tâche assignée",
                             "Vous avez été assigné à la tâche \"Développement iOS\"",
                             LocalDateTime.now().minusDays(2), true),
            createNotification(users[2], "Ajout au projet",
                             "Vous avez été ajouté au projet \"Refonte Site Web\"",
                             LocalDateTime.now().minusDays(1), false),
            createNotification(users[3], "Tâche terminée",
                             "La tâche \"Design UI/UX\" a été marquée comme terminée",
                             LocalDateTime.now(), false),
            createNotification(users[5], "Modification de priorité",
                             "La priorité de la tâche \"Design System\" a été augmentée",
                             LocalDateTime.now().minusHours(12), false)
        );

        notificationRepository.saveAll(notifications);
    }

    private Notification createNotification(User user, String title, String message, 
                                         LocalDateTime createdAt, boolean isRead) {
        Notification notification = new Notification();
        notification.setUser(user);
        notification.setTitle(title);
        notification.setMessage(message);
        notification.setCreatedAt(createdAt);
        notification.setRead(isRead);
        return notification;
    }

    @PostMapping("/api/seed")
    public ResponseEntity<String> seedData() {
        clearData();
        User[] users = createUsers();
        Project[] projects = createProjects(users);
        createProjectMembers(projects, users);
        Task[] tasks = createTasks(projects, users);
        createTaskHistories(tasks, users);
        createNotifications(users);
        
        return ResponseEntity.ok("✅ Données de test générées avec succès !");
    }
} 