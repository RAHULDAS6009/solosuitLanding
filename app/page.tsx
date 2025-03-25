import { Button } from "@/components/Button";
import { NavBar } from "@/components/NavBar";
import women from "@/public/images/bluetshirtwomen.webp";
import fastcompany from "@/public/images/fastcompanylogo.svg";
import npr from "@/public/images/nprlogog.svg";
import techcrunch from "@/public/images/tclogo.png";
import abc from "@/public/images/abclogo.svg";
import Image from "next/image";
import Card from "@/components/cards/Card";
import { cardItems, numbersItem, testiMonials } from "@/constant";
import { SheildIcon } from "@/public/sheild";
import { TestominalCard } from "@/components/cards/TestimonialCard";

export default function Home() {
  return (
    <div className="w-screen h-screen overflow-x-hidden bg-white ">
      <NavBar />
      <section className="grid grid-cols-1 xl:grid-cols-2 xl:mt-24 ">
        <div className="flex flex-col xl:px-16 xl:pl-32    items-center xl:items-start ">
          <div className="font-serif font-semibold text-[55px] ">
            Resolve <span className="text-primary">debt</span>
          </div>
          <p className="font-sans text-[20px] text-[#697488] px-64 xl:p-0 text-center xl:text-start mb-6 ">
            Get the help you need to navigate debt disputes. Our automated
            software will help you get resolution.
          </p>
          <div>
            <div className="visible  xl:hidden  ">
              <div className="flex justify-center gap-2">
                <Button variant="primary" title="Reply to a debt lawsuit" />
                <Button variant="primary" title="Settle a debt" />
              </div>

              <div className="flex  justify-center">
                <Button variant="outlined" title="Generate a document" />
              </div>
            </div>
            <div className="invisible  xl:visible flex flex-wrap  gap-2 ">
              <Button variant="primary" title="Reply to a debt lawsuit" />
              <Button variant="primary" title="Settle a debt" />
              <Button variant="outlined" title="Generate a document" />
            </div>

            <div className="flex flex-nowrap xl:flex-wrap gap-10 w-96  pt-10">
              <Image
                src={fastcompany}
                alt="fastcompany"
                width={165}
                height={25}
              />
              <Image src={npr} alt="npr" width={88} height={30} />
              <Image
                src={techcrunch}
                alt="techcrunch"
                width={200}
                height={84}
              />
              <Image src={abc} alt="abc" width={35} height={35} />
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center pt-12 xl:pt-0 ">
          <Image src={women} alt="women" width={480} height={300} />
        </div>
      </section>

      <section className=" bg-black">
        <div
          className="w-screen h-screen 
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
      </section>
    </div>
  );
}
