"use client";

import { useState } from "react";

type Pricing = {
  title: string;
  description: string;
  price: string;
  image: string;
  highlight?: boolean;
};

const pricingData: Pricing[] = [
  {
    title: "Ayush Counselling",
    description: "Govt + Private Colleges",
    price: "₹25,000",
    image: "/pricing/ayush.webp",
  },
  {
    title: "MBBS Counselling (Govt College)",
    description: "Complete admission support",
    price: "₹30,000",
    image: "/pricing/mbbs_govt.webp",
    highlight: true,
  },
  {
    title: "MBBS Counselling (Private College)",
    description: "Private college admission guidance",
    price: "₹50,000",
    image: "/pricing/mbbs_private.webp",
  },
  {
    title: "BDS / BSc Nursing / Veterinary / BPT",
    description: "All-inclusive counselling support",
    price: "₹20,000",
    image: "/pricing/bds.webp",
  },
];

const CONTACT_NUMBER = "917396062116";

export default function PricingSection() {
  const [openMenuIndex, setOpenMenuIndex] = useState<number | null>(null);

  const handleWhatsApp = (item: Pricing) => {
    const message = `Hello, I am interested in the ${item.title} plan priced at ${item.price}. Could you please provide more details?`;
    const encodedMessage = encodeURIComponent(message);
    window.open(
      `https://wa.me/${CONTACT_NUMBER}?text=${encodedMessage}`,
      "_blank",
    );
    setOpenMenuIndex(null);
  };

  const handleCall = () => {
    window.location.href = `tel:+${CONTACT_NUMBER}`;
    setOpenMenuIndex(null);
  };

  return (
    <section className="bg-white py-20 text-black">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-sm uppercase tracking-widest text-[#56b016] mb-3">
            Paid Counselling
          </p>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            Designed for Medical & Allied Courses
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {pricingData.map((item, i) => (
            <div
              key={i}
              className={`relative rounded-2xl border transition-all duration-300 ${
                item.highlight
                  ? "border-[#56b016] bg-white scale-105 shadow-[0_20px_60px_rgba(86,176,22,0.12)]"
                  : "border-[#56b016]/20 bg-white"
              } overflow-hidden flex flex-col justify-between`}
            >
              <div className="relative w-full h-75 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover object-center scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/30 via-black/10 to-transparent" />

                {item.highlight && (
                  <span className="absolute top-3 right-3 rounded-full bg-[#56b016] px-3 py-1 text-xs text-white z-10">
                    Most Popular
                  </span>
                )}
              </div>

              <div className="p-6 flex flex-col justify-between h-full">
                {/* Title */}
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>

                {/* Description */}
                <p className="mb-6 text-sm text-black/70">{item.description}</p>

                {/* Price */}
                <div className="text-3xl font-bold text-[#56b016] mb-6">
                  {item.price}
                </div>

                <div className="relative mt-auto w-full">
                  {/* Popup Menu */}
                  {openMenuIndex === i && (
                    <div className="absolute bottom-full mb-2 left-0 right-0 bg-white border border-gray-200 rounded-lg shadow-xl overflow-hidden z-20 flex flex-col animate-in fade-in zoom-in duration-200">
                      <button
                        onClick={handleCall}
                        className="flex items-center justify-center gap-2 py-3 px-4 text-sm font-medium text-gray-700 hover:bg-gray-50 border-b border-gray-100 transition-colors"
                      >
                        📞 Call Now
                      </button>
                      <button
                        onClick={() => handleWhatsApp(item)}
                        className="flex items-center justify-center gap-2 py-3 px-4 text-sm font-medium text-[#25D366] hover:bg-gray-50 transition-colors"
                      >
                        💬 WhatsApp
                      </button>
                    </div>
                  )}

                  <button
                    onClick={() =>
                      setOpenMenuIndex(openMenuIndex === i ? null : i)
                    }
                    className={`w-full py-2 rounded-lg text-sm font-medium transition ${
                      item.highlight
                        ? "bg-[#56b016] text-white hover:bg-[#4a9613]"
                        : "border border-[#56b016]/25 bg-[#56b016]/8 text-[#56b016] hover:bg-[#56b016]/14"
                    }`}
                  >
                    Get Guidanc
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
