import { NextRequest, NextResponse } from "next/server";
import { getCombos } from "@/lib/api";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get("category") || undefined;
  const search = searchParams.get("q") || undefined;

  try {
    const combos = await getCombos({ category, search });
    return NextResponse.json({
      success: true,
      count: combos.length,
      data: combos,
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: "Failed to fetch combo products",
        error: String(error),
      },
      { status: 500 }
    );
  }
}
