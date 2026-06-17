"use client";

import { useEffect, useMemo, useState } from "react";

interface RecordItem {
  trust_score: number;
  risk_level: string;
}

export default function AnalyticsPage() {
  const [records, setRecords] = useState<RecordItem[]>([]);
  const [loading, setLoading] = useState(true);

 useEffect(() => {
  async function loadData() {
    try {
      const res = await fetch("/api/history");
      const data = await res.json();

      if (Array.isArray(data)) {
        setRecords(data);
      } else {
        console.error("Invalid API response:", data);
        setRecords([]);
      }
    } catch (err) {
      console.error(err);
      setRecords([]);
    } finally {
      setLoading(false);
    }
  }

  loadData();
}, []);
 const safeRecords = Array.isArray(records) ? records : [];
  const stats = useMemo(() => {
    const total = safeRecords.length;

    const avg =
  total > 0
    ? Math.round(
        safeRecords.reduce(
          (sum, r) => sum + Number(r.trust_score || 0),
          0
        ) / total
      )
    : 0;

const low = safeRecords.filter(
  (r) => r.risk_level === "LOW"
).length;

const medium = safeRecords.filter(
  (r) => r.risk_level === "MEDIUM"
).length;

const high = safeRecords.filter(
  (r) => r.risk_level === "HIGH"
).length;

    return {
      total,
      avg,
      low,
      medium,
      high,
    };
  }, [records]);

  if (loading) {
    return (
      <main className="min-h-screen bg-black text-white flex items-center justify-center">
        Loading Analytics...
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black text-white p-8">
      <div className="max-w-7xl mx-auto">

        <h1 className="text-5xl font-bold mb-2">
          Trust Analytics
        </h1>

        <p className="text-zinc-400 mb-10">
          Real-time Aurora PostgreSQL insights
        </p>

        <div className="grid md:grid-cols-4 gap-6 mb-10">

          <div className="bg-zinc-900 rounded-3xl border border-zinc-800 p-6">
            <p className="text-zinc-400">
              Total Verifications
            </p>

            <h2 className="text-5xl font-bold mt-3">
              {stats.total}
            </h2>
          </div>

          <div className="bg-zinc-900 rounded-3xl border border-zinc-800 p-6">
            <p className="text-zinc-400">
              Avg Trust Score
            </p>

            <h2 className="text-5xl font-bold text-green-400 mt-3">
              {stats.avg}
            </h2>
          </div>

          <div className="bg-zinc-900 rounded-3xl border border-zinc-800 p-6">
            <p className="text-zinc-400">
              Low Risk
            </p>

            <h2 className="text-5xl font-bold text-cyan-400 mt-3">
              {stats.low}
            </h2>
          </div>

          <div className="bg-zinc-900 rounded-3xl border border-zinc-800 p-6">
            <p className="text-zinc-400">
              High Risk
            </p>

            <h2 className="text-5xl font-bold text-red-400 mt-3">
              {stats.high}
            </h2>
          </div>

        </div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">

          <h2 className="text-2xl font-bold mb-6">
            Risk Distribution
          </h2>

          <div className="space-y-6">

            <div>
              <div className="flex justify-between mb-2">
                <span>LOW</span>
                <span>{stats.low}</span>
              </div>

              <div className="h-4 bg-zinc-800 rounded-full">
                <div
                  className="h-4 bg-green-500 rounded-full"
                  style={{
                    width: `${
                      stats.total
                        ? (stats.low / stats.total) * 100
                        : 0
                    }%`,
                  }}
                />
              </div>
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <span>MEDIUM</span>
                <span>{stats.medium}</span>
              </div>

              <div className="h-4 bg-zinc-800 rounded-full">
                <div
                  className="h-4 bg-yellow-500 rounded-full"
                  style={{
                    width: `${
                      stats.total
                        ? (stats.medium / stats.total) * 100
                        : 0
                    }%`,
                  }}
                />
              </div>
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <span>HIGH</span>
                <span>{stats.high}</span>
              </div>

              <div className="h-4 bg-zinc-800 rounded-full">
                <div
                  className="h-4 bg-red-500 rounded-full"
                  style={{
                    width: `${
                      stats.total
                        ? (stats.high / stats.total) * 100
                        : 0
                    }%`,
                  }}
                />
              </div>
            </div>

          </div>

        </div>
      </div>
    </main>
  );
}