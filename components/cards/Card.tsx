import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

// TODO:card size is changing when it is responsive
const sizes = {
  sm: "",
  md: "",
  lg: "",
};

interface CardProps {
  variant: "primary" ;
  size?: "sm" | "md" | "lg";
  heading: string;
  content: string;
  link: string;
  linktitle: string;
  linkicon: string;
  icon: string;
  debtIcon: string;
  children?: ReactNode;
}
function Card({
  heading,
  content,
  link,
  linkicon,
  linktitle,
  icon,
  size,
  variant,
  debtIcon,
  children,
}: CardProps) {
  return (
    <div className="max-w-6xl rounded-2xl overflow-hidden  grid lg:grid-cols-2 grid-cols-1 h-[80%] ">
      <div className="bg-white   flex flex-col p-12 items-center justify-start gap-5">
        <Image src={icon} alt={icon} width={60} height={60} />
        <h6 className="text-4xl  font-serif">{heading}</h6>
        <p className="text-[18px]  font-sans text-center">{content}</p>
        <Link
          className="text-[16px] text-primary flex gap-2 items-center mt-5"
          href={link}
        >
          {linktitle.toUpperCase()}
        <Image className="pt-0.5"  src={linkicon} alt={linkicon} height={14} width={14}  />
        </Link>
      </div>

      <div className="bg-primary p-4 flex items-center justify-center invisible lg:visible ">
        <Image src={debtIcon} alt={debtIcon} width={330} />
      </div>
    </div>
  );
}

export default Card;
