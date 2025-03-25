import cardtopicon1 from "@/public/cardimagetop1.svg";
import cardtopicon2 from "@/public/cardimagetop2.svg";
import debtlawsuitIcon from "@/public/deblawsuit.svg";
import rightArrow from "@/public/rightarrow.svg";
import { SheildIcon } from "@/public/sheild";
import { PeopleIcon } from "@/public/People";
export const navItems = [
  "For Collectors",
  "About",
  "Reviews",
  "Blog",
  "Products",
];

export const cardItems = [
  {
    variant: "primary",
    heading: "Settle a debt",
    content:
      "SoloSettle helps you arrange with the collector to settle outside of court. While you may want to win the lawsuit and pay nothing, agreeing to close the case by paying the person less than the face value of the debt could be more realistic.",
    link: "/",
    linktitle: "Start my Response",
    icon: cardtopicon1,
    debtIcon: debtlawsuitIcon,
    linkicon: rightArrow,
  },
  {
    variant: "primary",
    heading: "Reply to debt lawsuit",
    content:
      "You need to respond to a debt lawsuit within 14-30 days of receiving the Complaint. We’ll help you compile your response, then we’ll have an attorney review it and we’ll file it for you.",
    link: "/",
    linktitle: "Get Started",
    icon: cardtopicon2,
    debtIcon: debtlawsuitIcon,
    linkicon: rightArrow,
  },
];
interface numberItem {
  icon: () => React.JSX.Element;
  numbers: string;
  tag: string;
}

export const numbersItem: numberItem[] = [
  { icon: SheildIcon, numbers: "$1.85 Billion", tag: "protected" },
  { icon: PeopleIcon, numbers: "$282 Thousand", tag: "People helped" },
];

export const testiMonials = [
  {
    fullname: "Andrea Bryant",
    review:
      "Collection agency tried to sue me, but using SoloSuit's answer letter, I got the case dismissed. Then, after using SoloSuit's debt verification letter, I got the collection completely wiped from my credit report.",
    stars: 5,
  },
  {
    fullname: "Pj Chambers",
    review: "Helpful and straight forward.",
    stars: 5,
  },
  {
    fullname: "Rae W",
    review:
      "This helped me so much and just gave me a peace of mind. Will definitely use this again in the future. Thank you so much.",
    stars: 5,
  },
  {
    fullname: "Teresa Menter-Eller",
    review: "Easy to use and thorough.",
    stars: 5,
  },
  {
    fullname: "Debbie Smith (Deb)",
    review: "I have used them before and they helped me alot.",
    stars: 5,
  },
  {
    fullname: "GEORGE GLOVER",
    review: "The process was easy to understand and complete.",
    stars: 5,
  },
  {
    fullname: "MELANIA GAYTAN",
    review:
      "SOLOSUIT MADE IT VERY EASY TO NAVIGATE I WILL BE USING THIS SERVICE AGAIN",
    stars: 5,
  },
  {
    fullname: "Tamika Willis",
    review: "This place was awesome!!!",
    stars: 5,
  },
];
