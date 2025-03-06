export enum ProjectMemberRole {
  ADMIN = 0,
  MEMBER = 1,
  OBSERVER = 2,
}

export interface ProjectMember {
  id: number;
  userId: number;
  username: string;
  email: string;
  role: ProjectMemberRole;
  joinedAt: string;
}
