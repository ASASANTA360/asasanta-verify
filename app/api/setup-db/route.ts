import { NextResponse } from "next/server";
import { pool } from "@/lib/postgres";

export async function GET() {
  try {
    await pool.query(`
      CREATE TABLE IF NOT EXISTS customer_profiles (
        id UUID PRIMARY KEY,
        first_name TEXT,
        last_name TEXT,
        email TEXT,
        phone TEXT,
        national_id TEXT,
        company TEXT,
        address TEXT,
        created_at TIMESTAMP DEFAULT NOW()
      );
    `);

    await pool.query(`
      CREATE TABLE IF NOT EXISTS verification_history (
        id UUID PRIMARY KEY,
        customer_id UUID REFERENCES customer_profiles(id),
        trust_score INT,
        risk_level TEXT,
        recommendation TEXT,
        findings JSONB,
        created_at TIMESTAMP DEFAULT NOW()
      );
    `);

    return NextResponse.json({
      success: true,
      message: "Aurora tables created successfully",
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      error: String(error),
    });
  }
}