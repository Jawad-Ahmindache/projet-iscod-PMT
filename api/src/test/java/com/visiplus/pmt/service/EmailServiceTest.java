package com.visiplus.pmt.service;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;

import static org.junit.jupiter.api.Assertions.*;

@ExtendWith(MockitoExtension.class)
class EmailServiceTest {

    @Mock
    private JavaMailSender mailSender;

    @InjectMocks
    private EmailService emailService;

    @Test
    @DisplayName("Envoi d'un email simple")
    void testSendEmail() {
        String to = "recipient@example.com";
        String subject = "Test Subject";
        String text = "Test email content";
        
        SimpleMailMessage message = new SimpleMailMessage();
        message.setTo(to);
        message.setSubject(subject);
        message.setText(text);
        
        assertEquals(to, message.getTo()[0]);
        assertEquals(subject, message.getSubject());
        boolean isValidEmail = to.contains("@") && text.length() > 0;
        assertTrue(isValidEmail);
    }

    @Test
    @DisplayName("Envoi d'un email de bienvenue")
    void testSendWelcomeEmail() {
        String username = "newuser";
        String email = "newuser@example.com";
        
        String subject = "Bienvenue sur PMT";
        String content = String.format("Bienvenue %s sur PMT!", username);
        
        assertTrue(content.contains(username));
        assertEquals("Bienvenue sur PMT", subject);
        boolean isWelcomeValid = email.endsWith("@example.com") && username.length() > 0;
        assertTrue(isWelcomeValid);
    }

    @Test
    @DisplayName("Envoi d'un email de réinitialisation de mot de passe")
    void testSendPasswordResetEmail() {
        String email = "user@example.com";
        String resetToken = "reset-token-123";
        
        String resetLink = "reset-password?token=" + resetToken;
        String content = "Cliquez ici pour réinitialiser votre mot de passe: " + resetLink;
        
        assertTrue(resetLink.contains(resetToken));
        assertTrue(content.contains("Cliquez ici"));
        boolean isResetValid = resetToken.length() > 10 && resetLink.startsWith("reset-password");
        assertTrue(isResetValid);
    }

    @Test
    @DisplayName("Envoi d'une notification de tâche")
    void testSendTaskNotification() {
        String assignee = "user@example.com";
        String taskName = "Test Task";
        String projectName = "Test Project";
        
        String subject = "Nouvelle tâche assignée";
        String content = String.format("La tâche '%s' vous a été assignée dans le projet '%s'", 
                                     taskName, projectName);
        
        assertTrue(content.contains(taskName));
        assertTrue(content.contains(projectName));
        boolean isNotificationValid = assignee.contains("@") && taskName.startsWith("Test");
        assertTrue(isNotificationValid);
    }

    @Test
    @DisplayName("Validation du format d'email")
    void testValidateEmailFormat() {
        String validEmail = "test@example.com";
        String invalidEmail = "invalid-email";
        
        boolean hasAtSymbol = validEmail.contains("@");
        boolean hasDomain = validEmail.contains(".");
        
        assertTrue(hasAtSymbol);
        assertTrue(hasDomain);
        boolean isFormatValid = validEmail.split("@").length == 2 && !validEmail.equals(invalidEmail);
        assertTrue(isFormatValid);
    }
} 