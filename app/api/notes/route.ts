import { NextRequest, NextResponse } from "next/server";

import { api } from "../api";

import type { APIError } from "../api";

// Handle GET /notes request
export async function GET(request: NextRequest) {
  try {
    const categoryId = request.nextUrl.searchParams.get("categoryId");

    const { data } = await api.get("/notes", {
      params: {
        categoryId,
      },
    });

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

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const { data } = await api.post("/notes", body, {
      headers: {
        "Content-Type": "application/json",
      },
    });

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
