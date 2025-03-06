package com.visiplus.pmt.dto;

import com.visiplus.pmt.model.TaskHistory;
import lombok.Data;

import java.time.LocalDateTime;

@Data
public class TaskHistoryDto {
    private Long id;
    private String changeDescription;
    private LocalDateTime changedAt;
    private String changedByUsername;

    public static TaskHistoryDto fromEntity(TaskHistory history) {
        TaskHistoryDto dto = new TaskHistoryDto();
        dto.setId(history.getId());
        dto.setChangeDescription(history.getChangeDescription());
        dto.setChangedAt(history.getChangedAt());
        dto.setChangedByUsername(history.getChangedBy().getUsername());
        return dto;
    }
} 