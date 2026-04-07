"use client";

import { useState, useEffect } from "react";

type Achievement = {
  id: number;
  label: string;
  title: string;
  points: string[];
  video: string;
  stats: { label: string; value: number }[];
};

const data: Achievement[] = [
  {
    id: 1,
    label: "Students Guided",
    title: "Students Positively Guided",
    points: [
      "Guided 10 Lakh+ students across India",
      "Trusted by students and parents",
      "Clear career direction after BAMS",
      "Support at every step",
    ],
    video: "https://res.cloudinary.com/dhlqc0ymy/video/upload/v1775547552/student_impact_qll0ja.mp4",
    stats: [{ label: "Students Guided", value: 1000000 }],
  },
  {
    id: 2,
    label: "Counselling Experience",
    title: "Our Counselling Experience",
    points: [
      "Our high Experience makes us the best choice",
      "Talk directly with experts",
      "Get answers to all your doubts",
      "Step-by-step career planning",
    ],
    video: "/achievements/counselling.mp4",
    stats: [{ label: "Years of experience", value: 8 }],
  },
  {
    id: 3,
    label: "Personal Guidance",
    title: "1-to-1 Counselling",
    points: [
      "One-to-one counselling sessions",
      "Talk directly with experts",
      "Get answers to all your doubts",
      "Step-by-step career planning",
    ],
    video: "https://res.cloudinary.com/dhlqc0ymy/video/upload/v1775547551/counselling_uddtho.mp4",
    stats: [{ label: "Counselling One to One", value: 10000 }],
  },
];

function Counter({ value }: { value: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1200;
    const stepTime = Math.max(Math.floor(duration / value), 20);

    const timer = setInterval(() => {
      start += Math.ceil(value / 40);
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [value]);

  return <span>{count}</span>;
}

export default function AchievementsSection() {
  const [active, setActive] = useState(0);

  return (
    <section className="relative overflow-hidden bg-black py-16 text-white sm:py-20 lg:py-24">
      {/* Grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-size-[40px_40px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        {/* Header */}
        <div className="mb-8 text-center sm:mb-10 lg:mb-12">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.4em] text-[#56b016] sm:text-sm">
            ✦ Achievements
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:mt-4 sm:text-5xl">
            Proven Results & <span className="text-[#56b016]">Real Impact</span>
          </h2>
        </div>

        {/* Tabs */}
        <div className="mb-8 flex w-full flex-col gap-2 rounded-2xl bg-[#1a1a1a] p-2 sm:mb-10 sm:w-fit sm:flex-row sm:gap-6 sm:rounded-full sm:px-6 sm:py-3">
          {data.map((item, i) => (
            <button
              key={item.id}
              onClick={() => setActive(i)}
              className={`w-full rounded-full px-3 py-2 text-center text-sm transition sm:w-auto sm:px-0 sm:py-0 ${
                active === i ? "text-[#56b016]" : "text-white/55"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* MOBILE VIDEO */}
        <div className="mb-8 lg:hidden">
          <div className="relative overflow-hidden rounded-xl border border-gray-800">
            <video
              key={data[active].video}
              src={data[active].video}
              autoPlay
              muted
              loop
              className="h-64 w-full object-cover sm:h-80"
            />
          </div>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-2 lg:gap-10">
          {/* LEFT */}
          <div className="rounded-xl border border-gray-800 bg-[#121212] p-5 sm:p-6 lg:p-8">
            <h3 className="mb-4 text-center text-xl font-semibold text-[#56b016] sm:mb-6 sm:text-left">
              {data[active].title}
            </h3>

            <div className="mb-8 grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
              {data[active].points.map((point, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 text-left text-sm leading-6 text-white/90"
                >
                  <span className="mt-0.5 shrink-0 text-[#56b016]">✦</span>
                  <span>{point}</span>
                </div>
              ))}
            </div>

            {/* COUNTERS */}
            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-6">
              {data[active].stats.map((stat, i) => (
                <div
                  key={i}
                  className="rounded-lg border border-gray-800 bg-black/20 px-4 py-4 text-center sm:text-left"
                >
                  <div className="text-2xl font-semibold text-[#56b016]">
                    <Counter value={stat.value} />+
                  </div>
                  <div className="mt-1 text-xs text-white/60">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT VIDEO */}
          <div className="relative hidden overflow-hidden rounded-xl border border-gray-800 lg:block">
            <video
              key={data[active].video}
              src={data[active].video}
              autoPlay
              muted
              loop
              className="h-87.5 w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
