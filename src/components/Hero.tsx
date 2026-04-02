import TypingHeading from "../shared/TypingHeading";
import HeroInsightCard from "./hero/HeroInsightCard";

export default function Hero() {
  return (
    <section className="section-shell relative min-h-[80vh] overflow-hidden sm:min-h-[85vh] lg:min-h-[90vh]">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        poster="/hero-poster.jpg"
      >
        <source src="/hero.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black/35" aria-hidden="true" />
      <div className="relative z-10 mx-auto w-full max-w-6xl px-5 sm:px-6 lg:px-8">
        <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-7 text-white lg:pr-6">
            <p className="section-kicker text-white/80">CAREERKICK NEET ADVISOR</p>
            <TypingHeading
              staticText="Your personal NEET roadmap,"
              words={[
                "built for top ranks.",
                "designed for consistency.",
                "powered by data.",
              ]}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight text-white"
              staticTextClass="text-white/80"
              dynamicTextClass="text-white"
              cursorClass="text-white"
              typingSpeed={60}
              deletingSpeed={30}
              delayBetweenWords={1000}
            />
            <p className="max-w-xl text-base text-white/80 sm:text-lg lg:text-xl leading-relaxed">
              Personalized study plans, smart analytics, and expert guidance to
              keep your prep focused, consistent, and confident.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <button className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-black/30 transition hover:translate-y-[-1px] hover:shadow-xl">
                Start your plan
              </button>
              <button className="rounded-full border border-white/40 bg-transparent px-6 py-3 text-sm font-semibold text-white/80 transition hover:border-white hover:text-white">
                View success stories
              </button>
            </div>
            <div className="flex flex-wrap gap-3 text-[0.65rem] uppercase tracking-[0.22em] text-white/70">
              <span className="rounded-full border border-white/30 px-4 py-2">
                1:1 Mentors
              </span>
              <span className="rounded-full border border-white/30 px-4 py-2">
                Daily Targets
              </span>
              <span className="rounded-full border border-white/30 px-4 py-2">
                Mock Insights
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
