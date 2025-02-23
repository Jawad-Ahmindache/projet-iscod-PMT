package com.visiplus.pmt.controller;

import com.visiplus.pmt.dto.ProjectMemberDto;
import com.visiplus.pmt.model.User;
import com.visiplus.pmt.service.ProjectMemberService;
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
@RequestMapping("/api/projects/{projectId}/members")
@RequiredArgsConstructor
@Tag(name = "Project Members", description = "API de gestion des membres d'un projet")
public class ProjectMemberController {

    private final ProjectMemberService projectMemberService;

    @Operation(
        summary = "Lister les membres d'un projet",
        description = "Récupère la liste de tous les membres d'un projet spécifique"
    )
    @ApiResponses(value = {
        @ApiResponse(
            responseCode = "200",
            description = "Liste des membres récupérée avec succès",
            content = @Content(mediaType = "application/json", schema = @Schema(implementation = ProjectMemberDto.class))
        ),
        @ApiResponse(responseCode = "401", description = "Non authentifié", content = @Content),
        @ApiResponse(responseCode = "403", description = "Non autorisé", content = @Content),
        @ApiResponse(responseCode = "404", description = "Projet non trouvé", content = @Content)
    })
    @GetMapping
    @PreAuthorize("isAuthenticated()")
    public ResponseEntity<List<ProjectMemberDto>> getMembersByProject(
            @Parameter(description = "ID du projet", required = true) @PathVariable Long projectId,
            @Parameter(hidden = true) @AuthenticationPrincipal User user
    ) {
        return ResponseEntity.ok(projectMemberService.getMembersByProject(projectId, user));
    }
} 