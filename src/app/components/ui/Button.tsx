import Image from "next/image";

type ButtonProps = {
  type: "button" | "submit";
  title: string;
  icon?: string;
  variant: string;
  full?: boolean;
  onClick?: () => void;
};

const Button = ({ type, title, icon, variant, full, onClick }: ButtonProps) => {
  return (
<<<<<<< HEAD
    <button 
      className={`flexCenter gap-3 rounded-full border border-[#FFFFFF99] ${variant} ${full && 'w-full'}`}
=======
    <button
      className={`flexCenter gap-3 rounded-full border border-[rgba(255,255,255,0.6)] ${variant} ${
        full && "w-full"
      } cursor-pointer`}
>>>>>>> 27c35c9b10b51bbc2c7f8868f903ff5b0a39a4e7
      type={type}
      onClick={onClick}
    >
      {icon && <Image src={icon} alt={title} width={24} height={24} />}
      <label className="bold-16 whitespace-nowrap cursor-pointer">
        {title}
      </label>
    </button>
  );
};

export default Button;
