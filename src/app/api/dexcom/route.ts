import { NextRequest, NextResponse } from "next/server";

const CLIENT_ID = process.env.DEXCOM_CLIENT_ID!;
const CLIENT_SECRET = process.env.DEXCOM_CLIENT_SECRET!;
const REDIRECT_URI = process.env.DEXCOM_REDIRECT_URI!;
const BASE = "https://sandbox-api.dexcom.com";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const action = searchParams.get("action");
  const code = searchParams.get("code");
  const token = searchParams.get("token");

  // Initiate OAuth
  if (action === "auth") {
    const params = new URLSearchParams({
      client_id: CLIENT_ID,
      redirect_uri: REDIRECT_URI,
      response_type: "code",
      scope: "offline_access",
    });
    return NextResponse.redirect(`${BASE}/v2/oauth2/login?${params}`);
  }

  // Handle OAuth callback
  if (code) {
    const body = new URLSearchParams({
      client_id: CLIENT_ID,
      client_secret: CLIENT_SECRET,
      code,
      grant_type: "authorization_code",
      redirect_uri: REDIRECT_URI,
    });
    const tokenRes = await fetch(`${BASE}/v2/oauth2/token`, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body,
    });
    const data = await tokenRes.json();
    if (!data.access_token) {
      return NextResponse.json({ error: "Token exchange failed" }, { status: 400 });
    }
    return NextResponse.redirect(
      `/?dexcom_connected=1&access_token=${data.access_token}`
    );
  }

  // Fetch glucose readings
  if (action === "glucose" && token) {
    const now = new Date();
    const start = new Date(now.getTime() - 3 * 60 * 60 * 1000);
    const params = new URLSearchParams({
      startDate: start.toISOString().slice(0, 19),
      endDate: now.toISOString().slice(0, 19),
    });
    const egvRes = await fetch(`${BASE}/v3/users/self/egvs?${params}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    const egvData = await egvRes.json();
    return NextResponse.json(egvData);
  }

  return NextResponse.json({ error: "Invalid request" }, { status: 400 });
}
