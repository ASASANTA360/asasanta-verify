import { NextResponse } from "next/server";
import { ai } from "@/lib/gemini";
import { pool } from "@/lib/postgres";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const prompt = `
You are an expert KYC and fraud detection analyst.

Analyze this customer information:
${JSON.stringify(body, null, 2)}

Return only valid JSON in this format:
{
  "trustScore": 0,
  "riskLevel": "LOW",
  "recommendation": "APPROVE",
  "findings": ["finding one", "finding two", "finding three"]
}
`;

    const result = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
    });

    const text = result.text || "{}";
    const clean = text.replace(/```json|```/g, "").trim();
    const parsed = JSON.parse(clean);

    const customerId = crypto.randomUUID();
    const historyId = crypto.randomUUID();

    await pool.query(
      `
      INSERT INTO customer_profiles (
        id,
        first_name,
        last_name,
        email,
        phone,
        national_id,
        company,
        address
      )
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
      `,
      [
        customerId,
        body.firstName || "",
        body.lastName || "",
        body.email || "",
        body.phone || "",
        body.nationalId || "",
        body.company || "",
        body.address || "",
      ]
    );

    await pool.query(
      `
      INSERT INTO verification_history (
        id,
        customer_id,
        trust_score,
        risk_level,
        recommendation,
        findings
      )
      VALUES ($1, $2, $3, $4, $5, $6)
      `,
      [
        historyId,
        customerId,
        parsed.trustScore,
        parsed.riskLevel,
        parsed.recommendation,
        JSON.stringify(parsed.findings || []),
      ]
    );

    return NextResponse.json({
      success: true,
      customerId,
      historyId,
      ...parsed,
    });
  } catch (error) {
    console.error("VERIFY ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        trustScore: 55,
        riskLevel: "MEDIUM",
        recommendation: "REVIEW",
        findings: [
          "AI verification failed, fallback report generated",
          "Customer should be reviewed manually",
          "Check API key, Aurora connection, and request format",
        ],
        error: String(error),
      },
      { status: 200 }
    );
  }
}