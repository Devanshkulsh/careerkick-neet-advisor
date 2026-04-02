"use client";

import { useEffect, useState } from "react";

export default function HeroInsightCard() {
  const [accuracy, setAccuracy] = useState(0);

  // 🔥 count animation
  useEffect(() => {
    let start = 0;
    const end = 12;

    const interval = setInterval(() => {
      start += 1;
      setAccuracy(start);
      if (start >= end) clearInterval(interval);
    }, 80);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative">
      {/* glow bg */}
      <div className="absolute inset-0 rounded-3xl bg-primary/10 blur-2xl opacity-60" />

      <div className="glass neon-glow-strong relative overflow-hidden rounded-3xl border border-border p-6 sm:p-8 backdrop-blur-xl">
        
        {/* Top animated heading */}
        <div className="mb-6 space-y-2">
          <p className="text-xs uppercase tracking-widest text-muted-foreground">
            Weekly Focus
          </p>

          <h3 className="text-xl font-semibold text-foreground animate-fade-in">
            Biology Mastery
          </h3>
        </div>

        {/* Progress bar */}
        <div className="mb-6">
          <div className="h-2 w-full rounded-full bg-white/10 overflow-hidden">
            <div
              className="h-full bg-primary transition-all duration-1000 ease-out"
              style={{ width: `${accuracy * 5}%` }}
            />
          </div>
        </div>

        {/* Stats */}
        <div className="flex items-center justify-between text-sm">
          <div className="space-y-1">
            <p className="text-muted-foreground text-xs">Accuracy</p>
            <p className="text-lg font-semibold text-primary">
              +{accuracy}%
            </p>
          </div>

          <div className="space-y-1 text-right">
            <p className="text-muted-foreground text-xs">Consistency</p>
            <p className="text-lg font-semibold text-foreground">
              High
            </p>
          </div>
        </div>

        {/* Floating badges */}
        <div className="absolute -top-4 -right-4 animate-float rounded-full bg-primary/20 px-3 py-1 text-xs text-primary backdrop-blur">
          AI Optimized
        </div>

        <div className="absolute -bottom-4 -left-4 animate-float-slow rounded-full bg-white/10 px-3 py-1 text-xs text-white backdrop-blur">
          Daily Targets ✔
        </div>
      </div>
    </div>
  );
}