"use client";
import { NavBar } from "@/components/landing/NavBar";
import { Hero } from "@/components/landing/Hero";
import backgroundsvg from "@/public/background.svg";
import Card from "@/components/cards/Card";
import { cardItems, numbersItem, testiMonials } from "@/constant";
import { SheildIcon } from "@/public/sheild";
import { TestominalCard } from "@/components/cards/TestimonialCard";
import { Footer } from "@/components/landing/Footer";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  return (
    <div className="w-screen h-screen overflow-x-hidden bg-white ">
      <NavBar />
      <Hero />

      <section className="relative bg-black">
        <div className="absolute inset-0 bg-black -skew-y-6  origin-top-left"></div>
        <div className="absolute inset-0 bg-black skew-y-6  origin-top-left"></div>

        <div className="relative z-10 flex flex-col justify-center items-center">
          {cardItems.map((item, index) => (
            <div key={index}>
              <Card
                variant="primary"
                heading={item.heading}
                content={item.content}
                icon={item.icon}
                debtIcon={item.debtIcon}
                link={item.link}
                linkicon={item.linkicon}
                linktitle={item.linktitle}
              />
            </div>
          ))}
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
