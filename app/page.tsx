// import { Button } from "@/components/Button";
// import Card from "@/components/cards/Card";
// import { TestominalCard } from "@/components/cards/TestimonialCard";
// import cardtopIcon from "@/public/cardimagetop1.svg";
// import debtlawsuitIcon from "@/public/deblawsuit.svg";
// import rightArrow from "@/public/rightarrow.svg";

import { Button } from "@/components/Button";
import { NavBar } from "@/components/NavBar";
import women from "@/public/images/bluetshirtwomen.webp";
import fastcompany from "@/public/images/fastcompanylogo.svg";
import npr from "@/public/images/nprlogog.svg";
import techcrunch from "@/public/images/tclogo.png";
import abc from "@/public/images/abclogo.svg";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-screen h-screen overflow-x-hidden bg-white p-5">
      <NavBar />
      <section className="grid grid-cols-1 xl:grid-cols-2 ">
        <div className="flex flex-col  xl:p-16 items-center xl:items-start ">
          <div className="font-serif text-[60px] ">
            Resolve <span className="text-primary">debt</span>
          </div>
          <p className="font-sans text-[22px] text-[#697488] px-64 xl:p-0 text-center xl:text-start  ">
            Get the help you need to navigate debt disputes. Our automated
            software will help you get resolution.
          </p>
          <div>
            <div className="visible  xl:invisible  ">
              {/* First Row: Two Buttons in One Line */}
              <div className="flex justify-center gap-2">
                <Button variant="primary" title="Reply to a debt lawsuit" />
                <Button variant="primary" title="Settle a debt" />
              </div>

              {/* Second Row: Centered Button */}
              <div className="flex  justify-center">
                <Button variant="outlined" title="Generate a document" />
              </div>
            </div>
            <div className="invisible  xl:visible flex flex-wrap  gap-2 ">
              <Button variant="primary" title="Reply to a debt lawsuit" />
              <Button variant="primary" title="Settle a debt" />
              <Button variant="outlined" title="Generate a document" />
            </div>

            <div className="flex flex-nowrap xl:flex-wrap gap-10  pt-10">
              <Image
                src={fastcompany}
                alt="fastcompany"
                width={172}
                height={25}
              />
              <Image src={npr} alt="npr" width={88} height={30} />
              <Image
                src={techcrunch}
                alt="techcrunch"
                width={215}
                height={84}
              />
              <Image src={abc} alt="abc" width={40} height={40} />
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <Image src={women} alt="women" width={480} height={500} />
        </div>
      </section>
    </div>
  );
}
