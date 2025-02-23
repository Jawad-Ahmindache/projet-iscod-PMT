package com.visiplus.pmt.controller;

import com.visiplus.pmt.model.Project;
import com.visiplus.pmt.model.User;
import com.visiplus.pmt.service.ProjectService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/projects")
@RequiredArgsConstructor
@Tag(name = "Projects", description = "API de gestion des projets")
public class ProjectController {

    private final ProjectService projectService;

    @Operation(
        summary = "Lister les projets de l'utilisateur",
        description = "Récupère tous les projets auxquels l'utilisateur participe, avec pagination"
    )
    @ApiResponses(value = {
        @ApiResponse(
            responseCode = "200",
            description = "Liste des projets récupérée avec succès",
            content = @Content(mediaType = "application/json", schema = @Schema(implementation = Project.class))
        ),
        @ApiResponse(responseCode = "401", description = "Non authentifié", content = @Content)
    })
    @GetMapping
    @PreAuthorize("isAuthenticated()")
    public ResponseEntity<Page<Project>> getUserProjects(
            @Parameter(hidden = true) @AuthenticationPrincipal User user,
            @Parameter(description = "Paramètres de pagination") Pageable pageable
    ) {
        return ResponseEntity.ok(projectService.getProjectsByMember(user, pageable));
    }

    @Operation(
        summary = "Obtenir les détails d'un projet",
        description = "Récupère les informations détaillées d'un projet spécifique"
    )
    @ApiResponses(value = {
        @ApiResponse(
            responseCode = "200",
            description = "Projet récupéré avec succès",
            content = @Content(mediaType = "application/json", schema = @Schema(implementation = Project.class))
        ),
        @ApiResponse(responseCode = "401", description = "Non authentifié", content = @Content),
        @ApiResponse(responseCode = "403", description = "Non autorisé", content = @Content),
        @ApiResponse(responseCode = "404", description = "Projet non trouvé", content = @Content)
    })
    @GetMapping("/{id}")
    @PreAuthorize("isAuthenticated()")
    public ResponseEntity<Project> getProject(
            @Parameter(hidden = true) @AuthenticationPrincipal User user,
            @Parameter(description = "ID du projet", required = true) @PathVariable Long id
    ) {
        return ResponseEntity.ok(projectService.getProjectByIdAndMember(id, user));
    }

    @Operation(
        summary = "Créer un nouveau projet",
        description = "Crée un nouveau projet avec l'utilisateur courant comme propriétaire"
    )
    @ApiResponses(value = {
        @ApiResponse(
            responseCode = "200",
            description = "Projet créé avec succès",
            content = @Content(mediaType = "application/json", schema = @Schema(implementation = Project.class))
        ),
        @ApiResponse(responseCode = "400", description = "Données du projet invalides", content = @Content),
        @ApiResponse(responseCode = "401", description = "Non authentifié", content = @Content)
    })
    @PostMapping
    @PreAuthorize("isAuthenticated()")
    public ResponseEntity<Project> createProject(
            @Parameter(hidden = true) @AuthenticationPrincipal User user,
            @Parameter(description = "Données du projet", required = true) @RequestBody Project project
    ) {
        return ResponseEntity.ok(projectService.createProject(project, user));
    }
} 