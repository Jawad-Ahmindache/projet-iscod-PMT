package com.visiplus.pmt.service;

import com.visiplus.pmt.model.Project;
import com.visiplus.pmt.model.ProjectMember;
import com.visiplus.pmt.model.User;
import com.visiplus.pmt.repository.ProjectMemberRepository;
import com.visiplus.pmt.repository.ProjectRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.server.ResponseStatusException;
import com.visiplus.pmt.security.RoleService;
import com.visiplus.pmt.model.ProjectMember.Role;

@Service
@RequiredArgsConstructor
public class ProjectService {

    private final ProjectRepository projectRepository;
    private final ProjectMemberRepository projectMemberRepository;
    private final RoleService roleService;
    @Transactional(readOnly = true)
    public Page<Project> getProjectsByMember(User user, Pageable pageable) {
        return projectRepository.findByMembers_User(user, pageable);
    }

    @Transactional(readOnly = true)
    public Project getProjectByIdAndMember(Long projectId, User user) {
        return projectRepository.findByIdAndMembers_User(projectId, user)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Projet non trouvé"));
    }

    @Transactional
    public Project createProject(Project project, User user) {
        project.setId(null); // Assure qu'on crée un nouveau projet
        Project savedProject = projectRepository.save(project);

        ProjectMember projectMember = new ProjectMember();
        projectMember.setProject(savedProject);
        projectMember.setUser(user);
        projectMember.setRole(ProjectMember.Role.ADMIN);
        projectMemberRepository.save(projectMember);

        return savedProject;
    }
    

    public void isAdminOrMember(ProjectMember projectMember) {
        roleService.hasRole(projectMember, new Role[] { Role.ADMIN, Role.MEMBER });
    }

    @Transactional(readOnly = true)
    public void checkProjectAccess(Long projectId, User user) {
        if (!projectRepository.existsByIdAndMembers_User(projectId, user)) {
            throw new ResponseStatusException(HttpStatus.FORBIDDEN, "Vous n'avez pas accès à ce projet");
        }
    }
} 