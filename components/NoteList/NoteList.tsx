import Link from "next/link";

import type { Note } from "@/types/note";

interface NoteListProps {
  notes: Note[];
}

function NoteList({ notes }: NoteListProps) {
  return (
    <ul>
      {notes.map((note) => (
        <li key={note.id}>
          <Link href={`/notes/${note.id}`}>{note.title}</Link>
        </li>
      ))}
    </ul>
  );
}

export default NoteList;
