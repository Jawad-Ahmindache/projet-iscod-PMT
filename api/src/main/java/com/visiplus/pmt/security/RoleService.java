package com.visiplus.pmt.security;

import com.visiplus.pmt.exception.PermissionDeniedException;
import com.visiplus.pmt.model.ProjectMember;
import com.visiplus.pmt.model.ProjectMember.Role;
import org.springframework.stereotype.Service;

@Service
public class RoleService {

    /**
     * Vérifie si un membre du projet a l'un des rôles spécifiés
     * @param projectMember Le membre du projet à vérifier
     * @param allowedRoles Les rôles autorisés
     * @throws PermissionDeniedException si l'utilisateur n'a pas les permissions nécessaires
     */
    public void hasRole(ProjectMember projectMember, Role[] allowedRoles) {
        if (projectMember == null) 
            throw new PermissionDeniedException("Vous n'êtes pas membre de ce projet");
        
        // Les administrateurs ont toujours toutes les permissions
        if (projectMember.getRole() == Role.ADMIN) 
            return;

        for (Role role : allowedRoles) {
            if (projectMember.getRole() == role) 
                return;
        }

        throw new PermissionDeniedException("Vous n'avez pas les permissions nécessaires pour effectuer cette action");
    }
} 