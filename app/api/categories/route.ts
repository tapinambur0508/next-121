import { NextResponse } from "next/server";

import { api } from "../api";

import type { APIError } from "../api";

// Handle GET /categories request
export async function GET() {
  try {
    const { data } = await api.get("/categories");

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
