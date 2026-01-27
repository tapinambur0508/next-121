export interface User {
  id: string;
  email: string;
  userName: string;
  role: string;
  photoUrl?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface RegisterRequest {
  email: string;
  password: string;
  username: string;
}

export interface LoginRequest {
  email: string;
  password: string;
}
