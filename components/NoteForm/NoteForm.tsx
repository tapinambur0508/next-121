"use client";

import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";

import { createNote } from "@/lib/api";
import { useNoteDraftStore } from "@/stores/noteStore";

import type { Category } from "@/types/category";

interface NoteFormProps {
  categories: Category[];
}

function NoteForm({ categories }: NoteFormProps) {
  const router = useRouter();

  const draft = useNoteDraftStore((state) => state.draft);
  const setDraft = useNoteDraftStore((state) => state.setDraft);
  const clearDraft = useNoteDraftStore((state) => state.clearDraft);

  const { mutate, isPending } = useMutation({
    mutationFn: createNote,
    onSuccess: () => {
      clearDraft();
      router.push("/notes/filter/all");
    },
  });

  const handleChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setDraft({ ...draft, [event.target.name]: event.target.value });
  };

  const handleCancel = () => {
    router.push("/notes/filter/all");
  };

  const handleSubmit = (formData: FormData) => {
    const title = formData.get("title") as string;
    const content = formData.get("content") as string;
    const categoryId = formData.get("categoryId") as string;
    mutate({ title, content, categoryId });
  };

  console.log(draft.categoryId);

  return (
    <form action={handleSubmit} className="space-y-6">
      <div>
        <label
          htmlFor="title"
          className="block text-sm font-semibold text-gray-700 mb-2"
        >
          Title
        </label>
        <input
          type="text"
          name="title"
          id="title"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
          placeholder="Enter note title"
          defaultValue={draft.title}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label
          htmlFor="content"
          className="block text-sm font-semibold text-gray-700 mb-2"
        >
          Content
        </label>
        <textarea
          name="content"
          id="content"
          rows={8}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all resize-none"
          placeholder="Write your note content here..."
          defaultValue={draft.content}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label
          htmlFor="category"
          className="block text-sm font-semibold text-gray-700 mb-2"
        >
          Category
        </label>
        <select
          name="categoryId"
          id="category"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all bg-white"
          defaultValue={draft.categoryId}
          onChange={handleChange}
          required
        >
          <option value="" disabled>
            Select a category
          </option>
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
      </div>

      <div className="flex gap-3 pt-4">
        <button
          type="submit"
          disabled={isPending}
          className="flex-1 px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-lg shadow-md hover:shadow-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-200"
        >
          Submit
        </button>
        <button
          type="button"
          onClick={handleCancel}
          className="flex-1 px-6 py-3 bg-gray-100 text-gray-700 font-semibold rounded-lg hover:bg-gray-200 transition-colors duration-200"
        >
          Cancel
        </button>
      </div>
    </form>
  );
}

export default NoteForm;
