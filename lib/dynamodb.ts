import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient, PutCommand } from "@aws-sdk/lib-dynamodb";

const client = new DynamoDBClient({
  region: process.env.AWS_REGION!,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
  },
});

export const db = DynamoDBDocumentClient.from(client);

export async function saveTrustScore(data: {
  customerId: string;
  trustScore: number;
  riskLevel: string;
  recommendation: string;
  findings: string[];
}) {
  await db.send(
    new PutCommand({
      TableName: process.env.DYNAMODB_TRUST_TABLE!,
      Item: {
        customerId: data.customerId,
        trustScore: data.trustScore,
        riskLevel: data.riskLevel,
        recommendation: data.recommendation,
        findings: data.findings,
        updatedAt: new Date().toISOString(),
      },
    })
  );
}

export async function saveAuditLog(data: {
  customerId: string;
  action: string;
  details: string;
}) {
  await db.send(
    new PutCommand({
      TableName: process.env.DYNAMODB_AUDIT_TABLE!,
      Item: {
        eventId: crypto.randomUUID(),
        customerId: data.customerId,
        action: data.action,
        details: data.details,
        timestamp: new Date().toISOString(),
      },
    })
  );
}