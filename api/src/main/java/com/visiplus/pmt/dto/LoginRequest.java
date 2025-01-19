package com.visiplus.pmt.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import lombok.Data;

@Data
public class LoginRequest {
    @NotBlank(message = "Email est requis")
    @Email(message = "Format d'email invalide")
    private String email;

    @NotBlank(message = "Password is required")
    private String password;
} 