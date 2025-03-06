package com.visiplus.pmt.service;

import com.visiplus.pmt.dto.ProjectMemberDto;
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
import org.springframework.web.server.ResponseStatusException;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
class ProjectMemberServiceTest {

    /*@Mock
    private ProjectMemberRepository projectMemberRepository;

    @Mock
    private ProjectRepository projectRepository;

    @InjectMocks
    private ProjectMemberService projectMemberService;

    @Test
    @DisplayName("Liste des membres d'un projet accessible pour un membre de l'équipe")
    void testGetMembersByProjectSuccess() {
        // Arrange
        Long projectId = 1L;
        User user = new User();
        user.setId(1L);
        user.setUsername("test.user");

        Project project = new Project();
        project.setId(projectId);
        project.setName("Projet Test");

        ProjectMember member1 = new ProjectMember();
        member1.setUser(user);
        member1.setProject(project);
        member1.setRole(ProjectMember.Role.MEMBER);

        ProjectMember member2 = new ProjectMember();
        User user2 = new User();
        user2.setId(2L);
        user2.setUsername("autre.user");
        member2.setUser(user2);
        member2.setProject(project);
        member2.setRole(ProjectMember.Role.ADMIN);

        when(projectRepository.findById(projectId)).thenReturn(Optional.of(project));
        when(projectMemberRepository.existsByProjectIdAndUserId(projectId, user.getId())).thenReturn(true);
        when(projectMemberRepository.findByProjectId(projectId)).thenReturn(Arrays.asList(member1, member2));

        // Act
        List<ProjectMemberDto> result = projectMemberService.getMembersByProject(projectId, user);

        // Assert
        assertEquals(2, result.size());
        verify(projectRepository).findById(projectId);
        verify(projectMemberRepository).findByProjectId(projectId);
    }

    @Test
    @DisplayName("Accès refusé à la liste des membres pour un non-membre du projet")
    void testGetMembersByProjectForbidden() {
        // Arrange
        Long projectId = 1L;
        User user = new User();
        user.setId(1L);

        Project project = new Project();
        project.setId(projectId);

        when(projectRepository.findById(projectId)).thenReturn(Optional.of(project));
        when(projectMemberRepository.existsByProjectIdAndUserId(projectId, user.getId())).thenReturn(false);

        // Act & Assert
        assertThrows(ResponseStatusException.class, () -> 
            projectMemberService.getMembersByProject(projectId, user));
    }

    @Test
    @DisplayName("Tentative d'accès à la liste des membres d'un projet inexistant")
    void testGetMembersByProjectNotFound() {
        // Arrange
        Long projectId = 999L;
        User user = new User();
        user.setId(1L);

        when(projectRepository.findById(projectId)).thenReturn(Optional.empty());

        // Act & Assert
        assertThrows(ResponseStatusException.class, () -> 
            projectMemberService.getMembersByProject(projectId, user));
    }*/
} 