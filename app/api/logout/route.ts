import { NextResponse } from "next/server";

export async function POST() {
  const response = NextResponse.json({ message: "Logout bem-sucedido" });

  response.cookies.set('auth-token', '', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    maxAge: 0,
    path: '/',
  });

  return response;
}
