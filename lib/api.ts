import axios from "axios";

import type { User, RegisterRequest, LoginRequest } from "@/types/auth";
import type { Note, CreateNotePayload } from "@/types/note";
import type { Category } from "@/types/category";

const API = axios.create({
  baseURL: "http://localhost:3000/api",
});

export async function getNotes(categoryId?: string) {
  const { data } = await API.get<{ notes: Note[]; total: number }>("/notes", {
    params: {
      categoryId,
    },
  });

  return data;
}

export async function getNote(id: Note["id"]) {
  const { data } = await API.get<Note>(`/notes/${id}`);

  return data;
}

export async function createNote(payload: CreateNotePayload) {
  const { data } = await API.post<Note>("/notes", payload, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  return data;
}

export async function getCategories() {
  const { data } = await API.get<Category[]>("/categories");

  return data;
}

export async function register(payload: RegisterRequest) {
  const { data } = await API.post<User>("/auth/register", payload, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  return data;
}

export async function login(payload: LoginRequest) {
  const { data } = await API.post<User>("/auth/login", payload, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  return data;
}
