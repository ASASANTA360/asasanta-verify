import { NextResponse } from "next/server";
import { pool } from "@/lib/postgres";

export async function GET() {
  try {
    const result = await pool.query(`
      SELECT
        vh.*,
        cp.first_name,
        cp.last_name,
        cp.email
      FROM verification_history vh
      JOIN customer_profiles cp
      ON cp.id = vh.customer_id
      ORDER BY vh.created_at DESC
      LIMIT 50
    `);

    return NextResponse.json(result.rows);
  } catch (error) {
    return NextResponse.json({
      error: String(error),
    });
  }
}