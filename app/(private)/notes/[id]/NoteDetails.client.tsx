"use client";

import { useQuery } from "@tanstack/react-query";
import { useParams, useRouter } from "next/navigation";

import { getNote } from "@/lib/api";
import { useState } from "react";

function NoteDetailsClient() {
  const { id } = useParams<{ id: string }>();
  const router = useRouter();

  const { data, error, isLoading } = useQuery({
    queryKey: ["note", id],
    queryFn: () => getNote(id),
    refetchOnMount: false,
  });

  const [isEdit, setIsEdit] = useState(false);

  const handleEdit = () => {
    setIsEdit(true);
  };

  const handleBack = () => {
    // router.back();
    router.push("/notes");
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Some error...</p>;
  }

  return (
    <div>
      <button onClick={handleBack}>Back</button>
      <button onClick={handleEdit}>Edit</button>
      {isEdit ? (
        <form>
          <div>
            <input placeholder="Title" />
          </div>
          <div>
            <textarea placeholder="Content" />
          </div>
          <button>Submit</button>
        </form>
      ) : (
        <>
          <h1>{data?.title}</h1>
          <p>{data?.content}</p>
        </>
      )}
    </div>
  );
}

export default NoteDetailsClient;
