import { NextRequest, NextResponse } from "next/server";

// next js GET request
export async function GET() {
  return NextResponse.json(
    {
      message: "",
    },
    { status: 200 }
  );
}
