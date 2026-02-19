// app/api/oauth/callback/route.ts
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  // 1) Als Google met een fout terugkwam, laat die zien:
  const err = req.nextUrl.searchParams.get("error");
  const errDesc = req.nextUrl.searchParams.get("error_description");
  if (err) {
    return NextResponse.json({ oauth_error: err, description: errDesc }, { status: 400 });
  }

  // 2) Normale code-flow
  const code = req.nextUrl.searchParams.get("code");
  if (!code) return NextResponse.json({ error: "No code in callback URL" }, { status: 400 });

  const body = new URLSearchParams({
    code,
    client_id: process.env.GOOGLE_CLIENT_ID!,
    client_secret: process.env.GOOGLE_CLIENT_SECRET!,
    redirect_uri: process.env.GOOGLE_REDIRECT_URI!,
    grant_type: "authorization_code",
  });

  const r = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body,
  });

  const data = await r.json();
  // Laat Google's response zien (handig bij invalid_grant / redirect mismatch)
  return NextResponse.json({ status: r.status, data }, { status: r.ok ? 200 : r.status });
}
