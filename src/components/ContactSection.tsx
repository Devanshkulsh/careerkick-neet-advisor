import React from "react";
import type { LucideProps } from "lucide-react";
import { Phone, Mail, MapPin, Clock, User, Send } from "lucide-react";

export default function ContactSection() {
  return (
    <section className="relative w-full overflow-hidden bg-white px-4 py-16 sm:py-20">
      {/* Decorative Background Blob */}
      <div className="pointer-events-none absolute -bottom-32 left-[-10%] h-96 w-96 rounded-full bg-indigo-100 blur-3xl opacity-60" />

      <div className="mx-auto max-w-6xl space-y-10 sm:space-y-12">
        <div className="text-center">
          <p className="text-xs font-medium uppercase tracking-[0.4em] text-indigo-900/70 sm:text-sm">
            Contact
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-indigo-950 sm:mt-4 sm:text-5xl">
            Let's build your counselling plan together
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-base text-slate-600 sm:mt-4 sm:text-lg">
            Speak to an advisor, request a callback, or send us a message. We're
            here to guide you.
          </p>
        </div>

        {/* 3D Container: Adds perspective to the grid */}
        <div className="grid gap-8 md:grid-cols-2 items-stretch perspective-[1500px] lg:gap-10">
          {/* LEFT PANEL - CONTACT INFO */}
          {/* Added transform-style: preserve-3d and hover interactions for 3D float */}
          <div className="rounded-3xl border border-slate-100 bg-white p-2 shadow-3xl shadow-indigo-950/5 transition-all duration-500 transform-3d hover:[-transform:rotateX(2deg)_rotateY(-1deg)_translateY(-10px)] hover:shadow-indigo-950/10">
            {/* Header */}
            <div className="rounded-t-[20px] bg-indigo-900 px-6 py-5 text-center text-lg font-bold tracking-tight text-white sm:px-8 sm:py-6 sm:text-xl transform-[translateZ(20px)]">
              Get In Touch With Us Now!
            </div>

            {/* Content Grid */}
            <div className="grid gap-3 rounded-b-[20px] bg-slate-50 p-3 transform-[translateZ(10px)] sm:gap-4">
              {/* Phone */}
              <ContactCard
                icon={<Phone size={24} />}
                title="Phone"
                link="tel:+919198350984"
                linkText="+91 9198350984"
              />

              {/* Email */}
              <ContactCard
                icon={<Mail size={24} />}
                title="Email"
                link="mailto:info@careerkick.in"
                linkText="info@careerkick.in"
              />

              {/* Location */}
              <ContactCard
                icon={<MapPin size={24} />}
                title="Location"
                link="https://maps.google.com/?q=2nd Floor, AA -007 Golf Link-1 Greater Noida UP, 201306"
                linkText="2nd Floor, AA -007 Golf Link-1 Greater Noida UP, 201306"
                isAddress
              />

              {/* Hours */}
              <div className="flex flex-col items-center gap-4 rounded-xl border border-slate-100 bg-white p-5 text-center shadow-sm shadow-indigo-950/5 sm:flex-row sm:items-center sm:gap-5 sm:p-6 sm:text-left">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-indigo-100 bg-indigo-50 text-indigo-900 shadow-inner sm:h-14 sm:w-14">
                  <Clock size={26} strokeWidth={1.5} />
                </span>
                <div>
                  <p className="text-xs uppercase tracking-[0.25em] text-slate-500 font-medium">
                    Working Hours
                  </p>
                  <p className="mt-1.5 text-base font-semibold text-indigo-950">
                    Monday To Saturday
                  </p>
                  <p className="text-sm text-slate-600">09:00 AM To 06:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT PANEL - FORM */}
          {/* Similar 3D float interactions applied */}
          <div className="rounded-3xl border border-slate-100 bg-white shadow-3xl shadow-indigo-950/5 transition-all duration-500 transform-3d hover:[-transform:rotateX(2deg)_rotateY(1deg)_translateY(-10px)] hover:shadow-indigo-950/10">
            {/* Header */}
            <div className="rounded-t-3xl bg-indigo-900 px-6 py-5 text-center text-lg font-bold tracking-tight text-white sm:px-8 sm:py-6 sm:text-xl transform-[translateZ(20px)]">
              Contact Us
            </div>

            {/* Form */}
            <form className="space-y-5 p-6 sm:space-y-6 sm:p-8 lg:p-10 transform-[translateZ(15px)]">
              {/* Row 1 */}
              <div className="grid gap-4 sm:grid-cols-2 sm:gap-5">
                <Input icon={<User size={18} />} placeholder="First Name *" />
                <Input icon={<User size={18} />} placeholder="Last Name" />
              </div>

              {/* Row 2 */}
              <div className="grid gap-4 sm:grid-cols-2 sm:gap-5">
                <Input icon={<Phone size={18} />} placeholder="Mobile No *" />
                <Input icon={<Mail size={18} />} placeholder="Email ID *" />
              </div>

              {/* Message */}
              <textarea
                placeholder="Message"
                className="min-h-35 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 outline-none shadow-inner transition focus:border-indigo-400 focus:ring-4 focus:ring-indigo-100 sm:min-h-40 sm:px-5 sm:py-4"
                rows={5}
              />

              {/* Submit Button */}
              <div className="text-center transform-[translateZ(10px)]">
                <button
                  type="submit"
                  className="inline-flex items-center gap-2.5 rounded-full bg-indigo-900 px-8 py-3.5 text-base font-semibold text-white shadow-xl shadow-indigo-900/20 transition-all duration-300 hover:bg-indigo-950 hover:shadow-indigo-900/30 hover:-translate-y-1 active:translate-y-0 sm:px-10 sm:py-4"
                >
                  Submit Application <Send size={18} />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

/* Reusable Contact Info Card */
interface ContactCardProps {
  icon: React.ReactElement<LucideProps>;
  title: string;
  link: string;
  linkText: string;
  isAddress?: boolean;
}

function ContactCard({
  icon,
  title,
  link,
  linkText,
  isAddress = false,
}: ContactCardProps) {
  return (
    <div className="flex flex-col items-center gap-4 rounded-xl border border-slate-100 bg-white p-5 text-center shadow-sm shadow-indigo-950/5 sm:flex-row sm:items-center sm:gap-5 sm:p-6 sm:text-left">
      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-indigo-100 bg-indigo-50 text-indigo-900 shadow-inner sm:h-14 sm:w-14">
        {React.cloneElement(icon, { strokeWidth: 1.5 })}
      </span>
      <div>
        <p className="text-xs uppercase tracking-[0.25em] text-slate-500 font-medium">
          {title}
        </p>
        <a
          href={link}
          target={isAddress ? "_blank" : undefined}
          rel={isAddress ? "noreferrer" : undefined}
          className={`mt-1.5 inline-flex font-semibold text-indigo-950 transition hover:text-indigo-700 ${
            isAddress ? "text-sm text-slate-700 leading-relaxed" : "text-base"
          }`}
        >
          {linkText}
        </a>
      </div>
    </div>
  );
}

/* Reusable Input */
function Input({
  icon,
  placeholder,
}: {
  icon: React.ReactNode;
  placeholder: string;
}) {
  return (
    <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 shadow-inner transition focus-within:border-indigo-400 focus-within:ring-4 focus-within:ring-indigo-100 sm:px-5 sm:py-4">
      <span className="text-slate-400">{icon}</span>
      <input
        type="text"
        placeholder={placeholder}
        className="w-full bg-transparent outline-none placeholder:text-slate-400"
      />
    </div>
  );
}
