import { NextResponse } from "next/server";
import { ai } from "@/lib/gemini";

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

    return NextResponse.json(JSON.parse(clean));
 } catch (error) {
  console.error("VERIFY ERROR:", error);

  return NextResponse.json(
    {
      trustScore: 55,
      riskLevel: "MEDIUM",
      recommendation: "REVIEW",
      findings: [
        "AI verification failed, fallback report generated",
        "Customer should be reviewed manually",
        "Check API key and request format",
      ],
    },
    { status: 200 }
  );
}
}