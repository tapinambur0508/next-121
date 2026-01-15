import axios from "axios";

import type { Note } from "@/types/note";
import type { Category } from "@/types/category";

const API = axios.create({
  baseURL: "https://next-v1-notes-api.goit.study",
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

export async function getCategories() {
  const { data } = await API.get<Category[]>("/categories");

  return data;
}
