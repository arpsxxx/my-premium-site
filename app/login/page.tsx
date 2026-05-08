"use client";

import { motion } from "framer-motion";

export default function Login() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#020617] px-6 text-white">
      <div className="fixed inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-cyan-500/20 blur-[140px]" />
        <div className="absolute bottom-0 right-0 h-[600px] w-[600px] rounded-full bg-blue-600/20 blur-[140px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:80px_80px]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md rounded-[2rem] border border-white/10 bg-white/[0.05] p-8 shadow-2xl backdrop-blur-xl"
      >
        <a href="/" className="text-sm text-white/50 hover:text-white">
          ← Back home
        </a>

        <div className="mt-8">
          <h1 className="text-3xl font-black">
            Sentinel<span className="text-cyan-400">IQ</span>
          </h1>
          <p className="mt-3 text-white/60">
            Sign in to access your security dashboard.
          </p>
        </div>

        <form className="mt-8 space-y-5">
          <div>
            <label className="text-sm text-white/60">Email address</label>
            <input
              type="email"
              placeholder="security@example.com"
              className="mt-2 w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-4 text-white outline-none transition placeholder:text-white/30 focus:border-cyan-400"
            />
          </div>

          <div>
            <label className="text-sm text-white/60">Password</label>
            <input
              type="password"
              placeholder="••••••••"
              className="mt-2 w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-4 text-white outline-none transition placeholder:text-white/30 focus:border-cyan-400"
            />
          </div>

          <a
            href="/dashboard"
            className="block w-full rounded-full bg-white py-4 text-center font-semibold text-black transition hover:scale-105 hover:bg-cyan-200"
          >
            Sign In
          </a>
        </form>

        <p className="mt-6 text-center text-sm text-white/50">
          Demo login only — no real authentication yet.
        </p>
      </motion.div>
    </main>
  );
}