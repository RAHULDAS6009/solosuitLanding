import Image from "next/image";
import women from "@/public/images/bluetshirtwomen.webp";
import fastcompany from "@/public/images/fastcompanylogo.svg";
import npr from "@/public/images/nprlogog.svg";
import techcrunch from "@/public/images/tclogo.png";
import abc from "@/public/images/abclogo.svg";
import { Button } from "../Button";

export function Hero(){
    return <section className="grid grid-cols-1 xl:grid-cols-2 xl:mt-24 ">
    <div className="flex flex-col xl:px-16 xl:pl-32    items-center xl:items-start ">
      <div className="font-serif font-semibold text-[65px] ">
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
}