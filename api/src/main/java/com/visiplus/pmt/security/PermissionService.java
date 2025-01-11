package com.visiplus.pmt.security;

import org.springframework.stereotype.Service;
import java.util.Set;

@Service
public class PermissionService {
    
    public static final String ROLE_ADMIN = "ADMIN";
    public static final String ROLE_MEMBER = "MEMBER";
    public static final String ROLE_OBSERVER = "OBSERVER";

    public boolean canManageMembers(Set<String> userRoles) {
        return userRoles.contains(ROLE_ADMIN);
    }

    public boolean canManageTasks(Set<String> userRoles) {
        return userRoles.contains(ROLE_ADMIN) || userRoles.contains(ROLE_MEMBER);
    }

    public boolean canViewTasks(Set<String> userRoles) {
        return userRoles.contains(ROLE_ADMIN) || userRoles.contains(ROLE_MEMBER) || userRoles.contains(ROLE_OBSERVER);
    }

    public boolean canAssignTasks(Set<String> userRoles) {
        return userRoles.contains(ROLE_ADMIN) || userRoles.contains(ROLE_MEMBER);
    }

    public boolean canUpdateTask(Set<String> userRoles) {
        return userRoles.contains(ROLE_ADMIN) || userRoles.contains(ROLE_MEMBER);
    }
} 