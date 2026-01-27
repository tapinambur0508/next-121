export interface Note {
  id: string;
  title: string;
  content: string;
  category: string;
}

export interface CreateNotePayload {
  title: string;
  content: string;
  categoryId: string;
}
