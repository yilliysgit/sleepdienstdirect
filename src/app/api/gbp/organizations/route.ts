export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

import { NextResponse } from 'next/server';
import { OAuth2Client } from 'google-auth-library';

const SCOPE = 'https://www.googleapis.com/auth/business.manage';

export async function GET() {
  try {
    // 1) Access token
    const oauth2 = new OAuth2Client({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      redirectUri: process.env.GOOGLE_REDIRECT_URI,
    });
    oauth2.setCredentials({
      refresh_token: process.env.GOOGLE_REFRESH_TOKEN,
      scope: SCOPE,
    });
    const { credentials } = await oauth2.refreshAccessToken();
    const token = credentials.access_token;
    if (!token) {
      return NextResponse.json({ error: 'Geen access token (check env vars/refresh token)' }, { status: 500 });
    }

    // 2) Forceer JSON met alt=json en Accept header
    const url = 'https://mybusinessaccountmanagement.googleapis.com/v1/organizations?alt=json';
    const r = await fetch(url, {
      headers: { Authorization: `Bearer ${token}`, Accept: 'application/json' },
    });

    const contentType = r.headers.get('content-type') || '';
    const text = await r.text();

    if (contentType.includes('application/json')) {
      // echte JSON
      try {
        const data = JSON.parse(text);
        return NextResponse.json({ status: r.status, data }, { status: r.status });
      } catch {
        // zeldzaam, maar vang het af
      }
    }

    // Google stuurde HTML of iets anders terug → toon debug info
    return NextResponse.json(
      {
        status: r.status,
        contentType,
        rawTextSnippet: text.slice(0, 600), // eerste stuk voor diagnose
      },
      { status: r.status }
    );
  } catch (e: any) {
    return NextResponse.json({ error: e?.message ?? 'Unknown error' }, { status: 500 });
  }
}
