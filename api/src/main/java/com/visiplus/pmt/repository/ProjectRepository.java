package com.visiplus.pmt.repository;

import com.visiplus.pmt.model.Project;
import com.visiplus.pmt.model.User;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ProjectRepository extends JpaRepository<Project, Long> {
    
    Page<Project> findByMembers_User(User user, Pageable pageable);
    
    Optional<Project> findByIdAndMembers_User(Long id, User user);
    
    boolean existsByIdAndMembers_User(Long id, User user);
} 