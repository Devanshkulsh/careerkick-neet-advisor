import {ReusableHeading} from '../shared/ReusableHeading';
import { motion } from 'motion/react';

type Step = {
  id: number;
  title: string;
  description: string;
};

const steps: Step[] = [
  {
    id: 1,
    title: "Identifying Student's Aspirations",
    description:
      'By understanding student strengths and interests, our NEET Advisor platform helps identify the right aspiration path clearly.',
  },
  {
    id: 2,
    title: 'Inquiry & Registration',
    description: 'Submit your basic details and begin your counselling journey with us.',
  },
  {
    id: 3,
    title: 'Profile Data Collection',
    description:
      'Provide academic, personal, and preference details for accurate guidance.',
  },
  {
    id: 4,
    title: 'Profile Review & Scoring',
    description:
      'Our team analyzes your data and gives a score to assess admission potential.',
  },
  {
    id: 5,
    title: 'Payment',
    description: 'Complete payment to activate your account and unlock full services.',
  },
  {
    id: 6,
    title: 'Profile Processing',
    description:
      'Your profile is processed and prepared for targeted college shortlisting.',
  },
  {
    id: 7,
    title: 'College/Portal Shortlisting',
    description:
      'Get a shortlist of relevant colleges and counselling portals based on your profile.',
  },
  {
    id: 8,
    title: 'Application & Choice Filling',
    description:
      'Fill applications and final choices with guidance to maximize your chances.',
  },
  {
    id: 9,
    title: 'College Admission',
    description: 'Complete final admission steps and secure your seat with confidence.',
  },
];

function StepCircle({ step }: { step: Step }) {
  return (
    <article className="relative rounded-2xl  px-4 pb-6 pt-6 text-center">
      <div className="mx-auto mb-4 flex h-32.5 w-32.5 items-center justify-center rounded-full border-[7px] border-[#56b016] bg-[#56b016]">
        <motion.div
          className="absolute h-37.5 w-37.5 rounded-full border-[3px] border-dashed border-[#56b016]/60 will-change-transform"
          animate={{ rotate: [0, 360] }}
          transition={{ repeat: Infinity, repeatType: 'loop', duration: 8, ease: 'linear' }}
        />
        <span className="relative text-5xl font-black text-white">{step.id}</span>
      </div>

      <h3 className="mb-2 text-lg font-extrabold leading-snug text-black">{step.title}</h3>
      <p className="mx-auto max-w-60 text-sm leading-relaxed text-black/75">{step.description}</p>
    </article>
  );
}

function DirectionArrow() {
  return (
    <svg
      className="mt-16 h-8 w-12 shrink-0 text-[#56b016]"
      viewBox="0 0 48 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M2 12H40"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeDasharray="6 6"
        strokeLinecap="round"
      />
      <path
        d="M33 5L42 12L33 19"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Stepper() {
  const firstRow = steps.slice(0, 5);
  const secondRow = steps.slice(5);

  return (
    <section className="bg-white px-4 py-10 sm:px-6 lg:px-10">
<ReusableHeading
  title="Our Course Workflow"
  subtitle="Shaping, Sprint, Iterations, Release"
/>
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:hidden">
          {steps.map((step) => (
            <StepCircle key={step.id} step={step} />
          ))}
        </div>

        <div className="hidden lg:block">
          <div className="mb-8 flex items-start justify-center gap-2">
            {firstRow.map((step, index) => (
              <div key={step.id} className="flex items-start gap-2">
                <StepCircle step={step} />
                {index < firstRow.length - 1 && <DirectionArrow />}
              </div>
            ))}
          </div>

          <div className="flex items-start justify-center gap-2">
            {secondRow.map((step, index) => (
              <div key={step.id} className="flex items-start gap-2">
                <StepCircle step={step} />
                {index < secondRow.length - 1 && <DirectionArrow />}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
