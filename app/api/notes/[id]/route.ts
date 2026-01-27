import { NextResponse, NextRequest } from "next/server";

import { api } from "../../api";

import type { APIError } from "../../api";

interface NoteProps {
  params: Promise<{ id: string }>;
}

export async function GET(request: NextRequest, { params }: NoteProps) {
  try {
    const { id } = await params;
    const { data } = await api.get(`/notes/${id}`);

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      {
        error:
          (error as APIError).response?.data?.error ??
          (error as APIError).message,
      },
      {
        status: (error as APIError).status,
      },
    );
  }
}
