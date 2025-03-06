package com.visiplus.pmt.controller;

import com.visiplus.pmt.dto.TaskDto;
import com.visiplus.pmt.dto.UpdateTaskDto;
import com.visiplus.pmt.dto.TaskHistoryDto;
import com.visiplus.pmt.model.Task;
import com.visiplus.pmt.model.User;
import com.visiplus.pmt.service.TaskService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/projects/{projectId}/tasks")
@RequiredArgsConstructor
@Tag(name = "Tasks", description = "API de gestion des tâches d'un projet")
public class TaskController {

    private final TaskService taskService;

    @Operation(
        summary = "Lister les tâches d'un projet",
        description = "Récupère toutes les tâches associées à un projet spécifique"
    )
    @ApiResponses(value = {
        @ApiResponse(
            responseCode = "200",
            description = "Liste des tâches récupérée avec succès",
            content = @Content(mediaType = "application/json", schema = @Schema(implementation = TaskDto.class))
        ),
        @ApiResponse(responseCode = "401", description = "Non authentifié", content = @Content),
        @ApiResponse(responseCode = "403", description = "Non autorisé", content = @Content)
    })
    @GetMapping
    @PreAuthorize("isAuthenticated()")
    public ResponseEntity<List<TaskDto>> getProjectTasks(
            @Parameter(description = "ID du projet", required = true) @PathVariable Long projectId,
            @Parameter(hidden = true) @AuthenticationPrincipal User user
    ) {
        return ResponseEntity.ok(taskService.getTasksByProject(projectId, user));
    }

    @Operation(
        summary = "Créer une tâche",
        description = "Crée une nouvelle tâche dans un projet spécifique"
    )
    @ApiResponses(value = {
        @ApiResponse(
            responseCode = "200",
            description = "Tâche créée avec succès",
            content = @Content(mediaType = "application/json", schema = @Schema(implementation = TaskDto.class))
        ),
        @ApiResponse(responseCode = "400", description = "Données invalides", content = @Content),
        @ApiResponse(responseCode = "401", description = "Non authentifié", content = @Content),
        @ApiResponse(responseCode = "403", description = "Non autorisé", content = @Content)
    })
    @PostMapping
    @PreAuthorize("isAuthenticated()")
    public ResponseEntity<TaskDto> createTask(
            @Parameter(description = "ID du projet", required = true) @PathVariable Long projectId,
            @Parameter(description = "Données de la tâche", required = true) @RequestBody Task task,
            @Parameter(hidden = true) @AuthenticationPrincipal User user
    ) {
        return ResponseEntity.ok(taskService.createTask(projectId, task, user));
    }

    @Operation(
        summary = "Mettre à jour une tâche",
        description = "Modifie les informations d'une tâche existante"
    )
    @ApiResponses(value = {
        @ApiResponse(
            responseCode = "200",
            description = "Tâche mise à jour avec succès",
            content = @Content(mediaType = "application/json", schema = @Schema(implementation = TaskDto.class))
        ),
        @ApiResponse(responseCode = "400", description = "Données invalides", content = @Content),
        @ApiResponse(responseCode = "401", description = "Non authentifié", content = @Content),
        @ApiResponse(responseCode = "403", description = "Non autorisé", content = @Content),
        @ApiResponse(responseCode = "404", description = "Tâche non trouvée", content = @Content)
    })
    @PutMapping("/{taskId}")
    @PreAuthorize("isAuthenticated()")
    public ResponseEntity<TaskDto> updateTask(
            @Parameter(description = "ID du projet", required = true) @PathVariable Long projectId,
            @Parameter(description = "ID de la tâche", required = true) @PathVariable Long taskId,
            @Parameter(description = "Données de mise à jour", required = true) @RequestBody UpdateTaskDto updateTaskDto,
            @Parameter(hidden = true) @AuthenticationPrincipal User user
    ) {
        return ResponseEntity.ok(taskService.updateTask(projectId, taskId, updateTaskDto, user));
    }

    @Operation(
        summary = "Mettre à jour le statut d'une tâche",
        description = "Modifie le statut d'une tâche existante"
    )
    @ApiResponses(value = {
        @ApiResponse(
            responseCode = "200",
            description = "Statut mis à jour avec succès",
            content = @Content(mediaType = "application/json", schema = @Schema(implementation = TaskDto.class))
        ),
        @ApiResponse(responseCode = "400", description = "Statut invalide", content = @Content),
        @ApiResponse(responseCode = "401", description = "Non authentifié", content = @Content),
        @ApiResponse(responseCode = "403", description = "Non autorisé", content = @Content),
        @ApiResponse(responseCode = "404", description = "Tâche non trouvée", content = @Content)
    })
    @PutMapping("/{taskId}/status")
    @PreAuthorize("isAuthenticated()")
    public ResponseEntity<TaskDto> updateTaskStatus(
            @Parameter(description = "ID du projet", required = true) @PathVariable Long projectId,
            @Parameter(description = "ID de la tâche", required = true) @PathVariable Long taskId,
            @Parameter(description = "Nouveau statut", required = true) @RequestParam Task.Status status,
            @Parameter(hidden = true) @AuthenticationPrincipal User user
    ) {
        return ResponseEntity.ok(taskService.updateTaskStatus(projectId, taskId, status, user));
    }

    @Operation(
        summary = "Assigner une tâche",
        description = "Assigne une tâche à un membre du projet"
    )
    @ApiResponses(value = {
        @ApiResponse(
            responseCode = "200",
            description = "Tâche assignée avec succès",
            content = @Content(mediaType = "application/json", schema = @Schema(implementation = TaskDto.class))
        ),
        @ApiResponse(responseCode = "400", description = "Assignation invalide", content = @Content),
        @ApiResponse(responseCode = "401", description = "Non authentifié", content = @Content),
        @ApiResponse(responseCode = "403", description = "Non autorisé", content = @Content),
        @ApiResponse(responseCode = "404", description = "Tâche ou utilisateur non trouvé", content = @Content)
    })
    @PutMapping("/{taskId}/assign")
    @PreAuthorize("isAuthenticated()")
    public ResponseEntity<TaskDto> updateTaskAssignee(
            @Parameter(description = "ID du projet", required = true) @PathVariable Long projectId,
            @Parameter(description = "ID de la tâche", required = true) @PathVariable Long taskId,
            @Parameter(description = "ID de l'utilisateur assigné", required = true) @RequestParam Long assigneeId,
            @Parameter(hidden = true) @AuthenticationPrincipal User user
    ) {
        return ResponseEntity.ok(taskService.updateTaskAssignee(projectId, taskId, assigneeId, user));
    }

    @Operation(
        summary = "Mettre à jour la priorité d'une tâche",
        description = "Modifie la priorité d'une tâche existante"
    )
    @ApiResponses(value = {
        @ApiResponse(
            responseCode = "200",
            description = "Priorité mise à jour avec succès",
            content = @Content(mediaType = "application/json", schema = @Schema(implementation = TaskDto.class))
        ),
        @ApiResponse(responseCode = "400", description = "Priorité invalide", content = @Content),
        @ApiResponse(responseCode = "401", description = "Non authentifié", content = @Content),
        @ApiResponse(responseCode = "403", description = "Non autorisé", content = @Content),
        @ApiResponse(responseCode = "404", description = "Tâche non trouvée", content = @Content)
    })
    @PutMapping("/{taskId}/priority")
    @PreAuthorize("isAuthenticated()")
    public ResponseEntity<TaskDto> updateTaskPriority(
            @Parameter(description = "ID du projet", required = true) @PathVariable Long projectId,
            @Parameter(description = "ID de la tâche", required = true) @PathVariable Long taskId,
            @Parameter(description = "Nouvelle priorité", required = true) @RequestParam Task.Priority priority,
            @Parameter(hidden = true) @AuthenticationPrincipal User user
    ) {
        return ResponseEntity.ok(taskService.updateTaskPriority(projectId, taskId, priority, user));
    }

    @Operation(
        summary = "Obtenir les détails d'une tâche",
        description = "Récupère les informations détaillées d'une tâche spécifique"
    )
    @ApiResponses(value = {
        @ApiResponse(
            responseCode = "200",
            description = "Détails de la tâche récupérés avec succès",
            content = @Content(mediaType = "application/json", schema = @Schema(implementation = TaskDto.class))
        ),
        @ApiResponse(responseCode = "401", description = "Non authentifié", content = @Content),
        @ApiResponse(responseCode = "403", description = "Non autorisé", content = @Content),
        @ApiResponse(responseCode = "404", description = "Tâche non trouvée", content = @Content)
    })
    @GetMapping("/{taskId}")
    @PreAuthorize("isAuthenticated()")
    public ResponseEntity<TaskDto> getTask(
            @Parameter(description = "ID du projet", required = true) @PathVariable Long projectId,
            @Parameter(description = "ID de la tâche", required = true) @PathVariable Long taskId,
            @Parameter(hidden = true) @AuthenticationPrincipal User user
    ) {
        return ResponseEntity.ok(taskService.getTask(projectId, taskId, user));
    }

    @Operation(
        summary = "Obtenir l'historique d'une tâche",
        description = "Récupère l'historique des modifications d'une tâche spécifique"
    )
    @ApiResponses(value = {
        @ApiResponse(
            responseCode = "200",
            description = "Historique récupéré avec succès",
            content = @Content(mediaType = "application/json", schema = @Schema(implementation = TaskHistoryDto.class))
        ),
        @ApiResponse(responseCode = "401", description = "Non authentifié", content = @Content),
        @ApiResponse(responseCode = "403", description = "Non autorisé", content = @Content),
        @ApiResponse(responseCode = "404", description = "Tâche non trouvée", content = @Content)
    })
    @GetMapping("/{taskId}/history")
    @PreAuthorize("isAuthenticated()")
    public ResponseEntity<List<TaskHistoryDto>> getTaskHistory(
            @Parameter(description = "ID du projet", required = true) @PathVariable Long projectId,
            @Parameter(description = "ID de la tâche", required = true) @PathVariable Long taskId,
            @Parameter(hidden = true) @AuthenticationPrincipal User user
    ) {
        return ResponseEntity.ok(taskService.getTaskHistory(projectId, taskId, user));
    }
} 
