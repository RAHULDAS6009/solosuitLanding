"use client";

import { MouseEvent, ReactNode } from "react";

const variants = {
  primary: " text-white  bg-primary hover:bg-[#0657d8] ",
  outlined:
    "text-primary   bg-white border border-primary hover:bg-primary hover:text-white ",
};

const sizes = {};

interface ButtonProps {
  onClick?: (e: MouseEvent) => void;
  variant: "primary" | "outlined";
  title: string;
  size?: "sm" | "md";
  className?: string;
  children?: ReactNode;
}

export const Button = ({
  onClick,
  variant,
  title,
  size,
  className,
  children,
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`${className} ${variants[variant]}    font-semibold  text-[18px]  cursor-pointer  px-8 py-4 rounded-tl-lg rounded-br-lg  `}
    >
      {title}
    </button>
  );
};
