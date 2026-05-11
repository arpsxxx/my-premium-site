import { cookies } from "next/headers";
import { getAuth } from "firebase-admin/auth";
import { adminApp } from "@/lib/firebase-admin";

export async function POST(request: Request) {
  const { idToken } = await request.json();

  const expiresIn = 60 * 60 * 24 * 5 * 1000;

  const sessionCookie = await getAuth(adminApp).createSessionCookie(idToken, {
    expiresIn,
  });

  const cookieStore = await cookies();

  cookieStore.set("session", sessionCookie, {
    maxAge: expiresIn / 1000,
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    path: "/",
  });

  return Response.json({ success: true });
}

export async function DELETE() {
  const cookieStore = await cookies();

  cookieStore.delete("session");

  return Response.json({ success: true });
}