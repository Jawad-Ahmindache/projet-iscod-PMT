package com.visiplus.pmt.repository;

import com.visiplus.pmt.model.Project;
import com.visiplus.pmt.model.ProjectMember;
import com.visiplus.pmt.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface ProjectMemberRepository extends JpaRepository<ProjectMember, Long> {
    List<ProjectMember> findByProjectId(Long projectId);
    boolean existsByProjectIdAndUserId(Long projectId, Long userId);
    Optional<ProjectMember> findByProjectAndUser(Project project, User user);
} 