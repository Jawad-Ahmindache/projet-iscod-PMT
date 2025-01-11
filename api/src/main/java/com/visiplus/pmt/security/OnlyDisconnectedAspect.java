package com.visiplus.pmt.security;

import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;
import org.springframework.web.server.ResponseStatusException;
import org.springframework.http.HttpStatus;

@Aspect
@Component
public class OnlyDisconnectedAspect {

    @Around("@within(com.visiplus.pmt.security.OnlyDisconnected) || @annotation(com.visiplus.pmt.security.OnlyDisconnected)")
    public Object checkDisconnected(ProceedingJoinPoint joinPoint) throws Throwable {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        
        if (authentication != null && authentication.isAuthenticated() && 
            !authentication.getPrincipal().equals("anonymousUser")) {
            throw new ResponseStatusException(
                HttpStatus.FORBIDDEN, 
                "Cette action ne peut être réalisé qu'en étant déconnecté"
            );
        }
        
        return joinPoint.proceed();
    }
} 