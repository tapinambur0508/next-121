import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { parse } from "cookie";

import { api } from "../../api";

import type { APIError } from "../../api";

export async function POST() {
  const cookieStore = await cookies();

  await api.post("/auth/logout", {
    headers: {
      Cookie: cookieStore.toString(),
    },
  });

  cookieStore.delete("accessToken");
  cookieStore.delete("refreshToken");

  return NextResponse.json({ message: "Logged out successfully" });
}
