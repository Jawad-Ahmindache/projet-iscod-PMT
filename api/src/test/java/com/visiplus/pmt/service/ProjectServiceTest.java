package com.visiplus.pmt.service;

import com.visiplus.pmt.model.Project;
import com.visiplus.pmt.model.ProjectMember;
import com.visiplus.pmt.model.User;
import com.visiplus.pmt.repository.ProjectMemberRepository;
import com.visiplus.pmt.repository.ProjectRepository;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.web.server.ResponseStatusException;

import java.util.Arrays;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
class ProjectServiceTest {

    @Mock
    private ProjectRepository projectRepository;

    @Mock
    private ProjectMemberRepository projectMemberRepository;

    @InjectMocks
    private ProjectService projectService;

    @Test
    @DisplayName("Récupération de la liste des projets auxquels un membre participe")
    void testGetProjectsByMember() {
        User user = new User();
        user.setId(1L);
        user.setEmail("test@test.com");
        
        PageRequest pageable = PageRequest.of(0, 10);
        Project project1 = new Project();
        project1.setId(1L);
        project1.setName("Projet 1");
        
        Project project2 = new Project();
        project2.setId(2L);
        project2.setName("Projet 2");
        
        Page<Project> expectedProjects = new PageImpl<>(Arrays.asList(project1, project2));

        when(projectRepository.findByMembers_User(user, pageable)).thenReturn(expectedProjects);

        Page<Project> result = projectService.getProjectsByMember(user, pageable);

        assertEquals(expectedProjects, result);
        verify(projectRepository).findByMembers_User(user, pageable);
    }
    @Test
    @DisplayName("Recherche et accès à un projet spécifique par son ID")
    void testGetProjectByIdAndMemberFound() {
        User user = new User();
        user.setId(1L);
        Long projectId = 1L;
        Project project = new Project();
        project.setId(projectId);
        project.setName("Projet Test");
        
        when(projectRepository.findByIdAndMembers_User(projectId, user))
            .thenReturn(Optional.of(project));

        Project result = projectService.getProjectByIdAndMember(projectId, user);

        assertEquals(project, result);
        verify(projectRepository).findByIdAndMembers_User(projectId, user);
    }

    @Test
    @DisplayName("Tentative d'accès à un projet inexistant génère une erreur")
    void testGetProjectByIdAndMemberNotFound() {
        User user = new User();
        user.setId(1L);
        Long projectId = 1L;

        when(projectRepository.findByIdAndMembers_User(projectId, user))
            .thenReturn(Optional.empty());

        assertThrows(ResponseStatusException.class, () -> 
            projectService.getProjectByIdAndMember(projectId, user));
    }

    @Test
    @DisplayName("Création d'un nouveau projet et attribution du rôle admin au créateur")
    void testCreateProject() {
        User user = new User();
        user.setId(1L);
        Project project = new Project();
        project.setName("Nouveau Projet");
        
        Project savedProject = new Project();
        savedProject.setId(1L);
        savedProject.setName("Nouveau Projet");

        when(projectRepository.save(any(Project.class))).thenReturn(savedProject);
        when(projectMemberRepository.save(any(ProjectMember.class))).thenReturn(new ProjectMember());

        Project result = projectService.createProject(project, user);

        assertEquals(savedProject, result);
        verify(projectRepository).save(project);
        verify(projectMemberRepository).save(any(ProjectMember.class));
    }


    @Test
    @DisplayName("Vérification des permissions d'accès pour un membre du projet")
    void testCheckProjectAccessAllowed() {
        User user = new User();
        user.setId(1L);
        Long projectId = 1L;

        when(projectRepository.existsByIdAndMembers_User(projectId, user)).thenReturn(true);

        assertDoesNotThrow(() -> projectService.checkProjectAccess(projectId, user));
        verify(projectRepository).existsByIdAndMembers_User(projectId, user);
    }

    @Test
    @DisplayName("Blocage de l'accès pour un utilisateur non membre du projet")
    void testCheckProjectAccessForbidden() {
        User user = new User();
        user.setId(1L);
        Long projectId = 1L;

        when(projectRepository.existsByIdAndMembers_User(projectId, user)).thenReturn(false);

        assertThrows(ResponseStatusException.class, () -> 
            projectService.checkProjectAccess(projectId, user));
    }
} 