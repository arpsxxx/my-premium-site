"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";

const features = [
  {
    title: "Premium Design",
    text: "Luxury spacing, polished typography, glass cards, gradients, and a modern SaaS feel.",
    icon: "✦",
  },
  {
    title: "AI Workflow",
    text: "Generate sections, layouts, copy, components, and quick design improvements using AI.",
    icon: "⚡",
  },
  {
    title: "Fast Performance",
    text: "Built with Next.js, Tailwind CSS, smooth animations, and responsive layouts.",
    icon: "🚀",
  },
];

const faqs = [
  {
    q: "Can I customise the website?",
    a: "Yes. You can change the text, colours, sections, layout, buttons, and branding.",
  },
  {
    q: "Is this mobile responsive?",
    a: "Yes. The layout adapts nicely for desktop, tablet, and mobile screens.",
  },
  {
    q: "Can I deploy it online?",
    a: "Yes. You can deploy it for free using Vercel when the project is ready.",
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
      {/* Mouse glow */}
      <motion.div
        style={{ left: smoothX, top: smoothY }}
        className="pointer-events-none fixed z-0 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-500/20 blur-3xl"
      />

      {/* Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-purple-500/20 blur-[140px]" />
        <div className="absolute bottom-0 right-0 h-[600px] w-[600px] rounded-full bg-blue-500/20 blur-[140px]" />
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
            Arpit<span className="text-purple-400">AI</span>
          </h1>

          <div className="hidden gap-8 text-sm text-white/70 md:flex">
            <a href="#features" className="transition hover:text-white">
              Features
            </a>
            <a href="#pricing" className="transition hover:text-white">
              Pricing
            </a>
            <a href="#faq" className="transition hover:text-white">
              FAQ
            </a>
          </div>

          <button className="rounded-full bg-white px-5 py-2 text-sm font-semibold text-black transition hover:scale-105 hover:bg-purple-200">
            Start Free
          </button>
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
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="mx-auto mb-8 w-fit rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm text-white/70 backdrop-blur-xl"
          >
            AI-powered websites built beautifully
          </motion.div>

          <h1 className="bg-gradient-to-b from-white via-white to-white/40 bg-clip-text text-6xl font-black leading-tight tracking-tight text-transparent md:text-8xl">
            Build Premium Websites with AI
          </h1>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-white/65 md:text-xl">
            A modern landing page template built with Next.js, Tailwind CSS, and
            Framer Motion — perfect for SaaS, portfolios, startups, and AI tools.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <button className="rounded-full bg-white px-8 py-4 font-semibold text-black transition hover:scale-105 hover:bg-purple-200">
              Get Started
            </button>

            <button className="rounded-full border border-white/15 bg-white/5 px-8 py-4 font-semibold text-white backdrop-blur-xl transition hover:bg-white/10">
              View Demo
            </button>
          </div>

          <div className="mx-auto mt-16 grid max-w-3xl grid-cols-3 gap-4 rounded-3xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur-xl">
            {[
              ["90+", "Performance"],
              ["100%", "Responsive"],
              ["24h", "Build Speed"],
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
            <p className="mb-3 text-sm uppercase tracking-[0.3em] text-purple-300">
              Features
            </p>
            <h2 className="text-4xl font-bold md:text-6xl">
              Everything looks expensive.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-white/60">
              Designed to feel like a premium startup website, not a basic
              AI-generated page.
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
                className="group rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 shadow-2xl backdrop-blur-xl transition hover:-translate-y-2 hover:border-purple-400/40 hover:bg-white/[0.08]"
              >
                <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-purple-500/20 text-2xl">
                  {feature.icon}
                </div>

                <h3 className="mb-4 text-2xl font-bold">{feature.title}</h3>

                <p className="leading-7 text-white/60">{feature.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Showcase */}
      <section className="relative z-10 px-6 py-24">
        <div className="mx-auto max-w-7xl rounded-[2.5rem] border border-white/10 bg-white/[0.04] p-6 shadow-2xl backdrop-blur-xl md:p-10">
          <div className="rounded-[2rem] border border-white/10 bg-black/50 p-6">
            <div className="mb-6 flex gap-2">
              <span className="h-3 w-3 rounded-full bg-red-400" />
              <span className="h-3 w-3 rounded-full bg-yellow-400" />
              <span className="h-3 w-3 rounded-full bg-green-400" />
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              <div className="rounded-2xl bg-white/5 p-6">
                <p className="text-sm text-white/40">Stack</p>
                <p className="mt-2 text-xl font-bold">Next.js + Tailwind</p>
              </div>
              <div className="rounded-2xl bg-white/5 p-6">
                <p className="text-sm text-white/40">Motion</p>
                <p className="mt-2 text-xl font-bold">Framer Motion</p>
              </div>
              <div className="rounded-2xl bg-white/5 p-6">
                <p className="text-sm text-white/40">Style</p>
                <p className="mt-2 text-xl font-bold">Premium SaaS</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="relative z-10 px-6 py-32">
        <div className="mx-auto max-w-5xl rounded-[2.5rem] border border-white/10 bg-white/[0.04] p-10 text-center shadow-2xl backdrop-blur-xl md:p-16">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-blue-300">
            Pricing
          </p>

          <h2 className="text-4xl font-bold md:text-6xl">
            Launch your idea faster.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-white/60">
            Use this as a starting point for client websites, personal projects,
            SaaS ideas, or portfolio work.
          </p>

          <div className="mx-auto mt-12 max-w-md rounded-[2rem] border border-purple-400/30 bg-black/40 p-8">
            <h3 className="text-2xl font-bold">Starter Build</h3>
            <p className="mt-5 text-6xl font-black">£0</p>
            <p className="mt-2 text-white/50">Built locally by you</p>

            <ul className="mt-8 space-y-3 text-left text-white/70">
              <li>✓ Premium landing page</li>
              <li>✓ Responsive layout</li>
              <li>✓ Framer Motion animations</li>
              <li>✓ Ready for Vercel deployment</li>
            </ul>

            <button className="mt-8 w-full rounded-full bg-white py-4 font-semibold text-black transition hover:scale-105 hover:bg-purple-200">
              Start Building
            </button>
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
                <h3 className="text-xl font-semibold">{item.q}</h3>
                <p className="mt-3 text-white/60">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative z-10 px-6 py-24">
        <div className="mx-auto max-w-5xl rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-purple-500/20 to-blue-500/20 p-12 text-center shadow-2xl backdrop-blur-xl">
          <h2 className="text-4xl font-bold md:text-6xl">
            Ready to build your next project?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-white/65">
            Keep improving this project section by section and turn it into a
            portfolio-quality website.
          </p>

          <button className="mt-8 rounded-full bg-white px-8 py-4 font-semibold text-black transition hover:scale-105 hover:bg-purple-200">
            Continue Building
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/10 px-6 py-10 text-center text-white/50">
        © 2026 ArpitAI. Built with Next.js, Tailwind CSS, and Framer Motion.
      </footer>
    </main>
  );
}