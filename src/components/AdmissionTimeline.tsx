"use client";

import { useEffect, useRef, useState } from "react";
import clsx from "clsx";

type Step = {
  id: number;
  tag: string;
  title: string;
  highlight: string;
  description: string;
  points: string[];
  image: string;
};

const steps: Step[] = [
  {
    id: 1,
    tag: "STEP 1",
    title: "Inquiry &",
    highlight: "Registration",
    description:
      "Start your journey by creating your profile and submitting basic details.",
    points: [
      "Student visits Careerkick portal/website or contacts office",
      "Submits basic details: Name, Contact, Email, City, Exam Type (JEE/NEET/CUET/State)",
      "Provides entrance exam rank/percentile or expected score",
      "Creates account on student portal with login credentials",
      "Receives welcome email with next steps and timeline",
    ],

    image: "/admission-timeline/inquiry_and_registration.webp",
  },
  {
    id: 2,
    tag: "STEP 2",
    title: "Profile Data",
    highlight: "Collection",
    description:
      "Student completes comprehensive profile form (online/offline)",
    points: [
      "Academic Records: 10th marks, 12th marks, UG marks (if applicable)",
      "Entrance Exam Scores: JEE Main/Advanced, NEET, CUET, AYUSH, State exams",
      "Extracurricular Activities: Sports, cultural, leadership roles",
      "Personal Preferences: Location, budget, course interests, career goals",
      "Category: General/OBC/SC/ST/EWS, Domicile, Gender",
      "Optional: Psychometric assessment to identify aptitude and interests",
      "Upload documents: Marksheets, scorecards, certificates (PDF format)",
    ],
    image: "/admission-timeline/profile_data_collection.webp",
  },
  {
    id: 3,
    tag: "STEP 3",
    title: "Profile Review &",
    highlight: "Scoring",
    description:
      "Get on a call with experts to map your journey and expectations.",
    points: [
      "Counselor reviews submitted profile within 5-10 business days",
      "Profile Scoring Formula (Total 100 points)",
      "Academic Performance: 40 points (10th/12th aggregate)",
      "Entrance Exam Score: 30 points (percentile/rank conversion)",
      "Profile Strength: 30 points (extracurriculars, category, preferences)",
      "Generate preliminary assessment report with strengths and improvement areas",
      "Student receives email notification when review is complete",
    ],
    image: "/admission-timeline/profile_review_scoring.webp",
  },
  {
    id: 4,
    tag: "STEP 4",
    title: "Paid Counselling",
    highlight: "Payment",
    description: "Fee Structure as product service catalogue pricing",
    points: [],
    image: "/admission-timeline/paid_counselling_payment.webp",
  },
  {
    id: 5,
    tag: "STEP 5",
    title: "Profile",
    highlight: "Shortlisting",
    description:
      "Start developing core skills required for success in your journey.",
    points: [
      "Counselor analyzes profile score against historical admission data",
      "Rank student profile against similar candidates from previous years",
      "Identify realistic, moderate, and ambitious college targets",
      "Generate personalized shortlist report showing: Admission probability (High/Medium/Low) for each institution",
      "Previous year cutoffs and trends",
      "Seat availability by category and quota",
      "Share report via portal dashboard and email",
    ],
    image: "/admission-timeline/profile_shortlisting.webp",
  },
  {
    id: 6,
    tag: "STEP 6",
    title: "College/Portal/University",
    highlight: "Shortlisting",
    description: "Based on profile score, recommend 10-20 suitable options:",
    points: [
      "NITs, IIITs, State Engineering Colleges (for JEE)",
      "AIIMS, Government Medical Colleges, Private Medical (for NEET/AYUSH)",
      "Central Universities, State Universities (for CUET)",
      "Filter by: Student location preference, budget constraints, course availability",
      "JoSAA (Joint Seat Allocation Authority) for IITs/NITs/IIITs",
      "MCC (Medical Counselling Committee) for NEET",
      "CSAB (Central Seat Allocation Board)",
      "AYUSH (For Ayush colleges)",
      "State counselling portals (UP, Maharashtra, etc.)",
      "Share college comparison matrix with fees, placements, facilities",
    ],
    image: "/admission-timeline/college_shortlisting.webp",
  },
  {
    id: 7,
    tag: "STEP 7",
    title: "Form",
    highlight: "Filling",
    description:
      "Assist student in registering on official counselling portals:",
    points: [
      "Create login credentials on MCC/JoSAA/State portals",
      "Fill registration form with accurate personal and academic details",
      "Upload documents as per portal requirements (size/format)",
      "Pay registration fees and security fees on official portals.",
      "Verify all entered information before final submission",
      "Download registration confirmation and save credentials securely",
      "Track important dates: Choice filling start, choice locking deadline, rounds",
    ],
    image: "/admission-timeline/form_filling.webp",
  },
  {
    id: 8,
    tag: "STEP 8",
    title: "Choice",
    highlight: "Filling",
    description:
      "Guide student in filling choices (college + course combinations):",
    points: [
      "Enter choices in order of preference (most preferred first)",
      "Typical 50-100+ choices allowed depending on portal",
      "Strategy: Mix dream colleges, realistic options, and safe choices",
      "Review choice order with counselor before locking",
      "Lock choices before deadline (changes not allowed after locking)",
      "Save choice list PDF from portal for records",
      "Monitor seat allocation rounds (usually 3-6 rounds)",
    ],
    image: "/admission-timeline/choice_filling.webp",
  },
  {
    id: 9,
    tag: "STEP 9",
    title: "College",
    highlight: "Admission",
    description: "Seat Allotment Results",
    points: [
      "Check allotment results on portal (Round 1, 2, 3...)",
      "Download provisional allotment letter immediately",
      "If seat allotted:",
      "Accept/Freeze/Float decision within 24-48 hours",
      "Pay acceptance fee online.",
      "Download fee receipt and seat confirmation letter",
      "Document Verification:",
      "Attend verification at allocated college (online/offline)",
      "Submit: 10th/12th certificates, scorecard, category certificate, ID proof",
      "Final Admission:",
      "Report to college for final admission formalities",
    ],
    image: "/admission-timeline/college_admission.webp",
  },
  {
    id: 10,
    tag: "STEP 10",
    title: "Post-Admission Support by",
    highlight: "Careerkick",
    description: "",
    points: [
      "Track student admission status on portal dashboard",
      "Service completion confirmation email sent",
    ],
    image: "/admission-timeline/future.webp",
  },
];

export default function AdmissionTimeline() {
  const [active, setActive] = useState(0);
  const refs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    refs.current.forEach((ref, index) => {
      if (!ref) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActive(index);
          }
        },
        {
          rootMargin: "-40% 0px -40% 0px",
          threshold: 0.2,
        },
      );

      observer.observe(ref);
      observers.push(observer);
    });

    return () => observers.forEach((obs) => obs.disconnect());
  }, []);

  return (
    <section className="bg-white py-16 text-black sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-12 text-center sm:mb-14">
          <p className="text-xs font-medium uppercase tracking-[0.4em] text-[#56b016] sm:text-sm">
            Admission Timeline
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-black sm:mt-4 sm:text-5xl">
            Your Admission Journey, Step by Step
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-base text-slate-600 sm:mt-4 sm:text-lg">
            Track every stage from inquiry and profile review to final admission
            and post-admission support.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(320px,0.9fr)] lg:gap-16">
          {/* LEFT CONTENT */}
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute bottom-0 left-4 top-0 w-0.5 bg-[#56b016]/25 sm:left-5" />

            <div className="space-y-14 sm:space-y-18 lg:space-y-24">
              {steps.map((step, index) => (
                <div
                  key={step.id}
                  ref={(el) => {
                    refs.current[index] = el;
                  }}
                  className="relative pl-12 sm:pl-16"
                >
                  {/* Circle */}
                  <div
                    className={clsx(
                      "absolute left-0 top-1 flex h-8 w-8 items-center justify-center rounded-full border transition-all sm:h-10 sm:w-10",
                      active === index
                        ? "border-[#56b016] bg-[#56b016] text-white shadow-[0_0_0_6px_rgba(86,176,22,0.16)]"
                        : "border-[#56b016]/35 bg-white text-[#56b016]",
                    )}
                  >
                    <span className="text-xs">{step.id}</span>
                  </div>

                  {/* Content */}
                  <div
                    className={clsx(
                      "max-w-none text-left transition-all duration-500",
                      active === index
                        ? "opacity-100 translate-y-0"
                        : "opacity-55 translate-y-6",
                    )}
                  >
                    {/* Tag */}
                    <span className="rounded-full bg-[#56b016]/10 px-3 py-1 text-xs uppercase tracking-wide text-[#56b016]">
                      {step.tag}
                    </span>

                    {/* Title */}
                    <h3 className="mt-4 text-xl font-semibold leading-tight sm:text-2xl md:text-3xl">
                      {step.title}{" "}
                      <span className="text-[#56b016]">{step.highlight}</span>
                    </h3>

                    {/* Description */}
                    <p className="mt-3 max-w-xl text-sm leading-6 text-black/70 sm:text-base">
                      {step.description}
                    </p>

                    {/* Points */}
                    <ul className="mt-5 space-y-3 sm:mt-6">
                      {step.points.map((point, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-3 text-left text-sm leading-6 text-black/75 sm:text-[15px]"
                        >
                          <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-[#56b016]/40 bg-[#56b016]/8 text-xs text-[#56b016]">
                            {i + 1}
                          </span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT STICKY VIDEO */}
          <div className="relative hidden lg:block">
            <div className="top-24 lg:sticky">
              <div className="relative overflow-hidden rounded-xl border border-[#56b016]/20 bg-white shadow-[0_20px_60px_rgba(86,176,22,0.12)]">
                <img
                  src={steps[active].image}
                  alt="step visual"
                  className="h-64 w-full object-cover sm:h-80 lg:h-100"
                />
              </div>

              {/* Optional dynamic caption */}
              <div className="mt-4 text-center text-sm text-black/60 sm:mt-6 lg:text-left">
                Step {active + 1} of {steps.length}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
