"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const threatData = [
  { time: "10:00", threats: 12 },
  { time: "11:00", threats: 24 },
  { time: "12:00", threats: 18 },
  { time: "13:00", threats: 36 },
  { time: "14:00", threats: 28 },
  { time: "15:00", threats: 44 },
  { time: "16:00", threats: 31 },
];

const incidents = [
  {
    title: "Suspicious Login Attempt",
    severity: "High",
    time: "2 mins ago",
  },
  {
    title: "Firewall blocked malicious traffic",
    severity: "Medium",
    time: "14 mins ago",
  },
  {
    title: "Abnormal API request pattern",
    severity: "Low",
    time: "30 mins ago",
  },
];

const logs = [
  "192.168.0.24 attempted multiple failed logins",
  "Blocked IP 103.21.44.12 using firewall rules",
  "Admin login from new device detected",
  "Malware scan completed successfully",
];

export default function Dashboard() {
  const notifications = [
    "Blocked suspicious login from unknown IP",
    "Firewall prevented brute-force attempt",
    "API anomaly detected on payment route",
    "New suspicious device fingerprint found",
  ];

  const [toast, setToast] = useState(notifications[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setToast(
        notifications[Math.floor(Math.random() * notifications.length)]
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="min-h-screen bg-[#020617] text-white">
      {/* Live Toast */}
      <AnimatePresence mode="wait">
        <motion.div
          key={toast}
          initial={{ opacity: 0, y: -20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 0.95 }}
          transition={{ duration: 0.3 }}
          className="fixed right-6 top-6 z-50 rounded-2xl border border-cyan-400/30 bg-[#020617]/90 px-5 py-4 shadow-2xl backdrop-blur-xl"
        >
          <p className="text-sm text-cyan-300">Live Alert</p>
          <p className="mt-1 text-sm text-white">{toast}</p>
        </motion.div>
      </AnimatePresence>

      <div className="flex">
        {/* Sidebar */}
        <aside className="sticky top-0 hidden h-screen w-72 border-r border-white/10 bg-black/20 p-6 backdrop-blur-xl lg:block">
          <h1 className="text-4xl font-black tracking-tight">
            Sentinel<span className="text-cyan-400">IQ</span>
          </h1>

          <nav className="mt-12 space-y-3">
            {[
              "Overview",
              "Threats",
              "Incidents",
              "Logs",
              "Settings",
            ].map((item, index) => (
              <div
                key={item}
                className={`rounded-2xl px-4 py-3 text-sm font-medium transition ${
                  index === 0
                    ? "bg-cyan-500/20 text-cyan-300"
                    : "text-white/60 hover:bg-white/5 hover:text-white"
                }`}
              >
                {item}
              </div>
            ))}
          </nav>

          <div className="mt-16 rounded-3xl border border-cyan-400/20 bg-cyan-500/10 p-6">
            <p className="text-sm text-cyan-300">Security Status</p>

            <h3 className="mt-3 text-4xl font-bold">Protected</h3>

            <p className="mt-3 text-sm leading-6 text-white/60">
              All monitored systems are currently stable.
            </p>
          </div>
        </aside>

        {/* Main */}
        <section className="flex-1 p-6 lg:p-10">
          {/* Header */}
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">
                Live Monitoring
              </p>

              <h1 className="mt-3 text-5xl font-black md:text-7xl">
                Security Dashboard
              </h1>
            </div>

            <a
              href="/"
              className="w-fit rounded-full border border-white/10 bg-white/[0.03] px-6 py-3 text-sm font-medium transition hover:bg-white/[0.08]"
            >
              Back Home
            </a>
          </div>

          {/* Stats */}
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {[
              ["Active Threats", "18", "+4 today"],
              ["Blocked Attempts", "342", "Last 24h"],
              ["Risk Score", "Low", "Stable"],
              ["Systems Online", "99.9%", "Healthy"],
            ].map(([title, value, sub]) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl"
              >
                <p className="text-white/50">{title}</p>

                <h3 className="mt-4 text-5xl font-black">{value}</h3>

                <p className="mt-4 text-cyan-300">{sub}</p>
              </motion.div>
            ))}
          </div>

          {/* Charts */}
          <div className="mt-10 grid gap-6 xl:grid-cols-3">
            {/* Threat Chart */}
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl xl:col-span-2">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold">Threat Activity</h2>

                <div className="rounded-full bg-cyan-500/20 px-4 py-2 text-sm text-cyan-300">
                  Last 12 hours
                </div>
              </div>

              <div className="mt-8 h-72">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={threatData}>
                    <XAxis dataKey="time" stroke="#94a3b8" />

                    <YAxis stroke="#94a3b8" />

                    <Tooltip
                      contentStyle={{
                        backgroundColor: "#020617",
                        border: "1px solid rgba(255,255,255,0.1)",
                        borderRadius: "16px",
                        color: "#fff",
                      }}
                    />

                    <Bar
                      dataKey="threats"
                      fill="#22d3ee"
                      radius={[10, 10, 0, 0]}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Risk */}
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 text-center backdrop-blur-xl">
              <h2 className="text-2xl font-bold">Risk Level</h2>

              <div className="mx-auto mt-10 flex h-48 w-48 items-center justify-center rounded-full border-[20px] border-cyan-500 bg-cyan-500/10">
                <div>
                  <p className="text-6xl font-black">Low</p>

                  <p className="mt-2 text-white/50">Current risk</p>
                </div>
              </div>

              <p className="mt-8 text-white/60">
                Risk level is currently low. No critical incidents detected.
              </p>
            </div>
          </div>

          {/* Incidents + Logs */}
          <div className="mt-10 grid gap-6 xl:grid-cols-2">
            {/* Incidents */}
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl">
              <h2 className="text-2xl font-bold">Incident Feed</h2>

              <div className="mt-8 space-y-4">
                {incidents.map((incident) => (
                  <div
                    key={incident.title}
                    className="rounded-2xl border border-white/10 bg-black/20 p-5"
                  >
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold">{incident.title}</h3>

                      <span
                        className={`rounded-full px-3 py-1 text-xs ${
                          incident.severity === "High"
                            ? "bg-red-500/20 text-red-300"
                            : incident.severity === "Medium"
                            ? "bg-yellow-500/20 text-yellow-300"
                            : "bg-green-500/20 text-green-300"
                        }`}
                      >
                        {incident.severity}
                      </span>
                    </div>

                    <p className="mt-3 text-sm text-white/50">
                      {incident.time}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Logs */}
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl">
              <h2 className="text-2xl font-bold">Attack Logs</h2>

              <div className="mt-8 space-y-4">
                {logs.map((log) => (
                  <div
                    key={log}
                    className="rounded-2xl border border-white/10 bg-black/20 p-4 text-sm text-white/70"
                  >
                    {log}
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