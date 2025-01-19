package com.visiplus.pmt.controller;

import com.visiplus.pmt.dto.UpdateAccountDTO;
import com.visiplus.pmt.dto.UserDto;
import com.visiplus.pmt.model.User;
import com.visiplus.pmt.service.AccountService;
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
public class AccountController {

    private final AccountService accountService;

    @PutMapping
    @PreAuthorize("isAuthenticated()")
    public ResponseEntity<UserDto> updateAccount(
            @AuthenticationPrincipal User user,
            @Valid @RequestBody UpdateAccountDTO updateAccountDTO
    ) {
        return ResponseEntity.ok(accountService.updateAccount(user, updateAccountDTO));
    }
} 