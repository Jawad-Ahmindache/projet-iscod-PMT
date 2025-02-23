package com.visiplus.pmt.controller;

import com.visiplus.pmt.dto.UpdateAccountDTO;
import com.visiplus.pmt.dto.UserDto;
import com.visiplus.pmt.model.User;
import com.visiplus.pmt.service.AccountService;
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
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/account")
@RequiredArgsConstructor
@CrossOrigin(origins = "${app.cors.allowed-origins}")
@Tag(name = "Account", description = "API de gestion du compte utilisateur")
public class AccountController {

    private final AccountService accountService;

    @Operation(
        summary = "Mettre à jour les informations du compte",
        description = "Permet à un utilisateur authentifié de mettre à jour ses informations de compte"
    )
    @ApiResponses(value = {
        @ApiResponse(
            responseCode = "200",
            description = "Compte mis à jour avec succès",
            content = @Content(mediaType = "application/json", schema = @Schema(implementation = UserDto.class))
        ),
        @ApiResponse(
            responseCode = "400",
            description = "Données de mise à jour invalides",
            content = @Content
        ),
        @ApiResponse(
            responseCode = "401",
            description = "Utilisateur non authentifié",
            content = @Content
        )
    })
    @PutMapping
    @PreAuthorize("isAuthenticated()")
    public ResponseEntity<UserDto> updateAccount(
            @Parameter(hidden = true) @AuthenticationPrincipal User user,
            @Parameter(description = "Données de mise à jour du compte", required = true)
            @Valid @RequestBody UpdateAccountDTO updateAccountDTO
    ) {
        return ResponseEntity.ok(accountService.updateAccount(user, updateAccountDTO));
    }
} 