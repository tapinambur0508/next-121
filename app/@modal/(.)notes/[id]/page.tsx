import Modal from "@/components/Modal/Modal";

import { getNote } from "@/lib/api";

interface NotePreviewProps {
  params: Promise<{ id: string }>;
}

async function NotePreview({ params }: NotePreviewProps) {
  const { id } = await params;
  const note = await getNote(id);

  return (
    <Modal>
      <h2>{note.title}</h2>
      <p>{note.content}</p>
    </Modal>
  );
}

export default NotePreview;
