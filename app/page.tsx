import {
  ShieldCheck,
  Database,
  Brain,
  LockKeyhole,
  BarChart3,
  CheckCircle2,
  ArrowRight,
  Activity,
  Users,
  FileCheck,
} from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050510] text-white">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-purple-600">
            <ShieldCheck className="h-6 w-6" />
          </div>
          <div>
            <h1 className="text-lg font-bold">Asasanta Verify</h1>
            <p className="text-xs text-gray-400">AI Trust Infrastructure</p>
          </div>
        </div>

        <div className="hidden items-center gap-8 text-sm text-gray-300 md:flex">
          <a href="#features">Features</a>
          <a href="#architecture">Architecture</a>
          <a href="#pricing">Pricing</a>
        </div>

        <a
          href="/dashboard"
          className="rounded-xl bg-white px-5 py-3 text-sm font-semibold text-black hover:bg-gray-200"
        >
          Launch App
        </a>
      </nav>

      <section className="relative overflow-hidden px-6 py-20">
        <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-purple-600/20 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-2 text-sm text-purple-200">
              <Activity className="h-4 w-4" />
              Built for H0 Hackathon: Vercel + AWS Databases
            </div>

            <h1 className="text-5xl font-black leading-tight tracking-tight md:text-7xl">
              Verify customers.
              <span className="block bg-gradient-to-r from-purple-400 to-cyan-300 bg-clip-text text-transparent">
                Detect fraud.
              </span>
              Build trust.
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-gray-300">
              Asasanta Verify helps fintechs, lenders, marketplaces and
              enterprises automate KYC, analyze customer risk, generate trust
              scores and maintain compliance-ready audit records.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="/verify"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-purple-600 px-8 py-4 font-semibold hover:bg-purple-700"
              >
                Start Verification <ArrowRight className="h-5 w-5" />
              </a>

              <a
                href="#architecture"
                className="inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-8 py-4 font-semibold hover:bg-white/10"
              >
                View Architecture
              </a>
            </div>

            <div className="mt-10 grid max-w-xl grid-cols-3 gap-4">
              <div>
                <p className="text-3xl font-bold">98%</p>
                <p className="text-sm text-gray-400">Faster Review</p>
              </div>
              <div>
                <p className="text-3xl font-bold">24/7</p>
                <p className="text-sm text-gray-400">AI Monitoring</p>
              </div>
              <div>
                <p className="text-3xl font-bold">AWS</p>
                <p className="text-sm text-gray-400">Scale Ready</p>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5 shadow-2xl backdrop-blur">
            <div className="rounded-2xl bg-[#0b0b1a] p-5">
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-400">Live Risk Dashboard</p>
                  <h2 className="text-2xl font-bold">Verification Report</h2>
                </div>
                <div className="rounded-full bg-green-500/15 px-4 py-2 text-sm text-green-300">
                  Active
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                <MetricCard icon={<Users />} label="Customers" value="12,480" />
                <MetricCard icon={<FileCheck />} label="Verified" value="9,832" />
                <MetricCard icon={<BarChart3 />} label="High Risk" value="317" />
              </div>

              <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <div className="mb-4 flex items-center justify-between">
                  <p className="font-semibold">Customer Trust Score</p>
                  <p className="text-2xl font-bold text-green-300">86/100</p>
                </div>

                <div className="h-3 overflow-hidden rounded-full bg-gray-800">
                  <div className="h-full w-[86%] rounded-full bg-gradient-to-r from-green-400 to-cyan-300" />
                </div>

                <div className="mt-5 space-y-3 text-sm">
                  <CheckItem text="Identity details matched successfully" />
                  <CheckItem text="No duplicate customer record detected" />
                  <CheckItem text="Low fraud probability from AI analysis" />
                </div>
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-purple-500/20 bg-purple-500/10 p-4">
                  <Database className="mb-3 h-6 w-6 text-purple-300" />
                  <p className="font-semibold">Aurora PostgreSQL</p>
                  <p className="mt-1 text-sm text-gray-400">
                    KYC, compliance and customer records.
                  </p>
                </div>

                <div className="rounded-2xl border border-cyan-500/20 bg-cyan-500/10 p-4">
                  <Database className="mb-3 h-6 w-6 text-cyan-300" />
                  <p className="font-semibold">DynamoDB</p>
                  <p className="mt-1 text-sm text-gray-400">
                    Fast trust score and audit log lookups.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-12 max-w-3xl">
          <p className="mb-3 text-sm font-semibold text-purple-300">
            WHY IT MATTERS
          </p>
          <h2 className="text-4xl font-bold md:text-5xl">
            Built for real businesses that need fast and trustworthy onboarding.
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <FeatureCard
            icon={<Brain />}
            title="AI Risk Analysis"
            text="Analyze customer data and produce a clear trust score, risk level and verification recommendation."
          />
          <FeatureCard
            icon={<ShieldCheck />}
            title="KYC Automation"
            text="Reduce manual review time by turning customer identity checks into structured verification workflows."
          />
          <FeatureCard
            icon={<LockKeyhole />}
            title="Compliance Audit Trail"
            text="Keep verification history, risk events and decisions ready for audit and internal compliance."
          />
        </div>
      </section>

      <section id="architecture" className="mx-auto max-w-7xl px-6 py-20">
        <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 md:p-12">
          <p className="mb-3 text-sm font-semibold text-cyan-300">
            AWS DATABASE ARCHITECTURE
          </p>
          <h2 className="text-4xl font-bold">
            Database choices designed for scale, not just connection.
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl bg-black/30 p-6">
              <h3 className="mb-3 text-2xl font-bold">Aurora PostgreSQL</h3>
              <p className="text-gray-300">
                Used for relational KYC, customer profiles, compliance records
                and verification reports where transactions and structured
                queries matter.
              </p>
            </div>

            <div className="rounded-2xl bg-black/30 p-6">
              <h3 className="mb-3 text-2xl font-bold">DynamoDB</h3>
              <p className="text-gray-300">
                Used for real-time trust scores, audit logs and risk events
                that require low-latency access and high-volume scalability.
              </p>
            </div>
          </div>

          <div className="mt-8 rounded-2xl border border-white/10 bg-black/40 p-6 text-sm text-gray-300">
            <p>
              Vercel Frontend → Next.js API → AI Risk Engine → Aurora
              PostgreSQL + DynamoDB → Analytics Dashboard
            </p>
          </div>
        </div>
      </section>

      <section id="pricing" className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold">Simple B2B pricing</h2>
          <p className="mt-4 text-gray-400">
            Monetizable from day one for fintechs, lenders and marketplaces.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <PriceCard name="Starter" price="$29" items={["500 verifications", "Basic trust score", "Email support"]} />
          <PriceCard name="Business" price="$99" items={["5,000 verifications", "AI fraud analysis", "Audit dashboard"]} highlighted />
          <PriceCard name="Enterprise" price="Custom" items={["Unlimited scale", "Custom workflows", "Priority support"]} />
        </div>
      </section>

      <footer className="border-t border-white/10 px-6 py-10 text-center text-sm text-gray-500">
        © 2026 Asasanta Verify. AI-powered KYC and trust infrastructure.
      </footer>
    </main>
  );
}

function MetricCard({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
      <div className="mb-3 text-purple-300">{icon}</div>
      <p className="text-xl font-bold">{value}</p>
      <p className="text-sm text-gray-400">{label}</p>
    </div>
  );
}

function CheckItem({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-3 text-gray-300">
      <CheckCircle2 className="h-5 w-5 text-green-300" />
      <span>{text}</span>
    </div>
  );
}

function FeatureCard({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-7 hover:bg-white/[0.07]">
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-purple-600/20 text-purple-300">
        {icon}
      </div>
      <h3 className="mb-3 text-2xl font-bold">{title}</h3>
      <p className="leading-7 text-gray-400">{text}</p>
    </div>
  );
}

function PriceCard({
  name,
  price,
  items,
  highlighted,
}: {
  name: string;
  price: string;
  items: string[];
  highlighted?: boolean;
}) {
  return (
    <div
      className={`rounded-3xl border p-7 ${
        highlighted
          ? "border-purple-500 bg-purple-600/10"
          : "border-white/10 bg-white/[0.04]"
      }`}
    >
      <p className="text-lg font-semibold">{name}</p>
      <p className="mt-4 text-4xl font-black">{price}</p>
      <p className="mt-1 text-sm text-gray-400">
        {price === "Custom" ? "For large teams" : "per month"}
      </p>

      <div className="mt-6 space-y-3">
        {items.map((item) => (
          <div key={item} className="flex items-center gap-3 text-sm text-gray-300">
            <CheckCircle2 className="h-5 w-5 text-green-300" />
            {item}
          </div>
        ))}
      </div>

      <button className="mt-8 w-full rounded-2xl bg-white px-5 py-3 font-semibold text-black hover:bg-gray-200">
        Get Started
      </button>
    </div>
  );
}