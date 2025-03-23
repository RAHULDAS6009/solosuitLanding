"use client";
import star from "../../public/star.svg";
import googleSvg from "../../public/googlelogo.svg";

import Image from "next/image";
import { getRandomColor } from "@/lib";
const user = {
  fullname: "Rahul Das",
  rating: 5,
  review:
    "Collection agency tried to sue me, but using SoloSuit’s answer letter, I got the case dismissed. Then, after using SoloSuit’s debt verification letter, I got the collection completely wiped from my credit report",
  month: 4,
};

interface TestimonialProps {
  fullname: string;
  rating: number;
  review: string;
  // date: Date;
  month: number;
  //TODO : Convert it into Date type
  imageUrl?: string;
  imageColor?: string;
}

export const TestominalCard = ({
  fullname,
  rating,
  review,
  imageColor,
  month,
  imageUrl,
}: TestimonialProps) => {
  function printStar(rating: number) {
    if (rating > 5) return;
    return Array.from({ length: rating }, (_, i) => {
      return <Image key={i} src={star} alt="star" />;
    }); 
  }

  return (
    <div className="bg-white border  flex flex-col items-center border-slate-300 w-64 p-5 gap-5 rounded-md ">
      {imageUrl ? (
        <Image src={""} alt="logo" width={65} height={65} />
      ) : (
        <div
          className={`w-16 h-16 font-serif text-white rounded-full flex items-center justify-center text-4xl ${
            imageColor || getRandomColor()
          } `}
        >
          {fullname[0].toUpperCase()}
        </div>
      )}
      <span className="font-sans font-semibold text-2xl">{fullname}</span>
      <div className="flex gap-1  ">{printStar(rating)}</div>
      <span className="text-center text-[15px] font-sans font-normal">
        {review}
      </span>
      <span className="text-xs text-slate-500 flex items-center gap-3 ">
        <Image src={googleSvg} alt="googleklogo" />
        {month} {"months ago"}
      </span>
    </div>
  );
};
