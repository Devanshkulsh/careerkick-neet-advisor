import { motion } from 'motion/react';

const achievements = [
  {
    id: 1,
    value: '700000+',
    label: 'Students Positively Impacted',
    icon: (
      <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
      </svg>
    ),
  },
  {
    id: 2,
    value: '450000+',
    label: 'Counselling one to one',
    icon: (
      <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 10h.01M12 10h.01M16 10h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
  },
  {
    id: 3,
    value: '3000+',
    label: 'Seminars/Webinars',
    icon: (
      <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
      </svg>
    ),
  },
];

const AchievementSection = () => {
  return (
    <section className="relative w-full overflow-hidden">
      <div className="absolute inset-0 flex flex-col">
        <div className="h-1/2 w-full bg-[#56b016]" />
        <div className="h-1/2 w-full bg-white" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-16 text-center">
        <div className="relative mb-4 inline-block">
          <span className="relative z-10 px-8 py-2 text-2xl font-black">Our Achievements</span>
          <div className="absolute inset-0 -rotate-1 skew-x-12 rounded-sm bg-white shadow-sm" />
        </div>

        <div className="mb-2 flex justify-center gap-1">
          {[...Array(5)].map((_, i) => (
            <span key={i} className="text-2xl text-black">&#9733;</span>
          ))}
        </div>

        <p className="mb-16 font-bold uppercase tracking-tight text-black">
          One of the Highest Rated Counselling Services
        </p>

        <div className="mt-8 grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-4">
          {achievements.map((item, idx) => (
            <motion.div
              key={item.id}
              className="group flex flex-col items-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
            >
              <div className="relative mb-8">
                <motion.div
                  className="absolute -inset-2 rounded-full border-[3px] border-dashed border-black will-change-transform"
                  animate={{ rotate: [0, 360] }}
                  transition={{ repeat: Infinity, repeatType: 'loop', duration: 8, ease: 'linear' }}
                />

                <div className="relative flex h-32 w-32 items-center justify-center overflow-hidden rounded-full border-4 border-black bg-white shadow-[inset_0_2px_4px_rgba(0,0,0,0.1)]">
                  <div className="flex h-[85%] w-[85%] items-center justify-center rounded-full border-2 border-black bg-[#56b016] text-white transition-colors duration-500 group-hover:bg-black group-hover:text-white">
                    {item.icon}
                  </div>
                </div>
              </div>

              <h3 className="mb-1 text-3xl font-black text-black">{item.value}</h3>
              <p className="text-sm font-medium text-black/80 md:text-base">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </div>

    </section>
  );
};

export default AchievementSection;
