// src/app/api/gbp/accounts/route.ts
export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

import { NextResponse } from "next/server";
import { OAuth2Client } from "google-auth-library";

export async function GET() {
  try {
    const oauth2 = new OAuth2Client({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      redirectUri: process.env.GOOGLE_REDIRECT_URI,
    });

    oauth2.setCredentials({
      refresh_token: process.env.GOOGLE_REFRESH_TOKEN,
      scope: "https://www.googleapis.com/auth/business.manage",
    });

    const { credentials } = await oauth2.refreshAccessToken();
    const r = await fetch("https://mybusinessaccountmanagement.googleapis.com/v1/accounts", {
      headers: { Authorization: `Bearer ${credentials.access_token}` },
    });

    return NextResponse.json(await r.json(), { status: r.status });
  } catch (e: any) {
    return NextResponse.json({ error: e?.message ?? "Unknown error" }, { status: 500 });
  }
}
