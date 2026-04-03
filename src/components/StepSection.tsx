import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

type ProcessStep = {
  id: number;
  step: string;
  title: string;
  desc: string;
  icon: string;
};

const PROCESS_STEPS: ProcessStep[] = [
  {
    id: 1,
    step: "01",
    title: "Inquiry & Registration",
    desc: "Start your journey by reaching out and completing the registration form to get onboarded into our counselling system.",
    icon: "📋",
  },
  {
    id: 2,
    step: "02",
    title: "Profile Data Collection",
    desc: "We gather all academic records, entrance scores, preferences, and personal details to build a comprehensive student profile.",
    icon: "🗂️",
  },
  {
    id: 3,
    step: "03",
    title: "Profile Review & Scoring",
    desc: "Our experts analyse and score your profile based on eligibility, marks, and target criteria to prioritise the best options.",
    icon: "🔍",
  },
  {
    id: 4,
    step: "04",
    title: "Paid Counselling Payment",
    desc: "Unlock personalised 1-on-1 expert counselling sessions by completing the secure counselling fee payment.",
    icon: "💳",
  },
  {
    id: 5,
    step: "05",
    title: "Profile Shortlisting",
    desc: "Based on your scored profile, we shortlist the most suitable programmes and institutions that align with your goals.",
    icon: "✅",
  },
  {
    id: 6,
    step: "06",
    title: "College / Portal Shortlisting",
    desc: "We identify and shortlist the relevant admission portals and colleges to ensure no opportunity is missed.",
    icon: "🏛️",
  },
  {
    id: 7,
    step: "07",
    title: "Form Filling",
    desc: "Our team assists in accurately filling out application forms across all shortlisted institutions and portals.",
    icon: "✍️",
  },
  {
    id: 8,
    step: "08",
    title: "Choice Filling",
    desc: "Strategic choice filling with priority ordering is done to maximise your chances of securing the best seat.",
    icon: "🎯",
  },
  {
    id: 9,
    step: "09",
    title: "College Admission",
    desc: "We guide you through the final admission steps — document verification, fee payment, and confirmation of your seat.",
    icon: "🎓",
  },
];

const StepSection = () => {
  const targetRef = useRef<HTMLElement | null>(null);
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [scrollRange, setScrollRange] = useState(0);

  useEffect(() => {
    const calculateRange = () => {
      if (scrollRef.current) {
        setScrollRange(scrollRef.current.scrollWidth - window.innerWidth);
      }
    };
    calculateRange();
    window.addEventListener("resize", calculateRange);
    return () => window.removeEventListener("resize", calculateRange);
  }, []);

  const { scrollYProgress } = useScroll({ target: targetRef });
  const x = useTransform(scrollYProgress, [0, 1], [0, -scrollRange]);
  const carX = useTransform(scrollYProgress, [0, 1], ["0vw", "90vw"]);
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <section ref={targetRef} className="relative h-[600vh] bg-white font-sans">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <div className="flex flex-col w-full">
          {/* Section Header */}
          <div className="px-6 md:px-12 mb-12">
            <p className="text-[10px] font-mono text-[#56b016] tracking-widest uppercase mb-3">
              How It Works
            </p>
            <h2 className="text-5xl md:text-8xl font-black text-black/10 uppercase tracking-tighter italic mb-10">
              Process<span className="text-[#56b016] opacity-100">.</span>
            </h2>
          </div>

          <div className="relative">
            {/* Moving Car */}
            <motion.div
              style={{ x: carX }}
              className="absolute -top-16 z-30 pointer-events-none"
            >
              <div className="relative w-32 h-20 md:w-48">
                <img
                  src="https://res.cloudinary.com/dmhpenz2y/image/upload/v1767008059/red2_v4spn8.png"
                  alt="car"
                  className="w-full h-auto object-contain drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)]"
                />
                <div className="absolute top-1/2 -right-2 w-8 h-4 bg-[#56b016]/30 blur-xl rounded-full animate-pulse" />
              </div>
            </motion.div>

            {/* Progress Track */}
            <div className="absolute top-0 left-0 w-full h-px bg-[#56b016]/20" />
            <motion.div
              style={{ scaleX, transformOrigin: "left" }}
              className="absolute top-0 left-0 w-full h-0.5 bg-[#56b016] shadow-[0_0_20px_rgba(86,176,22,0.65)]"
            />

            {/* Horizontal Scroll Content */}
            <motion.div
              ref={scrollRef}
              style={{ x }}
              className="flex gap-8 px-6 md:px-12 pt-20"
            >
              {PROCESS_STEPS.map((step, index) => (
                <ProcessCard key={step.id} step={step} index={index} />
              ))}

              {/* End buffer */}
              <div className="shrink-0 w-75 flex items-center">
                <span className="text-zinc-800 font-black text-4xl md:text-7xl italic whitespace-nowrap select-none">
                  ALL
                  <br />
                  <span className="text-[#56b016]/60">DONE.</span>
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

type ProcessCardProps = {
  step: ProcessStep;
  index: number;
};

const ProcessCard = ({ step, index }: ProcessCardProps) => {
  const isEven = index % 2 === 0;

  return (
    <div className={`relative shrink-0 w-60 md:w-80 ${isEven ? "mt-0" : "mt-10"}`}>
      {/* Timeline dot */}
      <div className="absolute -top-21 left-0 w-3 h-3 bg-[#56b016] rounded-full shadow-[0_0_10px_rgba(86,176,22,0.65)]" />

      {/* Step label */}
      <span className="block text-[10px] font-mono text-[#56b016] mb-3 tracking-widest uppercase">
        Step {step.step}
      </span>

      <div className="p-5 md:p-7 bg-[#56b016] border border-[#56b016]/80 rounded-2xl backdrop-blur-md hover:bg-[#4b9914] hover:border-[#4b9914] transition-all duration-500 group shadow-lg shadow-[#56b016]/20">
        {/* Icon */}
        <div className="w-12 h-12 rounded-xl bg-white/20 border border-white/25 flex items-center justify-center text-2xl mb-5 group-hover:bg-white/25 transition-all duration-300">
          {step.icon}
        </div>

        {/* Title + watermark number */}
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-base md:text-xl font-bold text-white italic leading-tight pr-2">
            {step.title}
          </h3>
          <span className="text-white/40 font-black text-3xl md:text-4xl italic leading-none select-none shrink-0 group-hover:text-white/55 transition-colors duration-500">
            {step.step}
          </span>
        </div>

        <p className="text-white/90 text-xs md:text-sm leading-relaxed">
          {step.desc}
        </p>

        {/* Hover accent line */}
        <div className="mt-5 h-px w-0 bg-white/75 group-hover:w-full transition-all duration-700 ease-out" />
      </div>
    </div>
  );
};

export default StepSection;
