import Image from "next/image";

interface CardProps {
  bgColor: string;
  icon: string;
  alt: string;
  title: string;
  description: string;
}

export const Card = ({ bgColor, icon, alt, title, description,  }: CardProps) => {
  return (
    <div 
  className={`
    ${bgColor} 
    px-[27px] pt-[41.92] rounded-xl max-w-[550px] xl:max-w-[613px] h-[263px]
    transition-all duration-500
  `}
>
      <div className="flex bg-[#262626] justify-center rounded-xl sm:w-[58px] w-[50px] py-[13px] ">
        <Image 
          src={icon} 
          alt={alt} 
          width={31} 
          height={31} 
          className="sm:w-[31px] sm:h-[31px] w-[25px] h-[25px]"
          
          priority={true} // Ensures immediate loading
                unoptimized={true} // For development
        />
      </div>
      <h2 className="text-black text-xl sm:text-[22px] mt-[16.08px] font-satoshi font-bold leading-[24px] tracking-[0.4px]">{title}</h2>
      <p className=" text-sm sm:text-lg mt-[29.86px] text-black font-satoshi font-normal leading-[27px]">{description}</p>
    </div>
  );
};