package com.visiplus.pmt.dto;

import com.visiplus.pmt.model.ProjectMember;
import lombok.Data;

import java.time.LocalDateTime;

@Data
public class ProjectMemberDto {
    private Long id;
    private Long userId;
    private String username;
    private String email;
    private ProjectMember.Role role;
    private LocalDateTime joinedAt;

    public static ProjectMemberDto fromEntity(ProjectMember member) {
        ProjectMemberDto dto = new ProjectMemberDto();
        dto.setId(member.getId());
        dto.setUserId(member.getUser().getId());
        dto.setUsername(member.getUser().getUsername());
        dto.setEmail(member.getUser().getEmail());
        dto.setRole(member.getRole());
        dto.setJoinedAt(member.getJoinedAt());
        return dto;
    }
} 