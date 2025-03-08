package com.visiplus.pmt.controller;

import com.visiplus.pmt.utils.DataSeeder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/dataseed")
public class DataSeedController {

    private final DataSeeder dataSeeder;

    @Autowired
    public DataSeedController(DataSeeder dataSeeder) {
        this.dataSeeder = dataSeeder;
    }

    @GetMapping
    public ResponseEntity<String> executeDataSeed() {
        return dataSeeder.seedData();
    }
} 