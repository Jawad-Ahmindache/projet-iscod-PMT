export interface Project {
  id: number;
  name: string;
  description?: string;
  startDate?: string;
  createdAt?: string;
  updatedAt?: string;
  members: any[];
}
