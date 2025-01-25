export enum TaskStatus {
  TODO = 'TODO',
  IN_PROGRESS = 'IN_PROGRESS',
  COMPLETED = 'COMPLETED',
}

export interface Task {
  id: number;
  name: string;
  description?: string;
  status: TaskStatus;
  priority: number;
  dueDate: string;
  createdAt: string;
  updatedAt: string;
  assigneeId?: number;
  assigneeUsername?: string;
  projectId: number;
}

export interface CreateTaskDto {
  name: string;
  description?: string;
  dueDate: string;
  priority?: number;
  assigneeId?: number;
}

export interface UpdateTaskDto {
  name?: string;
  description?: string;
  dueDate?: string;
  priority?: number;
  assigneeId?: number;
}
