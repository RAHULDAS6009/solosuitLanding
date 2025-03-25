"use client";
import { NavBar } from "@/components/landing/NavBar";
import { Hero } from "@/components/landing/Hero";
import Card from "@/components/cards/Card";
import { cardItems, numbersItem, testiMonials } from "@/constant";
import { Footer } from "@/components/landing/Footer";
import { useEffect, useRef } from "react";

export default function Home() {
  const card1 = useRef<HTMLDivElement>(null);
  useEffect(() => {
    console.log("helo");
    function handleScroll() {
      console.log("hello sir 1");
      if (!card1.current) return;
      const scrolled = window.pageYOffset * 2;
      console.log("hello sir");

      card1.current.style.transform = `translate3d(0px, ${scrolled}px, 0px)`;
    }

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className="w-screen h-screen overflow-x-hidden bg-white ">
      <NavBar />
      <Hero />

      <section className="relative bg-black">
        <div className="absolute inset-0 bg-black -skew-y-6  origin-top-left"></div>
        <div className="absolute inset-0 bg-black skew-y-6  origin-top-left"></div>

        <div className="relative z-10 flex flex-col justify-center items-center">
          <Card
            ref={card1}
            variant="primary"
            heading={cardItems[0].heading}
            content={cardItems[0].content}
            icon={cardItems[0].icon}
            debtIcon={cardItems[0].debtIcon}
            link={cardItems[0].link}
            linkicon={cardItems[0].linkicon}
            linktitle={cardItems[0].linktitle}
          />
          <Card
            variant="primary"
            heading={cardItems[1].heading}
            content={cardItems[1].content}
            icon={cardItems[1].icon}
            debtIcon={cardItems[1].debtIcon}
            link={cardItems[1].link}
            linkicon={cardItems[1].linkicon}
            linktitle={cardItems[1].linktitle}
          />
        </div>

        <div className="relative z-10 flex flex-col pl-[30%] xl:pl-0 items-start xl:justify-items-normal xl:flex-row xl:justify-between max-w-5xl mx-auto">
          {numbersItem.map((item, index) => (
            <div
              className="flex text-white items-center my-4 justify-start gap-5"
              key={index}
            >
              {<item.icon />}
              <div className="flex flex-col gap-2">
                <h2 className="font-bold text-5xl">{item.numbers}</h2>
                <span className="font-normal">{item.tag}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="text-5xl my-36  flex justify-center items-center font-bold">
        People Love us
      </div>

      <iframe
        className="w-full  h-[150%] max-w-6xl mx-auto"
        src="https://embedsocial.com/api/reviews/widget/adcb7ada03bfa0139c2161fc3f6cc78649852462/?origin=https%3A%2F%2Fwww.solosuit.com%2F "
      ></iframe>
      <Footer />
    </div>
  );
}
