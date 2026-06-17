"use client";

import { useState } from "react";
import { ShieldCheck, AlertTriangle, CheckCircle2 } from "lucide-react";

export default function VerifyPage() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setLoading(true);

  const response = await fetch("/api/verify", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    firstName: (e.currentTarget.elements[0] as HTMLInputElement).value,
    lastName: (e.currentTarget.elements[1] as HTMLInputElement).value,
    email: (e.currentTarget.elements[2] as HTMLInputElement).value,
    phone: (e.currentTarget.elements[3] as HTMLInputElement).value,
    nationalId: (e.currentTarget.elements[4] as HTMLInputElement).value,
    company: (e.currentTarget.elements[5] as HTMLInputElement).value,
    address: (e.currentTarget.elements[6] as HTMLTextAreaElement).value,
  }),
});

const data = await response.json();

setResult(data);
setLoading(false);
  }

  return (
    <main className="min-h-screen bg-[#050510] text-white">
      <div className="mx-auto max-w-6xl px-6 py-12">

        <div className="mb-10">
          <p className="text-purple-300 text-sm">
            CUSTOMER VERIFICATION
          </p>

          <h1 className="text-5xl font-black mt-2">
            Verify Customer Trust
          </h1>

          <p className="mt-4 text-gray-400">
            Submit customer information and generate an AI-powered trust score.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">

          <form
            onSubmit={handleSubmit}
            className="rounded-3xl border border-white/10 bg-white/[0.04] p-8"
          >
            <div className="grid gap-5">

              <input
                placeholder="First Name"
                className="rounded-xl bg-black/30 border border-white/10 p-4"
                required
              />

              <input
                placeholder="Last Name"
                className="rounded-xl bg-black/30 border border-white/10 p-4"
                required
              />

              <input
                placeholder="Email Address"
                className="rounded-xl bg-black/30 border border-white/10 p-4"
                required
              />

              <input
                placeholder="Phone Number"
                className="rounded-xl bg-black/30 border border-white/10 p-4"
                required
              />

              <input
                placeholder="National ID / BVN / NIN"
                className="rounded-xl bg-black/30 border border-white/10 p-4"
              />

              <input
                placeholder="Company"
                className="rounded-xl bg-black/30 border border-white/10 p-4"
              />

              <textarea
                placeholder="Address"
                rows={4}
                className="rounded-xl bg-black/30 border border-white/10 p-4"
              />

              <button
                type="submit"
                className="rounded-2xl bg-purple-600 py-4 font-semibold hover:bg-purple-700"
              >
                {loading ? "Analyzing..." : "Analyze Trust Score"}
              </button>
            </div>
          </form>

          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-8">

            {!result && (
              <div className="flex h-full items-center justify-center text-center text-gray-500">
                Submit customer information to generate a trust report.
              </div>
            )}

            {result && (
              <div>

                <div className="flex items-center gap-3 mb-6">
                  <ShieldCheck className="h-7 w-7 text-green-400" />
                  <h2 className="text-3xl font-bold">
                    Trust Report
                  </h2>
                </div>

                <div className="rounded-2xl bg-black/30 p-6">

                  <div className="flex items-center justify-between mb-5">
                    <span className="text-gray-400">
                      Trust Score
                    </span>

                    <span className="text-4xl font-black text-green-400">
                      {result.trustScore}/100
                    </span>
                  </div>

                  <div className="h-4 rounded-full bg-gray-800 overflow-hidden">
                    <div
                      className="h-4 bg-gradient-to-r from-green-400 to-cyan-300"
                      style={{ width: `${result.trustScore}%` }}
                    />
                  </div>

                  <div className="mt-8 grid gap-4">

                    <div className="rounded-xl bg-green-500/10 border border-green-500/20 p-4">
                      <p className="text-sm text-gray-400">
                        Risk Level
                      </p>

                      <p className="text-2xl font-bold text-green-400">
                        {result.riskLevel}
                      </p>
                    </div>

                    <div className="rounded-xl bg-purple-500/10 border border-purple-500/20 p-4">
                      <p className="text-sm text-gray-400">
                        Recommendation
                      </p>

                      <p className="text-2xl font-bold text-purple-300">
                        {result.recommendation}
                      </p>
                    </div>

                  </div>

                  <div className="mt-8">

                    <h3 className="mb-4 text-xl font-bold">
                      AI Findings
                    </h3>

                    <div className="space-y-3">
                      {result.findings.map((item: string) => (
                        <div
                          key={item}
                          className="flex items-center gap-3"
                        >
                          <CheckCircle2 className="h-5 w-5 text-green-400" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>

                  </div>

                </div>

              </div>
            )}

          </div>

        </div>

      </div>
    </main>
  );
}