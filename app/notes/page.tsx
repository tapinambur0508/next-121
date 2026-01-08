import { getNotes } from "@/lib/api";

import NoteList from "@/components/NoteList/NoteList";

async function Notes() {
  const data = await getNotes();

  return (
    <div>
      <h1>Notes</h1>

      <NoteList notes={data.notes} />
    </div>
  );
}

export default Notes;
