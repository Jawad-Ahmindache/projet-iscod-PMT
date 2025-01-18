package com.visiplus.pmt.service;

import com.visiplus.pmt.model.Project;
import com.visiplus.pmt.model.User;
import com.visiplus.pmt.repository.ProjectRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.server.ResponseStatusException;

@Service
@RequiredArgsConstructor
public class ProjectService {

    private final ProjectRepository projectRepository;

    @Transactional(readOnly = true)
    public Page<Project> getProjectsByMember(User user, Pageable pageable) {
        return projectRepository.findByMembers_User(user, pageable);
    }

    @Transactional(readOnly = true)
    public Project getProjectByIdAndMember(Long projectId, User user) {
        return projectRepository.findByIdAndMembers_User(projectId, user)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Projet non trouvé"));
    }

    @Transactional(readOnly = true)
    public void checkProjectAccess(Long projectId, User user) {
        if (!projectRepository.existsByIdAndMembers_User(projectId, user)) {
            throw new ResponseStatusException(HttpStatus.FORBIDDEN, "Vous n'avez pas accès à ce projet");
        }
    }
} 