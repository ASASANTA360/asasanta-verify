"use client";

import {
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const verificationData = [
  { month: "Jan", total: 120 },
  { month: "Feb", total: 180 },
  { month: "Mar", total: 260 },
  { month: "Apr", total: 340 },
  { month: "May", total: 520 },
  { month: "Jun", total: 700 },
];

const riskData = [
  { name: "Low Risk", value: 72 },
  { name: "Medium Risk", value: 20 },
  { name: "High Risk", value: 8 },
];

const COLORS = ["#22c55e", "#eab308", "#ef4444"];

export default function AnalyticsPage() {
  return (
    <main className="min-h-screen bg-[#050510] text-white">
      <div className="mx-auto max-w-7xl px-6 py-10">

        <div className="mb-10">
          <p className="text-purple-300 text-sm">
            ANALYTICS DASHBOARD
          </p>

          <h1 className="mt-2 text-5xl font-black">
            Verification Intelligence
          </h1>

          <p className="mt-4 text-gray-400">
            Track verification activity, fraud risk trends and trust metrics.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-4">

          <Metric title="Total Verifications" value="12,480" />
          <Metric title="Verified Users" value="9,832" />
          <Metric title="High Risk Profiles" value="317" />
          <Metric title="Average Trust Score" value="86%" />

        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">

          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
            <h2 className="mb-6 text-xl font-bold">
              Verification Volume
            </h2>

            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={verificationData}>
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="total" fill="#9333ea" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
            <h2 className="mb-6 text-xl font-bold">
              Risk Distribution
            </h2>

            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={riskData}
                    dataKey="value"
                    nameKey="name"
                    outerRadius={100}
                  >
                    {riskData.map((entry, index) => (
                      <Cell
                        key={index}
                        fill={COLORS[index]}
                      />
                    ))}
                  </Pie>

                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

        </div>

      </div>
    </main>
  );
}

function Metric({
  title,
  value,
}: {
  title: string;
  value: string;
}) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
      <h3 className="text-3xl font-black">{value}</h3>
      <p className="mt-2 text-gray-400">{title}</p>
    </div>
  );
}