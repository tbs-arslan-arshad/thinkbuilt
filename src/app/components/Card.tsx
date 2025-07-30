import Image from "next/image";

interface CardProps {
  bgColor: string;
  icon: string;
  alt: string;
  title: string;
  description: string;
}

export const Card = ({ bgColor, icon, alt, title, description }: CardProps) => {
  return (
    <div 
  className={`
    ${bgColor} 
    p-4 sm:p-6 rounded-xl max-w-[550px] xl:max-w-[613px] h-[213px]
    transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)]
    hover:scale-[1.03] hover:shadow-xl
    hover:-translate-y-1  // Slight upward movement
    transform-gpu
    will-change-transform  // Optimizes for animation
    cursor-pointer  // Changes cursor on hover
  `}
>
      <div className="flex bg-gray-600 justify-center rounded-xl sm:w-[58px] w-[50px] py-[13px]">
        <Image 
          src={icon} 
          alt={alt} 
          width={31} 
          height={31} 
          className="sm:w-[31px] sm:h-[31px] w-[25px] h-[25px]"
          loading="lazy"
        />
      </div>
      <h2 className="text-black text-xl sm:text-2xl my-4">{title}</h2>
      <p className="text-black text-sm sm:text-lg">{description}</p>
    </div>
  );
};