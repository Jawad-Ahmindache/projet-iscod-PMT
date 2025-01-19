package com.visiplus.pmt.service;

import com.visiplus.pmt.dto.AuthResponse;
import com.visiplus.pmt.dto.LoginRequest;
import com.visiplus.pmt.dto.RegisterRequest;
import com.visiplus.pmt.dto.UserDto;
import com.visiplus.pmt.model.User;
import com.visiplus.pmt.repository.UserRepository;
import com.visiplus.pmt.security.JwtService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class AuthService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;

    public AuthResponse login(LoginRequest request) {
       

        try {
            var user = userRepository.findByEmail(request.getEmail())
            .orElseThrow(() -> new BadCredentialsException("Identifiants invalides"));
            authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                    request.getEmail(),
                    request.getPassword()
                )
            );
            var jwt = jwtService.generateToken(user);
            return new AuthResponse(jwt, new UserDto(user.getId(), user.getUsername(), user.getEmail()));
        } catch (Exception e) {
            throw new IllegalArgumentException("Identifiants invalides");
        }
    }

    @Transactional
    public AuthResponse register(RegisterRequest request) {
        if (userRepository.existsByEmail(request.getEmail())) {
            throw new IllegalArgumentException("Cet email est déjà utilisé");
        }

        var user = new User();
        user.setUsername(request.getUsername());
        user.setEmail(request.getEmail());
        user.setPassword(passwordEncoder.encode(request.getPassword()));

        userRepository.save(user);
        var jwt = jwtService.generateToken(user);
        
        return new AuthResponse(jwt, new UserDto(user.getId(), user.getUsername(), user.getEmail()));
    }
} 