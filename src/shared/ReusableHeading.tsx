interface ReusableHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
  subtitleClass?: string;
}

export const ReusableHeading = ({
  title,
  subtitle,
  className = "",
  subtitleClass = "",
}: ReusableHeadingProps) => {
  return (
    <div className={`py-12 text-center ${className}`}>
      <div className="relative inline-block">
         <svg
          className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-[70%]"
          viewBox="0 0 300 60"
          preserveAspectRatio="none"
        >
          <path
            d="M5,50 
               C40,10 80,50 120,30 
               C160,10 200,50 240,30 
               C270,20 290,40 295,30 
               L295,55 
               C260,50 200,60 150,55 
               C100,50 50,60 5,55 Z"
            fill="#FACC15" // Tailwind yellow-400
          />
        </svg>

        
        <h2 className="relative px-8 text-3xl text-black md:text-4xl font-semibold">
          {title}
        </h2>
      </div>

      {subtitle && (
        <p className={`mt-2 text-gray-700 text-md md:text-lg ${subtitleClass}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
};