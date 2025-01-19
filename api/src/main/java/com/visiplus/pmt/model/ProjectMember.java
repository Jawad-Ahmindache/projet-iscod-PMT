package com.visiplus.pmt.model;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Entity
@Table(name = "project_members", 
       uniqueConstraints = @UniqueConstraint(columnNames = {"project_id", "user_id"}))
@Data
@NoArgsConstructor
public class ProjectMember {
    public enum Role {
        ADMIN(0),    // Peut tout faire dans le projet
        MEMBER(1),   // Peut créer et modifier des tâches
        OBSERVER(2); // Peut uniquement voir les tâches

        private final int value;

        Role(int value) {
            this.value = value;
        }

        public int getValue() {
            return value;
        }
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "project_id", nullable = false)
    private Project project;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    @Enumerated(EnumType.ORDINAL)
    @Column(nullable = false)
    private Role role;

    @Column(name = "joined_at", nullable = false)
    private LocalDateTime joinedAt;

    @PrePersist
    protected void onCreate() {
        joinedAt = LocalDateTime.now();
    }
} 