package com.visiplus.pmt.dto;

import com.visiplus.pmt.model.Task;
import lombok.Data;

import java.time.LocalDate;

@Data
public class UpdateTaskDto {
    private String name;
    private String description;
    private Task.Priority priority;
    private LocalDate dueDate;
    private Task.Status status;
} 