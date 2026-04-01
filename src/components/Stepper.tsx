import { useState } from 'react';

type Step = {
  id: number;
  title: string;
  description: string;
};

const steps: Step[] = [
  { id: 1, title: 'Inquiry & Registration', description: 'Provide basic details to express interest and register your profile.' },
  { id: 2, title: 'Profile Data Collection', description: 'Submit all necessary academic and personal data required for the process.' },
  { id: 3, title: 'Profile Review & Scoring', description: 'Our team reviews your data and assigns a score to gauge admission potential.' },
  { id: 4, title: 'Payment', description: 'Complete the payment process to officially activate your account and access services.' },
  { id: 5, title: 'Profile Processing', description: 'We finalize your profile for the shortlisting phase based on accuracy.' },
  { id: 6, title: 'College/Portal Shortlisting', description: 'Explore and shortlist colleges or portals based on your score and preferences.' },
  { id: 7, title: 'Application Filling', description: 'Begin filling out applications for the shortlisted colleges with our assistance.' },
  { id: 8, title: 'Choice Filling', description: 'Carefully make choices for college options based on available preferences.' },
  { id: 9, title: 'College Admission', description: 'Navigate the final steps towards securing admission to your desired college.' },
];

function CheckIcon() {
  return (
    <svg
      className="h-5 w-5 text-white"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M20 6L9 17L4 12"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg
      className="h-6 w-6 text-white"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M22 16.92V20C22 20.55 21.55 21 21 21C11.61 21 4 13.39 4 4C4 3.45 4.45 3 5 3H8.09C8.57 3 8.98 3.34 9.07 3.81L9.98 8.37C10.06 8.78 9.92 9.2 9.61 9.48L7.74 11.15C8.91 13.57 10.88 15.54 13.3 16.71L14.97 14.84C15.25 14.53 15.67 14.39 16.08 14.47L20.64 15.38C21.11 15.47 21.45 15.88 21.45 16.36L22 16.92Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MessageIcon() {
  return (
    <svg
      className="h-8 w-8 text-white"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M21 11.5C21 15.64 16.97 19 12 19C10.74 19 9.54 18.79 8.45 18.41L4 20L5.35 16.59C4.5 15.22 4 13.43 4 11.5C4 7.36 8.03 4 13 4C17.97 4 21 7.36 21 11.5Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

type CurvedArrowProps = {
  index: number;
};

function CurvedArrow({ index }: CurvedArrowProps) {
  return (
    <div className="absolute top-6 -right-16 hidden w-16 lg:block">
      <svg width="60" height="30" viewBox="0 0 60 30" fill="none">
        <path
          d="M5 25 C 15 5, 45 5, 55 25"
          stroke="black"
          strokeWidth="2"
          strokeDasharray="4 4"
          strokeLinecap="round"
          style={{
            strokeDashoffset: 0,
            animation: 'drawDash 1s ease forwards',
            animationDelay: `${index * 0.2}s`,
          }}
        />
        <path
          d="M50 22 L55 25 L51 29"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </svg>
      <style>{`
        @keyframes drawDash {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
      `}</style>
    </div>
  );
}

type StepComponentProps = {
  step: Step;
  isActive: boolean;
  isComplete: boolean;
  index: number;
};

function StepComponent({ step, isActive, isComplete, index }: StepComponentProps) {
  return (
    <div
      className={`relative flex flex-col items-center gap-4 transition-all duration-500 ${
        isComplete ? 'opacity-60 grayscale-[0.5]' : 'opacity-100'
      }`}
    >
      <div
        className={`relative flex h-25 w-25 items-center justify-center rounded-full border-2 border-black shadow-[4px_2px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 ${
          isActive || isComplete ? 'bg-[#FDE047]' : 'bg-white'
        } ${
          isActive && !isComplete ? 'animate-bounce' : ''
        }`}
        style={{
          animationDuration: isActive ? '1.5s' : undefined,
        }}
      >
        {isComplete ? (
          <div className="rounded-full bg-black p-1">
            <CheckIcon />
          </div>
        ) : (
          <span className="text-4xl font-black italic text-black">{step.id}</span>
        )}
      </div>

      <div className="max-w-40 text-center">
        <h3 className="text-sm font-black uppercase leading-tight tracking-tighter text-zinc-900">
          {step.title}
        </h3>
      </div>

      {index % 5 !== 4 && index < steps.length - 1 && <CurvedArrow index={index} />}
    </div>
  );
}

export default function Stepper() {
  const [currentStepId, setCurrentStepId] = useState(1);
  const currentStepData = steps.find((s) => s.id === currentStepId);

  return (
    <div className="min-h-screen bg-[#fafafa] pb-20 font-sans text-zinc-900">
      <header className=" top-0 z-50 border-b-2 border-black bg-white/80 px-8 py-4 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between md:flex-row">
          <h1 className="relative inline-block text-2xl font-black uppercase italic">
           Student Counselling Purchase & Service Flow 
            <div className="absolute -bottom-1 left-0 h-2 w-full -z-10 bg-[#FDE047]" />
          </h1>
          <p className="text-sm font-bold uppercase italic tracking-widest text-zinc-500">
            Shaping, Sprint, Iterations, Release
          </p>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-6 pt-12">
        <div className="relative mb-20 grid grid-cols-2 gap-8 md:grid-cols-5">
          {steps.slice(0, 5).map((step, i) => (
            <StepComponent
              key={step.id}
              step={step}
              index={i}
              isActive={currentStepId === step.id}
              isComplete={currentStepId > step.id}
            />
          ))}
        </div>

        <section className="mx-auto mb-20 max-w-4xl rounded-2xl border-4 border-black bg-white p-8 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] md:p-12">
          <div className="flex flex-col items-center gap-8 md:flex-row">
            <div className="text-7xl font-black italic text-[#FDE047] drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]">
              0{currentStepId}
            </div>
            <div className="flex-1">
              <h2 className="mb-4 text-3xl font-black uppercase italic">{currentStepData?.title}</h2>
              <p className="mb-8 text-lg font-medium leading-relaxed text-zinc-600">
                {currentStepData?.description}
              </p>
              <button
                onClick={() => setCurrentStepId((prev) => Math.min(prev + 1, 9))}
                disabled={currentStepId === 9}
                className="bg-black px-8 py-4 font-bold uppercase italic text-white transition-all hover:bg-zinc-800 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {currentStepId === 9 ? 'Journey Complete' : 'Advance to Next Phase ->'}
              </button>
            </div>
          </div>
        </section>

        <div className="mb-20 grid grid-cols-2 gap-8 md:grid-cols-4">
          {steps.slice(5).map((step, i) => (
            <StepComponent
              key={step.id}
              step={step}
              index={i + 5}
              isActive={currentStepId === step.id}
              isComplete={currentStepId > step.id}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
