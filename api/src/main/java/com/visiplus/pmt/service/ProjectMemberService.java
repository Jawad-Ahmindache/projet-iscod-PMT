package com.visiplus.pmt.service;

import com.visiplus.pmt.dto.ProjectMemberDto;
import com.visiplus.pmt.model.Project;
import com.visiplus.pmt.model.User;
import com.visiplus.pmt.repository.ProjectMemberRepository;
import com.visiplus.pmt.repository.ProjectRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ProjectMemberService {

    private final ProjectMemberRepository projectMemberRepository;
    private final ProjectRepository projectRepository;

    @Transactional(readOnly = true)
    public List<ProjectMemberDto> getMembersByProject(Long projectId, User user) {
        Project project = projectRepository.findById(projectId)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Le projet n'existe pas"));

        if (!projectMemberRepository.existsByProjectIdAndUserId(projectId, user.getId())) {
            throw new ResponseStatusException(HttpStatus.FORBIDDEN, "Vous n'avez pas accès à ce projet");
        }

        return projectMemberRepository.findByProjectId(projectId)
                .stream()
                .map(ProjectMemberDto::fromEntity)
                .toList();
    }
} 