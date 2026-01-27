import { getCategories } from "@/lib/api";

import NoteForm from "@/components/NoteForm/NoteForm";

async function CreateNote() {
  const categories = await getCategories();

  return (
    <>
      <h1>Create note</h1>

      <NoteForm categories={categories} />
    </>
  );
}

export default CreateNote;
