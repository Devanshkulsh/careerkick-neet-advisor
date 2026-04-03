import React from "react";
import type { LucideProps } from "lucide-react";
import { Phone, Mail, MapPin, Clock, User, Send, Globe } from "lucide-react";
import { motion } from "motion/react";

export default function ContactSection() {
  return (
    <section className="relative w-full overflow-hidden bg-white px-4 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl space-y-10 sm:space-y-12">
        <div className="text-center">
          <p className="text-xs font-medium uppercase tracking-[0.4em] text-[#56b016] sm:text-sm">
            Contact
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-black sm:mt-4 sm:text-5xl">
            Let's build your counselling plan together
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-base text-slate-600 sm:mt-4 sm:text-lg">
            Speak to an advisor, request a callback, or send us a message.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 items-stretch perspective-[1500px] lg:gap-10">
          
          {/* LEFT PANEL - CONTACT INFO */}
          <div className="rounded-3xl border border-slate-100 bg-white p-2 shadow-3xl shadow-indigo-950/5 transition-all duration-500">
            <div className="rounded-t-[20px] bg-indigo-900 px-6 py-5 text-center text-lg font-bold tracking-tight text-white sm:px-8 sm:py-6 sm:text-xl">
              Get In Touch With Us Now!
            </div>

            <div className="grid gap-3 rounded-b-[20px] bg-slate-50 p-3 sm:gap-4">
              <ContactCard
                icon={<Phone size={24} />}
                title="Phone"
                link="tel:+917396062116"
                linkText="+91 7396062116"
              />

              <ContactCard
                icon={<Mail size={24} />}
                title="Email"
                link="mailto:info@careerkick.in"
                linkText="info@careerkick.in"
              />

              <ContactCard
                icon={<MapPin size={24} />}
                title="Location"
                link="https://maps.app.goo.gl/LoJTZNfKucYpX2kLA"
                linkText="2nd Floor, AA-007 Golf Link-1, Greater Noida"
                isAddress
              />

              <ContactCard
                icon={<Globe size={24} />}
                title="Website"
                link="https://careerkick.in"
                linkText="careerkick.in"
              />
            </div>
          </div>

          {/* RIGHT PANEL - FORM */}
          <div className="rounded-3xl border border-slate-100 bg-white shadow-3xl shadow-indigo-950/5 transition-all duration-500">
            <div className="rounded-t-3xl bg-indigo-900 px-6 py-5 text-center text-lg font-bold tracking-tight text-white sm:px-8 sm:py-6 sm:text-xl">
              Contact Us
            </div>
            <form className="space-y-5 p-6 sm:space-y-6 sm:p-8 lg:p-10">
              <div className="rounded-2xl border border-slate-100 bg-slate-50/70 p-4 text-center text-sm text-slate-600">
                Share a few details and our team will reach out quickly.
              </div>
              <div className="grid gap-4 sm:grid-cols-2 sm:gap-5">
                <Input icon={<User size={18} />} placeholder="First Name *" />
                <Input icon={<User size={18} />} placeholder="Last Name" />
              </div>
              <div className="grid gap-4 sm:grid-cols-2 sm:gap-5">
                <Input icon={<Phone size={18} />} placeholder="Mobile No *" />
                <Input icon={<Mail size={18} />} placeholder="Email ID *" />
              </div>
              <textarea
                placeholder="Message"
                className="min-h-35 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700 outline-none shadow-inner transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 sm:px-5 sm:py-4"
                rows={5}
              />
              <div className="text-center">
                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit" 
                  className="inline-flex items-center gap-2.5 rounded-full bg-indigo-900 px-8 py-3.5 text-base font-semibold text-white shadow-xl shadow-indigo-900/20 transition-all duration-300 hover:bg-indigo-950 hover:shadow-indigo-900/30 sm:px-10 sm:py-4"
                >
                  Submit Application <Send size={18} />
                </motion.button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

interface ContactCardProps {
  icon: React.ReactElement<LucideProps>;
  title: string;
  link: string;
  linkText: string;
  isAddress?: boolean;
}

function ContactCard({ icon, title, link, linkText, isAddress = false }: ContactCardProps) {
  return (
    <div className="group flex flex-col items-center gap-4 rounded-xl border border-slate-100 bg-white p-5 text-center shadow-sm sm:flex-row sm:items-center sm:gap-5 sm:p-6 sm:text-left transition-all duration-300">
      <span className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-indigo-100 bg-indigo-50 text-indigo-900 shadow-inner sm:h-14 sm:w-14">
        <motion.div whileHover={{ scale: 1.15 }} transition={{ duration: 0.25 }}>
          {React.cloneElement(icon, { strokeWidth: 1.5 })}
        </motion.div>
      </span>
      <div>
        <p className="text-xs uppercase tracking-[0.25em] text-slate-500 font-medium">{title}</p>
        <a href={link} className={`mt-1.5 inline-flex font-semibold text-indigo-950 transition hover:text-indigo-700 ${isAddress ? "text-sm text-slate-700 leading-relaxed" : "text-base"}`}>
          {linkText}
        </a>
      </div>
    </div>
  );
}

function Input({ icon, placeholder }: { icon: React.ReactNode; placeholder: string }) {
  return (
    <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 shadow-inner transition focus-within:border-indigo-400 focus-within:ring-4 focus-within:ring-indigo-100 sm:px-5 sm:py-4">
      <span className="text-slate-400">{icon}</span>
      <input type="text" placeholder={placeholder} className="w-full bg-transparent outline-none placeholder:text-slate-400" />
    </div>
  );
}
