package com.visiplus.pmt.controller;

import com.visiplus.pmt.dto.LoginRequest;
import com.visiplus.pmt.dto.RegisterRequest;
import com.visiplus.pmt.dto.UserDto;
import com.visiplus.pmt.model.User;
import com.visiplus.pmt.security.OnlyDisconnected;
import com.visiplus.pmt.service.AuthService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;
import org.springframework.security.access.prepost.PreAuthorize;

@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
@CrossOrigin(origins = "${app.cors.allowed-origins}")
@Tag(name = "Authentication", description = "API d'authentification et de gestion des utilisateurs")
public class AuthController {

    private final AuthService authService;

    @Operation(
        summary = "Connexion utilisateur",
        description = "Authentifie un utilisateur avec son email et mot de passe"
    )
    @ApiResponses(value = {
        @ApiResponse(
            responseCode = "200",
            description = "Authentification réussie",
            content = @Content(mediaType = "application/json", schema = @Schema(implementation = UserDto.class))
        ),
        @ApiResponse(
            responseCode = "401",
            description = "Identifiants invalides",
            content = @Content
        )
    })
    @PostMapping("/login")
    public ResponseEntity<?> login(
        @Parameter(description = "Informations de connexion", required = true)
        @Valid @RequestBody LoginRequest loginRequest
    ) {
        return ResponseEntity.ok(authService.login(loginRequest));
    }

    @Operation(
        summary = "Inscription utilisateur",
        description = "Crée un nouveau compte utilisateur"
    )
    @ApiResponses(value = {
        @ApiResponse(
            responseCode = "200",
            description = "Inscription réussie",
            content = @Content(mediaType = "application/json", schema = @Schema(implementation = UserDto.class))
        ),
        @ApiResponse(
            responseCode = "400",
            description = "Données d'inscription invalides ou email déjà utilisé",
            content = @Content
        )
    })
    @PostMapping("/register")
    public ResponseEntity<?> register(
        @Parameter(description = "Informations d'inscription", required = true)
        @Valid @RequestBody RegisterRequest registerRequest
    ) {
        return ResponseEntity.ok(authService.register(registerRequest));
    }

    @Operation(
        summary = "Obtenir le profil de l'utilisateur connecté",
        description = "Récupère les informations de l'utilisateur actuellement authentifié"
    )
    @ApiResponses(value = {
        @ApiResponse(
            responseCode = "200",
            description = "Profil récupéré avec succès",
            content = @Content(mediaType = "application/json", schema = @Schema(implementation = UserDto.class))
        ),
        @ApiResponse(
            responseCode = "401",
            description = "Utilisateur non authentifié",
            content = @Content
        )
    })
    @GetMapping("/me")
    @PreAuthorize("isAuthenticated()")
    public ResponseEntity<UserDto> getCurrentUser(
        @Parameter(hidden = true) @AuthenticationPrincipal User user
    ) {
        return ResponseEntity.ok(new UserDto(user.getId(), user.getUsername(), user.getEmail()));
    }
} 