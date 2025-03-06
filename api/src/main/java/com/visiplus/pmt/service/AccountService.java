package com.visiplus.pmt.service;

import com.visiplus.pmt.dto.UpdateAccountDTO;
import com.visiplus.pmt.dto.UserDto;
import com.visiplus.pmt.model.User;
import com.visiplus.pmt.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class AccountService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    @Transactional
    public UserDto updateAccount(User user, UpdateAccountDTO updateAccountDTO) {
        if (!passwordEncoder.matches(updateAccountDTO.getCurrentPassword(), user.getPassword())) 
            throw new IllegalArgumentException("Le mot de passe actuel est incorrect");
        
        if (updateAccountDTO.getEmail() != null && !updateAccountDTO.getEmail().equals(user.getEmail())) {
            if (userRepository.existsByEmail(updateAccountDTO.getEmail())) 
                throw new IllegalArgumentException("Cet email est déjà utilisé");
            
            user.setEmail(updateAccountDTO.getEmail());
        }

        if (updateAccountDTO.getUsername() != null && !updateAccountDTO.getUsername().isEmpty()) {
            if (userRepository.existsByUsername(updateAccountDTO.getUsername()) && 
                !updateAccountDTO.getUsername().equals(user.getUsername())) {
                throw new IllegalArgumentException("Ce nom d'utilisateur est déjà utilisé");
            }
            user.setUsername(updateAccountDTO.getUsername());
        }

        if (updateAccountDTO.getPassword() != null && !updateAccountDTO.getPassword().isEmpty()) 
            user.setPassword(passwordEncoder.encode(updateAccountDTO.getPassword()));
        
        User updatedUser = userRepository.save(user);
        return new UserDto(updatedUser.getId(), updatedUser.getUsername(), updatedUser.getEmail());
    }
} 