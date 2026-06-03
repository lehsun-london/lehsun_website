import { NextResponse } from "next/server";

const WHATSAPP_GROUP_URL = "https://chat.whatsapp.com/LwTQNtkxb0oBD8Cj5uJ97T";

export function GET() {
  const response = NextResponse.redirect(WHATSAPP_GROUP_URL, 308);

  response.headers.set("X-Robots-Tag", "noindex, nofollow");

  return response;
}
