import {
  Users,
  ShieldCheck,
  AlertTriangle,
  TrendingUp,
  FileCheck,
  Activity,
} from "lucide-react";

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-[#050510] text-white">
      <div className="mx-auto max-w-7xl px-6 py-10">

        <div className="mb-10">
          <p className="text-sm text-purple-300">
            ASASANTA VERIFY DASHBOARD
          </p>

          <h1 className="mt-2 text-5xl font-black">
            Trust Intelligence Center
          </h1>

          <p className="mt-4 text-gray-400">
            Monitor verification activity, fraud risk and customer trust
            metrics in real time.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-4">

          <StatCard
            title="Customers"
            value="12,480"
            icon={<Users className="h-6 w-6" />}
          />

          <StatCard
            title="Verified"
            value="9,832"
            icon={<FileCheck className="h-6 w-6" />}
          />

          <StatCard
            title="High Risk"
            value="317"
            icon={<AlertTriangle className="h-6 w-6" />}
          />

          <StatCard
            title="Trust Score"
            value="86%"
            icon={<ShieldCheck className="h-6 w-6" />}
          />
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-3">

          <div className="lg:col-span-2 rounded-3xl border border-white/10 bg-white/[0.04] p-6">
            <div className="mb-6 flex items-center gap-3">
              <TrendingUp className="h-5 w-5 text-green-400" />
              <h2 className="text-xl font-bold">
                Verification Activity
              </h2>
            </div>

            <div className="flex h-72 items-center justify-center rounded-2xl border border-dashed border-white/10">
              <p className="text-gray-500">
                Recharts Graph Placeholder
              </p>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
            <div className="mb-5 flex items-center gap-3">
              <Activity className="h-5 w-5 text-cyan-400" />
              <h2 className="text-xl font-bold">
                Risk Overview
              </h2>
            </div>

            <div className="space-y-5">

              <RiskItem
                label="Low Risk"
                value="72%"
                color="bg-green-500"
              />

              <RiskItem
                label="Medium Risk"
                value="20%"
                color="bg-yellow-500"
              />

              <RiskItem
                label="High Risk"
                value="8%"
                color="bg-red-500"
              />

            </div>
          </div>
        </div>

        <div className="mt-8 rounded-3xl border border-white/10 bg-white/[0.04] p-6">

          <h2 className="mb-6 text-2xl font-bold">
            Recent Verifications
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full">

              <thead>
                <tr className="border-b border-white/10 text-left">
                  <th className="pb-4">Customer</th>
                  <th className="pb-4">Trust Score</th>
                  <th className="pb-4">Risk</th>
                  <th className="pb-4">Status</th>
                </tr>
              </thead>

              <tbody>

                <Row
                  name="John Doe"
                  score="86"
                  risk="Low"
                  status="Verified"
                />

                <Row
                  name="Sarah Johnson"
                  score="74"
                  risk="Medium"
                  status="Review"
                />

                <Row
                  name="Michael Brown"
                  score="41"
                  risk="High"
                  status="Flagged"
                />

              </tbody>

            </table>
          </div>

        </div>

      </div>
    </main>
  );
}

function StatCard({
  title,
  value,
  icon,
}: {
  title: string;
  value: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
      <div className="mb-4 text-purple-300">{icon}</div>
      <h3 className="text-3xl font-black">{value}</h3>
      <p className="mt-2 text-gray-400">{title}</p>
    </div>
  );
}

function RiskItem({
  label,
  value,
  color,
}: {
  label: string;
  value: string;
  color: string;
}) {
  return (
    <div>
      <div className="mb-2 flex justify-between">
        <span>{label}</span>
        <span>{value}</span>
      </div>

      <div className="h-3 rounded-full bg-gray-800">
        <div className={`h-3 rounded-full ${color}`} style={{ width: value }} />
      </div>
    </div>
  );
}

function Row({
  name,
  score,
  risk,
  status,
}: {
  name: string;
  score: string;
  risk: string;
  status: string;
}) {
  return (
    <tr className="border-b border-white/5">
      <td className="py-4">{name}</td>
      <td>{score}/100</td>
      <td>{risk}</td>
      <td>{status}</td>
    </tr>
  );
}