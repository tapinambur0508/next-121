import Link from "next/link";

import { getCategories } from "@/lib/api";

async function NotesSidebar() {
  const categories = await getCategories();

  return (
    <ul>
      <li>
        <Link href="/notes/actions/create">Create note</Link>
      </li>
      <li>
        <Link href="/notes/filter/all">All Notes</Link>
      </li>
      {categories.map((category) => (
        <li key={category.id}>
          <Link href={`/notes/filter/${category.id}`}>{category.name}</Link>
        </li>
      ))}
    </ul>
  );
}

export default NotesSidebar;
