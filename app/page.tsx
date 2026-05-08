"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";

const features = [
  {
    title: "Threat Detection",
    text: "Monitor suspicious activity, login risks, unusual traffic, and potential attacks before they escalate.",
    icon: "🛡️",
  },
  {
    title: "Live Risk Alerts",
    text: "Get instant alerts when risky behaviour, abnormal access, or security anomalies are detected.",
    icon: "⚡",
  },
  {
    title: "Security Dashboard",
    text: "Visualise risk levels, active incidents, blocked attempts, and system health in one clean dashboard.",
    icon: "📊",
  },
];

const faqs = [
  {
    q: "What is SentinelIQ?",
    a: "SentinelIQ is a concept cybersecurity SaaS platform that shows how teams could monitor risks, alerts, and suspicious activity.",
  },
  {
    q: "Is this a real security product?",
    a: "Right now it is a portfolio landing page, but you can later connect it to real APIs, logs, authentication, and dashboards.",
  },
  {
    q: "Can I use this in my portfolio?",
    a: "Yes. This is much stronger than a generic AI website because it shows a clear niche and product idea.",
  },
];

export default function Home() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, { stiffness: 80, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 80, damping: 20 });

  return (
    <main
      onMouseMove={(e) => {
        mouseX.set(e.clientX);
        mouseY.set(e.clientY);
      }}
      className="relative min-h-screen overflow-hidden bg-[#020617] text-white"
    >
      {/* Mouse Glow */}
      <motion.div
        style={{ left: smoothX, top: smoothY }}
        className="pointer-events-none fixed z-0 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/20 blur-3xl"
      />

      {/* Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-cyan-500/20 blur-[140px]" />
        <div className="absolute bottom-0 right-0 h-[600px] w-[600px] rounded-full bg-blue-600/20 blur-[140px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:80px_80px]" />
      </div>

      {/* Navbar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.7 }}
        className="fixed left-1/2 top-4 z-50 w-[95%] max-w-6xl -translate-x-1/2 rounded-2xl border border-white/10 bg-[#020617]/60 backdrop-blur-2xl"
      >
        <div className="mx-auto flex items-center justify-between px-6 py-4">
          <h1 className="text-2xl font-bold tracking-tight">
            Sentinel<span className="text-cyan-400">IQ</span>
          </h1>

          <div className="hidden gap-8 text-sm text-white/70 md:flex">
            <a href="#features" className="transition hover:text-white">
              Platform
            </a>
            <a href="#pricing" className="transition hover:text-white">
              Pricing
            </a>
            <a href="#faq" className="transition hover:text-white">
              FAQ
            </a>
          </div>

          <a
            href="/login"
            className="rounded-full bg-white px-5 py-2 text-sm font-semibold text-black transition hover:scale-105 hover:bg-cyan-200"
          >
            Start Monitoring
          </a>
        </div>
      </motion.nav>

      {/* Hero */}
      <section className="relative z-10 flex min-h-screen items-center justify-center px-6 pt-28">
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="mx-auto max-w-6xl text-center"
        >
          <div className="mx-auto mb-8 w-fit rounded-full border border-cyan-400/20 bg-cyan-400/10 px-5 py-2 text-sm text-cyan-200 backdrop-blur-xl">
            AI-powered cyber risk monitoring
          </div>

          <h1 className="bg-gradient-to-b from-white via-white to-cyan-200/50 bg-clip-text text-6xl font-black leading-tight tracking-tight text-transparent md:text-8xl">
            Detect threats before they become breaches.
          </h1>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-white/65 md:text-xl">
            SentinelIQ helps security teams monitor suspicious behaviour,
            prioritise risks, and respond faster with a clean AI-assisted
            cybersecurity dashboard.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="/login"
              className="rounded-full bg-white px-8 py-4 font-semibold text-black transition hover:scale-105 hover:bg-cyan-200"
            >
              Start Monitoring
            </a>

            <a
              href="/dashboard"
              className="rounded-full border border-white/15 bg-white/5 px-8 py-4 font-semibold text-white backdrop-blur-xl transition hover:bg-white/10"
            >
              View Security Demo
            </a>
          </div>

          <div className="mx-auto mt-16 grid max-w-3xl grid-cols-3 gap-4 rounded-3xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur-xl">
            {[
              ["1.2K", "Events Scanned"],
              ["98%", "Risk Accuracy"],
              ["24/7", "Monitoring"],
            ].map(([number, label]) => (
              <div key={label} className="rounded-2xl bg-black/20 p-5">
                <p className="text-3xl font-bold">{number}</p>
                <p className="text-sm text-white/50">{label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Features */}
      <section id="features" className="relative z-10 px-6 py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <p className="mb-3 text-sm uppercase tracking-[0.3em] text-cyan-300">
              Platform
            </p>

            <h2 className="text-4xl font-bold md:text-6xl">
              Security visibility in one place.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-white/60">
              Built around the core problems security teams care about:
              detection, prioritisation, and response.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="group rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 shadow-2xl backdrop-blur-xl transition hover:-translate-y-2 hover:border-cyan-400/40 hover:bg-white/[0.08]"
              >
                <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-500/20 text-2xl">
                  {feature.icon}
                </div>

                <h3 className="mb-4 text-2xl font-bold">
                  {feature.title}
                </h3>

                <p className="leading-7 text-white/60">
                  {feature.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="relative z-10 px-6 py-32">
        <div className="mx-auto max-w-5xl rounded-[2.5rem] border border-white/10 bg-white/[0.04] p-10 text-center shadow-2xl backdrop-blur-xl md:p-16">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-cyan-300">
            Pricing
          </p>

          <h2 className="text-4xl font-bold md:text-6xl">
            Security that scales with you.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-white/60">
            A portfolio-ready pricing section for a modern cybersecurity SaaS
            platform.
          </p>

          <div className="mx-auto mt-12 max-w-md rounded-[2rem] border border-cyan-400/30 bg-black/40 p-8">
            <h3 className="text-2xl font-bold">Starter Security</h3>

            <p className="mt-5 text-6xl font-black">£19</p>

            <p className="mt-2 text-white/50">per month</p>

            <ul className="mt-8 space-y-3 text-left text-white/70">
              <li>✓ Threat activity dashboard</li>
              <li>✓ Suspicious login alerts</li>
              <li>✓ Basic risk scoring</li>
              <li>✓ Weekly security summary</li>
            </ul>

            <a
              href="/login"
              className="mt-8 block w-full rounded-full bg-white py-4 font-semibold text-black transition hover:scale-105 hover:bg-cyan-200"
            >
              Start Monitoring
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="relative z-10 px-6 py-32">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-12 text-center text-4xl font-bold md:text-6xl">
            Questions
          </h2>

          <div className="space-y-4">
            {faqs.map((item) => (
              <div
                key={item.q}
                className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl"
              >
                <h3 className="text-xl font-semibold">
                  {item.q}
                </h3>

                <p className="mt-3 text-white/60">
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative z-10 px-6 py-24">
        <div className="mx-auto max-w-5xl rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 p-12 text-center shadow-2xl backdrop-blur-xl">
          <h2 className="text-4xl font-bold md:text-6xl">
            Turn security data into action.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-white/65">
            Use this project as your cybersecurity SaaS portfolio piece and keep
            improving it into a real dashboard.
          </p>

          <a
            href="/login"
            className="mt-8 inline-block rounded-full bg-white px-8 py-4 font-semibold text-black transition hover:scale-105 hover:bg-cyan-200"
          >
            Continue Building
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/10 px-6 py-10 text-center text-white/50">
        © 2026 SentinelIQ. Cybersecurity SaaS landing page built with
        Next.js, Tailwind CSS, and Framer Motion.
      </footer>
    </main>
  );
}