import TypingHeading from "../shared/TypingHeading";

export default function Hero() {
  return (
    <section className="section-shell gradient-mesh">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-7 lg:pr-6">
            <p className="section-kicker text-glow">CAREERKICK NEET ADVISOR</p>
            <TypingHeading
              staticText="Your personal NEET roadmap,"
              words={[
                "built for top ranks.",
                "designed for consistency.",
                "powered by data.",
              ]}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight text-foreground"
              staticTextClass="text-foreground/80"
              dynamicTextClass="text-foreground"
              cursorClass="text-primary"
              typingSpeed={60}
              deletingSpeed={30}
              delayBetweenWords={1000}
            />
            <p className="max-w-xl text-base text-muted-foreground sm:text-lg lg:text-xl leading-relaxed">
              Personalized study plans, smart analytics, and expert guidance to
              keep your prep focused, consistent, and confident.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <button className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-black/30 transition hover:translate-y-[-1px] hover:shadow-xl">
                Start your plan
              </button>
              <button className="rounded-full border border-border bg-transparent px-6 py-3 text-sm font-semibold text-foreground/80 transition hover:border-primary hover:text-foreground">
                View success stories
              </button>
            </div>
            <div className="flex flex-wrap gap-3 text-[0.65rem] uppercase tracking-[0.22em] text-muted-foreground">
              <span className="rounded-full border border-border px-4 py-2">
                1:1 Mentors
              </span>
              <span className="rounded-full border border-border px-4 py-2">
                Daily Targets
              </span>
              <span className="rounded-full border border-border px-4 py-2">
                Mock Insights
              </span>
            </div>
          </div>

          <div className="relative lg:pl-6">
            <div className="noise-overlay absolute inset-0 rounded-3xl" />
            <div className="glass neon-glow-strong relative overflow-hidden rounded-3xl border border-border p-6 sm:p-8">
              <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl bg-black/40">
                <img
                  className="h-full w-full object-cover"
                  src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=1200&q=80"
                  alt="Student studying with notebooks and laptop"
                  loading="lazy"
                />
              </div>
              <div className="mt-6 flex items-center justify-between text-sm text-muted-foreground">
                <span>Weekly focus: Biology</span>
                <span className="text-primary">+12% accuracy</span>
              </div>
            </div>
            <div className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full border border-primary/40 bg-primary/10 blur-[1px]" />
          </div>
        </div>
      </div>
    </section>
  );
}
