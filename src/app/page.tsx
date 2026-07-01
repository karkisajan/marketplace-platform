"use client";

import React from "react";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-slate-950 text-slate-100 flex flex-col items-center justify-center p-6 overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-violet-900/20 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-cyan-900/20 blur-[120px] pointer-events-none" />

      {/* Main Content Card */}
      <div className="relative z-10 max-w-2xl w-full bg-slate-900/50 border border-slate-800 rounded-3xl p-8 md:p-12 backdrop-blur-md shadow-2xl transition-all duration-300 hover:border-slate-700/80">
        
        {/* Header Section */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-800/80 border border-slate-700/50 text-xs font-semibold text-cyan-400 mb-4 animate-pulse">
            <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
            Fresh Slate Ready
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-100 to-slate-400">
            Next.js Clean Slate
          </h1>
          <p className="mt-3 text-slate-400 text-sm md:text-base leading-relaxed">
            All previous routes, feature modules, and configurations have been successfully removed. Start building your next idea on a clean foundation.
          </p>
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <div className="p-5 rounded-2xl bg-slate-950/40 border border-slate-800/80 hover:border-slate-800 transition-colors">
            <h3 className="text-sm font-semibold text-slate-200 mb-1">Cleaned Directories</h3>
            <p className="text-xs text-slate-500">
              Removed <code className="text-slate-400">/features</code>, <code className="text-slate-400">/components</code>, custom routes, and internal client instances.
            </p>
          </div>
          <div className="p-5 rounded-2xl bg-slate-950/40 border border-slate-800/80 hover:border-slate-800 transition-colors">
            <h3 className="text-sm font-semibold text-slate-200 mb-1">Tech Stack</h3>
            <p className="text-xs text-slate-500">
              Next.js, React 19, TypeScript, and Tailwind CSS v4 are ready to be utilized.
            </p>
          </div>
        </div>

        {/* Steps/Quick Start */}
        <div className="border-t border-slate-800/60 pt-6">
          <h2 className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-4">Quick Start</h2>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <span className="flex items-center justify-center w-5 h-5 rounded-full bg-slate-800 text-[10px] font-bold text-slate-300 mt-0.5">1</span>
              <div>
                <p className="text-xs font-medium text-slate-300">Create page routes</p>
                <p className="text-[11px] text-slate-500">Add nested folders and <code className="text-slate-400">page.tsx</code> files under <code className="text-slate-400">src/app/</code>.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="flex items-center justify-center w-5 h-5 rounded-full bg-slate-800 text-[10px] font-bold text-slate-300 mt-0.5">2</span>
              <div>
                <p className="text-xs font-medium text-slate-300">Set up styling & components</p>
                <p className="text-[11px] text-slate-500">Create reusable components or integrate UI libraries using your styling config.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Action Button */}
        <div className="mt-8 flex justify-center">
          <a
            href="https://nextjs.org/docs"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2.5 rounded-xl bg-white text-slate-950 text-xs font-semibold shadow-md hover:bg-slate-200 transition-all active:scale-95 cursor-pointer"
          >
            Read Next.js Docs
          </a>
        </div>

      </div>
    </main>
  );
}
