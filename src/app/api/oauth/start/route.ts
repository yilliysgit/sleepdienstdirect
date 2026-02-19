import { NextResponse } from "next/server";
const SCOPE = "https://www.googleapis.com/auth/business.manage";

export async function GET() {
  const p = new URLSearchParams({
    client_id: process.env.GOOGLE_CLIENT_ID!,
    redirect_uri: process.env.GOOGLE_REDIRECT_URI!,
    response_type: "code",
    access_type: "offline",
    prompt: "consent",
    scope: SCOPE,
  });
  return NextResponse.redirect("https://accounts.google.com/o/oauth2/v2/auth?" + p.toString());
}