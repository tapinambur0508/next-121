import { getNotes } from "@/lib/api";
import NoteList from "@/components/NoteList/NoteList";

interface NotesByCategoryProps {
  params: Promise<{ slug: string[] }>;
}

async function NotesByCategory({ params }: NotesByCategoryProps) {
  const { slug } = await params;
  const category = slug[0] === "all" ? undefined : slug[0];
  const data = await getNotes(category);

  if (data.notes.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500 text-lg mb-4">No notes found</p>
      </div>
    );
  }

  return <NoteList notes={data.notes} />;
}

export default NotesByCategory;
