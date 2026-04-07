import TypingHeading from "../shared/TypingHeading";
import { Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="section-shell relative min-h-[70vh] overflow-hidden flex items-center sm:min-h-[80vh] lg:min-h-screen">
      {/* Video Background */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        poster="/hero-poster.jpg"
      >
        <source
          src="https://res.cloudinary.com/dhlqc0ymy/video/upload/v1775546975/hero4_pvvjbo.mp4"
          type="video/mp4"
        />
      </video>

      {/* Darker Gradient Overlay for better contrast */}
      <div
        className="absolute inset-0 bg-linear-to-b from-black/70 via-black/50 to-black/80 lg:bg-linear-to-r lg:from-black/80 lg:via-black/50 lg:to-transparent"
        aria-hidden="true"
      />

      <div className="relative z-10 w-full max-w-none px-4 sm:px-10 lg:px-20 py-14 sm:py-20 lg:py-0">
        <div className="grid items-center gap-10 lg:gap-12 lg:grid-cols-2">
          <div className="space-y-5 sm:space-y-7 text-white">
            <div className="relative w-full">
              {/* Invisible Placeholder - Optimized leading for mobile wrap */}
              <div
                className="invisible pointer-events-none text-3xl sm:text-5xl lg:text-7xl font-extrabold leading-[1.2] lg:leading-[1.1] tracking-tight"
                aria-hidden="true"
              >
                Stop guessing your NEET prep, start dominating it.
              </div>

              {/* High-Impact Typing Effect - Matches placeholder leading */}
              <div className="absolute top-0 left-0 w-full h-full">
                <TypingHeading
                  staticText="Your NEET success starts with"
                  words={[
                    "smarter guidance.",
                    "Careerkick.",
                    "expert mentorship.",
                    "the right strategy.",
                  ]}
                  className="text-3xl sm:text-5xl lg:text-7xl font-extrabold leading-[1.2] lg:leading-[1.1] tracking-tight text-white"
                  staticTextClass="text-white/90"
                  dynamicTextClass="text-[#56b016]"
                  cursorClass="text-[#56b016]"
                  typingSpeed={50}
                  deletingSpeed={30}
                  delayBetweenWords={1500}
                />
              </div>
            </div>

            {/* Subtext: Adjusted size for mobile readability */}
            <p className="text-sm leading-6 text-white/85 sm:text-base sm:leading-7 lg:text-lg">
              Every mark counts. Every day matters.{" "}
              <span className="text-white font-medium">Careerkick</span> gives
              you expert guidance, a personalised strategy, and the support you
              need to crack your dream college.
            </p>

            {/* New: Engaging Badge - Adjusted padding/text for mobile */}
            <div className="inline-flex max-w-full flex-wrap items-center gap-2 rounded-2xl border border-white/20 bg-white/10 px-3 py-1.5 sm:rounded-full sm:px-4 sm:py-1.5 backdrop-blur-md">
              <Sparkles className="h-3.5 w-3.5 shrink-0 text-yellow-400" />
              <p className="text-[0.62rem] sm:text-[0.65rem] font-bold uppercase tracking-[0.12em] sm:tracking-[0.25em] text-white/90">
                India's Most Trusted Counselling Platform
              </p>
            </div>
          </div>

          {/* Right Side Content */}
          <div className="hidden lg:block">
            <div className="animate-float">{/* <HeroInsightCard /> */}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
