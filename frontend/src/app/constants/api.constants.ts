import { environment } from '../../environments/environment';

const API_URL = environment.apiUrl;

export const AUTH_API = {
  auth: {
    login: `${API_URL}/auth/login`,
    register: `${API_URL}/auth/register`,
    me: `${API_URL}/auth/me`,
  },
  account: {
    update: `${API_URL}/account`,
    get: `${API_URL}/account`,
  },
  projects: {
    list: `${API_URL}/projects`,
    get: (id: number) => `${API_URL}/projects/${id}`,
    create: `${API_URL}/projects`,
    update: (id: number) => `${API_URL}/projects/${id}`,
    delete: (id: number) => `${API_URL}/projects/${id}`,
  },
} as const;
