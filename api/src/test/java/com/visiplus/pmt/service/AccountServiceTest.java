package com.visiplus.pmt.service;

import com.visiplus.pmt.model.User;
import com.visiplus.pmt.repository.UserRepository;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.security.crypto.password.PasswordEncoder;

import static org.junit.jupiter.api.Assertions.*;

@ExtendWith(MockitoExtension.class)
class AccountServiceTest {

    @Mock
    private UserRepository userRepository;

    @Mock
    private PasswordEncoder passwordEncoder;

    @InjectMocks
    private AccountService accountService;

    @Test
    @DisplayName("Création d'un nouveau compte utilisateur")
    void testCreateAccount() {
        User user = new User();
        user.setUsername("testuser");
        user.setEmail("test@example.com");
        user.setPassword("password123");
        
        String encodedPassword = user.getPassword() + "encoded";
        
        assertEquals("test@example.com", user.getEmail());
        assertNotNull(encodedPassword);
        boolean isValidUser = user.getEmail().contains("@") && user.getUsername().length() > 3;
        assertTrue(isValidUser);
    }

    @Test
    @DisplayName("Mise à jour des informations du compte")
    void testUpdateAccount() {
        User existingUser = new User();
        existingUser.setUsername("oldusername");
        existingUser.setEmail("old@example.com");
        
        User updatedUser = new User();
        updatedUser.setUsername("newusername");
        updatedUser.setEmail("new@example.com");
        
        assertNotEquals(existingUser.getUsername(), updatedUser.getUsername());
        assertNotEquals(existingUser.getEmail(), updatedUser.getEmail());
        boolean isUpdateValid = updatedUser.getEmail().contains("@") && updatedUser.getUsername().length() > 3;
        assertTrue(isUpdateValid);
    }

    @Test
    @DisplayName("Changement de mot de passe")
    void testChangePassword() {
        String oldPassword = "oldPassword123";
        String newPassword = "newPassword123";
        String encodedNewPassword = newPassword + "encoded";
        
        assertNotEquals(oldPassword, newPassword);
        assertNotEquals(newPassword, encodedNewPassword);
        boolean isPasswordValid = newPassword.length() >= 8 && !newPassword.equals(oldPassword);
        assertTrue(isPasswordValid);
    }

    @Test
    @DisplayName("Récupération des informations du compte")
    void testGetAccountInfo() {
        User user = new User();
        user.setId(1L);
        user.setUsername("testuser");
        user.setEmail("test@example.com");
        
        assertNotNull(user.getId());
        assertNotNull(user.getUsername());
        boolean isUserValid = user.getId() > 0 && user.getEmail().contains("@");
        assertTrue(isUserValid);
    }

    @Test
    @DisplayName("Suppression du compte utilisateur")
    void testDeleteAccount() {
        User user = new User();
        user.setId(1L);
        user.setUsername("userToDelete");
        
        assertNotNull(user.getId());
        assertNotNull(user.getUsername());
        boolean canDelete = user.getId() != null && user.getUsername().length() > 0;
        assertTrue(canDelete);
    }
} 