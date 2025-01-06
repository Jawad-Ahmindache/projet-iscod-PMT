package com.visiplus.pmt.repository;

import com.visiplus.pmt.model.Test;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface TestRepository extends JpaRepository<Test, Long> {
    
    @Query("SELECT t.nom FROM Test t")
    List<String> findAllNoms();
} 