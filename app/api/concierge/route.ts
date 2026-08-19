import { NextResponse } from "next/server";
import { getConciergeResponse, getInitialConciergeResponse, type ConciergeRequest } from "@/lib/concierge";

export async function GET() {
  return NextResponse.json(getInitialConciergeResponse());
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ConciergeRequest;
    const response = await getConciergeResponse(body);
    return NextResponse.json(response);
  } catch {
    return NextResponse.json(
      { message: "Der Concierge konnte Ihre Anfrage gerade nicht verarbeiten." },
      { status: 500 },
    );
  }
}
