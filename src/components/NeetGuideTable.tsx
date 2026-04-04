import React from "react";
import { Building2, GraduationCap, Landmark, Stethoscope } from "lucide-react";

type Row = {
  icon: React.ReactNode;
  title: string;
  description: string;
  price: string;
};

const data: Row[] = [
  {
    icon: <Stethoscope size={20} />,
    title: "Ayush Counselling ",
    description: "Govt + Private Colleges ",
    price: "₹25,000 ",
  },
  {
    icon: <Landmark size={20} />,
    title: "MBBS Counselling (Govt College)",
    description: "Complete admission support ",
    price: "₹30,000",
  },
  {
    icon: <Building2 size={20} />,
    title: "MBBS Counselling (Private College)",
    description: "Private college admission guidance",
    price: "₹50,000",
  },
  {
    icon: <GraduationCap size={20} />,
    title: "BDS / BSc Nursing / Veterinary / BPT",
    description: "All-inclusive counselling support",
    price: "₹20,000",
  },
];

export default function NeetGuideTable() {
  return (
    <section className="w-full bg-white py-10 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="mb-6 text-center">
          <p className="text-xs font-medium uppercase tracking-[0.4em] text-[#56b016] sm:text-sm">
            Paid Counselling
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-black sm:mt-4 sm:text-5xl">
            designed for Medical & Allied Courses
          </h2>
        </div>

        <div className="-mx-4 px-4 overflow-x-auto">
          <table className="min-w-180 w-full border-separate border-spacing-y-3">
            {/* Top Header */}
            <thead>
              <tr className="grid grid-cols-3 gap-2 mb-2">
                <th className="rounded-tl-3xl bg-[#56b016] py-6 text-center font-bold text-lg text-white">
                  Course / Service
                </th>
                <th className="bg-[#56b016] py-4 text-center text-white font-bold text-lg">
                  Description
                </th>
                <th className="rounded-tr-3xl bg-[#56b016] py-4 text-center text-white font-bold text-lg">
                  Price (Incl. GST)
                </th>
              </tr>
            </thead>

            {/* Rows */}
            <tbody className="flex flex-col gap-3">
              {data.map((item, idx) => (
                <tr
                  key={idx}
                  className="grid grid-cols-3 gap-2 rounded-xl overflow-hidden shadow-sm"
                >
                  {/* Left Section */}
                  <td className="flex items-center gap-4 bg-[#56b016] p-4 text-white">
                    <div className="w-12 h-12 shrink-0 flex items-center justify-center rounded-full bg-white text-[#56b016] shadow-inner">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-left">
                        {item.title}
                      </h3>
                    </div>
                  </td>

                  {/* Middle */}
                  <td className="flex flex-col justify-center gap-2 bg-black p-4 text-white text-left">
                    <p className="text-sm leading-relaxed text-white/90">
                      {item.description}
                    </p>
                  </td>

                  {/* Right */}
                  <td className="flex items-center justify-center bg-[#56b016] p-4 text-center font-medium text-white">
                    <span className="text-sm">{item.price}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
