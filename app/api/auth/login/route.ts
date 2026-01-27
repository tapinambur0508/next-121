import { NextRequest, NextResponse } from "next/server";

import { api } from "../../api";

import type { APIError } from "../../api";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const { data } = await api.post("/auth/login", body, {
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
