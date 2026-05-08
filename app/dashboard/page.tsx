"use client";

import { motion } from "framer-motion";

const stats = [
  { label: "Active Threats", value: "18", change: "+4 today" },
  { label: "Blocked Attempts", value: "342", change: "Last 24h" },
  { label: "Risk Score", value: "Low", change: "Stable" },
  { label: "Systems Online", value: "99.9%", change: "Healthy" },
];

const navItems = ["Overview", "Threats", "Incidents", "Logs", "Settings"];

const alerts = [
  "Suspicious login attempt from unknown location",
  "Multiple failed authentication attempts detected",
  "Unusual API traffic spike on payment endpoint",
  "Possible brute-force pattern blocked",
];

export default function Dashboard() {
  return (
    <main className="min-h-screen bg-[#020617] text-white">
      <div className="fixed inset-0 -z-10 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:80px_80px]" />

      <div className="flex min-h-screen">
        {/* Sidebar */}
        <aside className="hidden w-72 border-r border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl lg:block">
          <h1 className="text-2xl font-bold">
            Sentinel<span className="text-cyan-400">IQ</span>
          </h1>

          <div className="mt-10 space-y-2">
            {navItems.map((item, index) => (
              <button
                key={item}
                className={`w-full rounded-2xl px-4 py-3 text-left text-sm transition ${
                  index === 0
                    ? "bg-cyan-400/10 text-cyan-300"
                    : "text-white/60 hover:bg-white/10 hover:text-white"
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          <div className="mt-10 rounded-3xl border border-cyan-400/20 bg-cyan-400/10 p-5">
            <p className="text-sm text-cyan-300">Security Status</p>
            <h2 className="mt-2 text-2xl font-bold">Protected</h2>
            <p className="mt-3 text-sm text-white/60">
              All monitored systems are currently stable.
            </p>
          </div>
        </aside>

        {/* Main Content */}
        <section className="flex-1 px-6 py-8 lg:px-10">
          {/* Topbar */}
          <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">
                Live Monitoring
              </p>
              <h1 className="mt-2 text-4xl font-black md:text-5xl">
                Security Dashboard
              </h1>
            </div>

            <a
              href="/"
              className="w-fit rounded-full border border-white/10 px-5 py-2 text-sm text-white/70 transition hover:bg-white/10 hover:text-white"
            >
              Back Home
            </a>
          </div>

          {/* Stats */}
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl"
              >
                <p className="text-sm text-white/50">{stat.label}</p>
                <h2 className="mt-3 text-4xl font-bold">{stat.value}</h2>
                <p className="mt-3 text-sm text-cyan-300">{stat.change}</p>
              </motion.div>
            ))}
          </div>

          {/* Middle */}
          <div className="mt-8 grid gap-6 xl:grid-cols-3">
            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 xl:col-span-2">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold">Threat Activity</h2>
                <span className="rounded-full bg-cyan-400/10 px-3 py-1 text-sm text-cyan-300">
                  Last 12 hours
                </span>
              </div>

              <div className="mt-8 flex h-72 items-end gap-3">
                {[40, 70, 45, 90, 65, 100, 75, 55, 85, 60, 95, 80].map(
                  (height, index) => (
                    <motion.div
                      key={index}
                      initial={{ height: 0 }}
                      animate={{ height: `${height}%` }}
                      transition={{ delay: index * 0.05 }}
                      className="w-full rounded-t-xl bg-gradient-to-t from-cyan-500 to-blue-300"
                    />
                  )
                )}
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
              <h2 className="text-2xl font-bold">Risk Level</h2>

              <div className="mt-10 flex items-center justify-center">
                <div className="flex h-48 w-48 items-center justify-center rounded-full border-[18px] border-cyan-400/70 bg-cyan-400/10">
                  <div className="text-center">
                    <p className="text-5xl font-black">Low</p>
                    <p className="mt-2 text-sm text-white/50">Current risk</p>
                  </div>
                </div>
              </div>

              <p className="mt-8 text-center text-sm text-white/60">
                Risk level is currently low. No critical incidents detected.
              </p>
            </div>
          </div>

          {/* Bottom */}
          <div className="mt-8 grid gap-6 xl:grid-cols-2">
            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
              <h2 className="text-2xl font-bold">Incident Feed</h2>

              <div className="mt-6 space-y-4">
                {alerts.map((alert) => (
                  <div
                    key={alert}
                    className="rounded-2xl border border-white/10 bg-black/30 p-4"
                  >
                    <p className="text-white/80">{alert}</p>
                    <div className="mt-3 flex justify-between text-sm">
                      <span className="text-white/40">2 mins ago</span>
                      <span className="text-cyan-300">Reviewed</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
              <h2 className="text-2xl font-bold">Attack Logs</h2>

              <div className="mt-6 space-y-4 text-sm">
                {[
                  ["10:42", "Blocked login attempt", "High"],
                  ["11:05", "API anomaly detected", "Medium"],
                  ["12:18", "Firewall rule triggered", "Low"],
                  ["13:36", "Suspicious IP flagged", "Medium"],
                ].map(([time, event, severity]) => (
                  <div
                    key={event}
                    className="grid grid-cols-3 rounded-2xl border border-white/10 bg-black/30 p-4"
                  >
                    <span className="text-white/50">{time}</span>
                    <span>{event}</span>
                    <span className="text-right text-cyan-300">{severity}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}