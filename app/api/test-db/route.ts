import { NextResponse } from "next/server";
import { pool } from "@/lib/postgres";

export async function GET() {
  try {
    const result = await pool.query("SELECT NOW()");
    
    return NextResponse.json({
      success: true,
      time: result.rows[0],
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      error: String(error),
    });
  }
}