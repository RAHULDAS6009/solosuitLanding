import { NavBar } from "@/components/landing/NavBar";
import { Hero } from "@/components/landing/Hero";

import Card from "@/components/cards/Card";
import { cardItems, numbersItem, testiMonials } from "@/constant";
import { SheildIcon } from "@/public/sheild";
import { TestominalCard } from "@/components/cards/TestimonialCard";
import { Footer } from "@/components/landing/Footer";

export default function Home() {
  return (
    <div className="w-screen h-screen overflow-x-hidden bg-white ">
      <NavBar />
      <Hero />

      <section className=" bg-black">
        <div
          className="w-full h-full 
  border-y-[200px] border-t-transparent
  border-r-[1700px] border-r-black
  border-b-[50px] border-b-transparent "
        ></div>
        <div className="flex flex-col justify-center items-center ">
          {cardItems.map((item, index) => {
            return (
              <Card
                key={index}
                variant="primary"
                heading={item.heading}
                content={item.content}
                icon={item.icon}
                debtIcon={item.debtIcon}
                link={item.link}
                linkicon={item.linkicon}
                linktitle={item.linktitle}
              />
            );
          })}
        </div>
        <div className="flex flex-col  pl-[30%] xl:pl-0  items-start xl:justify-items-normal xl:flex-row xl:justify-between max-w-5xl mx-auto ">
          {numbersItem.map((item, index) => {
            return (
              <div
                className="flex text-white items-center my-4  justify-start gap-5"
                key={index}
              >
                {<item.icon />}
                <div className="flex flex-col gap-2">
                  <h2 className="font-bold text-5xl">{item.numbers}</h2>
                  <span className="font-normal">{item.tag}</span>
                </div>
              </div>
            );
          })}
        </div>
      </section>
      {/* 
      <section className="bg-white">
        <div className="grid grid-cols-4">
          {testiMonials.map((item, index) => {
            return (
              <TestominalCard
                key={index}
                fullname={item.fullname}
                rating={5}
                review={item.review}
                month={5}
              />
            );
          })}
        </div>
      </section> */}

      <div className="text-5xl my-8  flex justify-center items-center font-bold">
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
