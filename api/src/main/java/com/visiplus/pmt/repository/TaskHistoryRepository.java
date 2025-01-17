package com.visiplus.pmt.repository;

import com.visiplus.pmt.model.Task;
import com.visiplus.pmt.model.TaskHistory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface TaskHistoryRepository extends JpaRepository<TaskHistory, Long> {
    List<TaskHistory> findByTaskOrderByChangedAtDesc(Task task);
} 