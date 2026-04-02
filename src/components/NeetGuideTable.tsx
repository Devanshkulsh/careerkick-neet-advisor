import React from "react";
import {
  Building2,
  GraduationCap,
  Landmark,
  Stethoscope,
} from "lucide-react";

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
        <div className="text-center mb-6">
          {/* <p className="text-gray-500 text-sm">
            An innovative guide exclusively
          </p> */}
          <p className="text-black/65 text-sm">Paid Counselling</p>
          <h2 className="text-3xl font-bold text-[#56b016]">
            designed for Medical & Allied Courses
          </h2>
        </div>

        <div className="-mx-4 px-4 overflow-x-auto">
          <div className="min-w-180">
            {/* Top Header */}
            <div className="grid grid-cols-3 gap-2 mb-2">
              <div className="rounded-tl-3xl bg-[#56b016] py-6 text-center font-bold text-lg text-white">
                Course / Service
              </div>

              <div className="bg-[#56b016] py-4 text-center text-white">
                <p className="font-bold text-lg">Description</p>
              </div>
              <div className="rounded-tr-3xl bg-[#56b016] py-4 text-center text-white">
                <p className="font-bold text-lg">Price (Incl. GST)</p>
              </div>
            </div>

            {/* Rows */}
            <div className="flex flex-col gap-3">
              {data.map((item, idx) => (
                <div
                  key={idx}
                  className="grid grid-cols-3 gap-2 rounded-xl overflow-hidden shadow-sm"
                >
                  {/* Left Section */}
                  <div className="flex items-center gap-4 bg-[#56b016] p-4 text-white">
                    <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white shadow">
                      {item.icon}
                    </div>

                    <div>
                      <h3 className="font-bold text-lg">{item.title}</h3>
                    </div>
                  </div>

                  {/* Middle */}
                  <div className="flex flex-col justify-center gap-2 bg-black p-4 text-white">
                    <p className="text-sm leading-relaxed text-white/90">
                      {item.description}
                    </p>
                  </div>

                  {/* Right */}
                  <div className="flex items-center justify-center bg-[#56b016] p-4 text-center font-medium text-white">
                    <span className="text-sm">{item.price}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
