export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

import { NextResponse } from 'next/server';
import { OAuth2Client } from 'google-auth-library';

const SCOPE = 'https://www.googleapis.com/auth/business.manage';

export async function GET() {
  try {
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

    // Haal account op
    const accountsRes = await fetch(
      'https://mybusinessaccountmanagement.googleapis.com/v1/accounts?alt=json',
      {
        headers: { 
          Authorization: `Bearer ${credentials.access_token}`, 
          Accept: 'application/json' 
        },
      }
    );
    const accountsData = await accountsRes.json();
    const accountName = accountsData.accounts?.[0]?.name;
    
    if (!accountName) {
      return NextResponse.json({ error: 'Geen account gevonden' }, { status: 404 });
    }

    // Haal locaties op MET readMask
    const readMask = 'name,title,storefrontAddress,phoneNumbers,websiteUri';
    const r = await fetch(
      `https://mybusinessbusinessinformation.googleapis.com/v1/${accountName}/locations?readMask=${readMask}&alt=json`,
      {
        headers: { 
          Authorization: `Bearer ${credentials.access_token}`, 
          Accept: 'application/json' 
        },
      }
    );

    const ct = r.headers.get('content-type') || '';
    const text = await r.text();
    const data = ct.includes('application/json') 
      ? JSON.parse(text) 
      : { rawTextSnippet: text.slice(0, 600) };

    return NextResponse.json({ status: r.status, data }, { status: r.status });
  } catch (e: any) {
    return NextResponse.json({ error: e?.message ?? 'Unknown error' }, { status: 500 });
  }
}