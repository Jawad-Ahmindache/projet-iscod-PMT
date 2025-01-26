package com.visiplus.pmt.controller;

import com.visiplus.pmt.dto.TaskDto;
import com.visiplus.pmt.dto.UpdateTaskDto;
import com.visiplus.pmt.dto.TaskHistoryDto;
import com.visiplus.pmt.model.Task;
import com.visiplus.pmt.model.User;
import com.visiplus.pmt.service.TaskService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/projects/{projectId}/tasks")
@RequiredArgsConstructor
public class TaskController {

    private final TaskService taskService;

    @GetMapping
    @PreAuthorize("isAuthenticated()")
    public ResponseEntity<List<TaskDto>> getProjectTasks(
            @PathVariable Long projectId,
            @AuthenticationPrincipal User user
    ) {
        return ResponseEntity.ok(taskService.getTasksByProject(projectId, user));
    }

    @PostMapping
    @PreAuthorize("isAuthenticated()")
    public ResponseEntity<TaskDto> createTask(
            @PathVariable Long projectId,
            @RequestBody Task task,
            @AuthenticationPrincipal User user
    ) {
        return ResponseEntity.ok(taskService.createTask(projectId, task, user));
    }

    @PutMapping("/{taskId}")
    @PreAuthorize("isAuthenticated()")
    public ResponseEntity<TaskDto> updateTask(
            @PathVariable Long projectId,
            @PathVariable Long taskId,
            @RequestBody UpdateTaskDto updateTaskDto,
            @AuthenticationPrincipal User user
    ) {
        return ResponseEntity.ok(taskService.updateTask(projectId, taskId, updateTaskDto, user));
    }

    @PutMapping("/{taskId}/status")
    @PreAuthorize("isAuthenticated()")
    public ResponseEntity<TaskDto> updateTaskStatus(
            @PathVariable Long projectId,
            @PathVariable Long taskId,
            @RequestParam Task.Status status,
            @AuthenticationPrincipal User user
    ) {
        return ResponseEntity.ok(taskService.updateTaskStatus(projectId, taskId, status, user));
    }

    @PutMapping("/{taskId}/assign")
    @PreAuthorize("isAuthenticated()")
    public ResponseEntity<TaskDto> updateTaskAssignee(
            @PathVariable Long projectId,
            @PathVariable Long taskId,
            @RequestParam Long assigneeId,
            @AuthenticationPrincipal User user
    ) {
        return ResponseEntity.ok(taskService.updateTaskAssignee(projectId, taskId, assigneeId, user));
    }

    @PutMapping("/{taskId}/priority")
    @PreAuthorize("isAuthenticated()")
    public ResponseEntity<TaskDto> updateTaskPriority(
            @PathVariable Long projectId,
            @PathVariable Long taskId,
            @RequestParam Task.Priority priority,
            @AuthenticationPrincipal User user
    ) {
        return ResponseEntity.ok(taskService.updateTaskPriority(projectId, taskId, priority, user));
    }

    @GetMapping("/{taskId}")
    @PreAuthorize("isAuthenticated()")
    public ResponseEntity<TaskDto> getTask(
            @PathVariable Long projectId,
            @PathVariable Long taskId,
            @AuthenticationPrincipal User user
    ) {
        return ResponseEntity.ok(taskService.getTask(projectId, taskId, user));
    }

    @GetMapping("/{taskId}/history")
    @PreAuthorize("isAuthenticated()")
    public ResponseEntity<List<TaskHistoryDto>> getTaskHistory(
            @PathVariable Long projectId,
            @PathVariable Long taskId,
            @AuthenticationPrincipal User user
    ) {
        return ResponseEntity.ok(taskService.getTaskHistory(projectId, taskId, user));
    }
} 
