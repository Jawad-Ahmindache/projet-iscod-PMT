export enum TaskStatus {
  TODO = 'TODO',
  IN_PROGRESS = 'IN_PROGRESS',
  COMPLETED = 'COMPLETED',
}

export enum TaskPriority {
  LOW = 'LOW',
  MEDIUM = 'MEDIUM',
  HIGH = 'HIGH',
}

export interface Task {
  id: number;
  name: string;
  description?: string;
  status: TaskStatus;
  priority: TaskPriority;
  dueDate: string;
  createdAt: string;
  updatedAt: string;
  assignedUserId?: number;
  assignedUserUsername?: string;
  projectId: number;
}

export interface CreateTaskDto {
  name: string;
  description?: string;
  dueDate: string;
  priority?: TaskPriority;
  assigneeId?: number;
}

export interface UpdateTaskDto {
  name?: string;
  description?: string;
  dueDate?: string;
  priority?: TaskPriority;
  assigneeId?: number;
}
