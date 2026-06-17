"use client";

import { useEffect, useMemo, useState } from "react";

interface HistoryItem {
  id: string;
  customer_id: string;
  trust_score: number;
  risk_level: string;
  recommendation: string;
  findings?: string[];
  first_name: string;
  last_name: string;
  email: string;
  created_at: string;
}

export default function HistoryPage() {
  const [records, setRecords] = useState<HistoryItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    async function loadHistory() {
      try {
        const res = await fetch("/api/history", { cache: "no-store" });
        const data = await res.json();
        setRecords(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error("History load error:", error);
      } finally {
        setLoading(false);
      }
    }

    loadHistory();
  }, []);

  const filteredRecords = useMemo(() => {
    return records.filter((item) => {
      const keyword = search.toLowerCase();

      return (
        item.first_name?.toLowerCase().includes(keyword) ||
        item.last_name?.toLowerCase().includes(keyword) ||
        item.email?.toLowerCase().includes(keyword) ||
        item.risk_level?.toLowerCase().includes(keyword) ||
        item.recommendation?.toLowerCase().includes(keyword)
      );
    });
  }, [records, search]);

  const averageScore = useMemo(() => {
    if (records.length === 0) return 0;

    const total = records.reduce(
      (sum, item) => sum + Number(item.trust_score || 0),
      0
    );

    return Math.round(total / records.length);
  }, [records]);

  const lowRisk = records.filter((item) => item.risk_level === "LOW").length;
  const mediumRisk = records.filter((item) => item.risk_level === "MEDIUM").length;
  const highRisk = records.filter((item) => item.risk_level === "HIGH").length;

  function riskBadgeClass(risk: string) {
    if (risk === "LOW") {
      return "bg-emerald-500/20 text-emerald-300 border-emerald-500/40";
    }

    if (risk === "MEDIUM") {
      return "bg-yellow-500/20 text-yellow-300 border-yellow-500/40";
    }

    return "bg-red-500/20 text-red-300 border-red-500/40";
  }

  function scoreColor(score: number) {
    if (score >= 75) return "text-emerald-300";
    if (score >= 50) return "text-yellow-300";
    return "text-red-300";
  }

  if (loading) {
    return (
      <main className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <div className="mx-auto mb-6 h-12 w-12 animate-spin rounded-full border-4 border-cyan-400 border-t-transparent" />
          <p className="text-zinc-400">Loading Aurora verification history...</p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black text-white">
      <section className="relative overflow-hidden px-6 py-10 md:px-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.18),transparent_35%),radial-gradient(circle_at_top_right,rgba(16,185,129,0.14),transparent_35%)]" />

        <div className="relative mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="mb-3 inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-200">
                AWS Aurora PostgreSQL Connected
              </p>

              <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
                Verification History
              </h1>

              <p className="mt-4 max-w-2xl text-zinc-400">
                Real-time KYC trust records saved from Gemini AI analysis into
                Aurora PostgreSQL.
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-800 bg-white/5 px-5 py-4 backdrop-blur">
              <p className="text-sm text-zinc-400">Database Status</p>
              <p className="mt-1 flex items-center gap-2 font-semibold text-emerald-300">
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                Live
              </p>
            </div>
          </div>

          <div className="mb-8 grid gap-5 md:grid-cols-4">
            <div className="rounded-3xl border border-zinc-800 bg-zinc-950/80 p-6 shadow-2xl shadow-cyan-500/5">
              <p className="text-sm text-zinc-400">Total Verifications</p>
              <p className="mt-3 text-4xl font-bold">{records.length}</p>
            </div>

            <div className="rounded-3xl border border-zinc-800 bg-zinc-950/80 p-6 shadow-2xl shadow-emerald-500/5">
              <p className="text-sm text-zinc-400">Average Trust Score</p>
              <p className={`mt-3 text-4xl font-bold ${scoreColor(averageScore)}`}>
                {averageScore}/100
              </p>
            </div>

            <div className="rounded-3xl border border-zinc-800 bg-zinc-950/80 p-6">
              <p className="text-sm text-zinc-400">Low Risk</p>
              <p className="mt-3 text-4xl font-bold text-emerald-300">
                {lowRisk}
              </p>
            </div>

            <div className="rounded-3xl border border-zinc-800 bg-zinc-950/80 p-6">
              <p className="text-sm text-zinc-400">Medium / High Risk</p>
              <p className="mt-3 text-4xl font-bold text-yellow-300">
                {mediumRisk + highRisk}
              </p>
            </div>
          </div>

          <div className="mb-8 rounded-3xl border border-zinc-800 bg-zinc-950/70 p-4 backdrop-blur">
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by name, email, risk level, or recommendation..."
              className="w-full rounded-2xl border border-zinc-800 bg-black px-5 py-4 text-white outline-none transition focus:border-cyan-400"
            />
          </div>

          {filteredRecords.length === 0 ? (
            <div className="rounded-3xl border border-zinc-800 bg-zinc-950/70 p-10 text-center">
              <h2 className="text-2xl font-bold">No records found</h2>
              <p className="mt-3 text-zinc-400">
                Run a new verification to save customer trust data into Aurora.
              </p>
            </div>
          ) : (
            <div className="grid gap-6">
              {filteredRecords.map((item) => (
                <article
                  key={item.id}
                  className="group rounded-3xl border border-zinc-800 bg-gradient-to-br from-zinc-950 via-black to-zinc-950 p-6 shadow-2xl shadow-black transition duration-300 hover:border-cyan-400/60 md:p-8"
                >
                  <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                    <div className="flex-1">
                      <div className="mb-4 flex flex-wrap items-center gap-3">
                        <span
                          className={`rounded-full border px-4 py-1 text-xs font-bold ${riskBadgeClass(
                            item.risk_level
                          )}`}
                        >
                          {item.risk_level}
                        </span>

                        <span className="rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-1 text-xs font-bold text-purple-200">
                          {item.recommendation}
                        </span>

                        <span className="rounded-full border border-zinc-700 bg-zinc-900 px-4 py-1 text-xs text-zinc-400">
                          {new Date(item.created_at).toLocaleString()}
                        </span>
                      </div>

                      <h2 className="text-2xl font-bold">
                        {item.first_name} {item.last_name}
                      </h2>

                      <p className="mt-2 text-zinc-400">{item.email}</p>

                      <p className="mt-3 text-xs text-zinc-600">
                        Customer ID: {item.customer_id}
                      </p>

                      <div className="mt-6">
                        <div className="mb-2 flex items-center justify-between">
                          <span className="text-sm text-zinc-400">
                            Trust Score
                          </span>
                          <span
                            className={`text-xl font-black ${scoreColor(
                              item.trust_score
                            )}`}
                          >
                            {item.trust_score}/100
                          </span>
                        </div>

                        <div className="h-3 w-full overflow-hidden rounded-full bg-zinc-800">
                          <div
                            className="h-full rounded-full bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400"
                            style={{ width: `${item.trust_score}%` }}
                          />
                        </div>
                      </div>

                      {item.findings && item.findings.length > 0 && (
                        <details className="mt-6 rounded-2xl border border-zinc-800 bg-black/50 p-5">
                          <summary className="cursor-pointer font-semibold text-cyan-200">
                            View AI Findings
                          </summary>

                          <ul className="mt-4 space-y-3 text-zinc-300">
                            {item.findings.map((finding, index) => (
                              <li key={index} className="flex gap-3">
                                <span className="mt-1 h-2 w-2 rounded-full bg-emerald-400" />
                                <span>{finding}</span>
                              </li>
                            ))}
                          </ul>
                        </details>
                      )}
                    </div>

                    <div className="min-w-[180px] rounded-3xl border border-zinc-800 bg-white/5 p-6 text-center">
                      <p className="text-sm text-zinc-400">AI Decision</p>
                      <p className="mt-3 text-2xl font-black text-white">
                        {item.recommendation}
                      </p>

                      <div className="mt-6 rounded-2xl bg-black p-4">
                        <p className={`text-5xl font-black ${scoreColor(item.trust_score)}`}>
                          {item.trust_score}
                        </p>
                        <p className="text-sm text-zinc-500">out of 100</p>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}