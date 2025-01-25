package com.visiplus.pmt.controller;

import com.visiplus.pmt.dto.ProjectMemberDto;
import com.visiplus.pmt.model.User;
import com.visiplus.pmt.service.ProjectMemberService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/projects/{projectId}/members")
@RequiredArgsConstructor
public class ProjectMemberController {

    private final ProjectMemberService projectMemberService;

    @GetMapping
    @PreAuthorize("isAuthenticated()")
    public ResponseEntity<List<ProjectMemberDto>> getMembersByProject(
            @PathVariable Long projectId,
            @AuthenticationPrincipal User user
    ) {
        return ResponseEntity.ok(projectMemberService.getMembersByProject(projectId, user));
    }
} 