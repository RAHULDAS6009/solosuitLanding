import { Button } from "@/components/Button";
import Card from "@/components/cards/Card";
import { TestominalCard } from "@/components/cards/TestimonialCard";
import cardtopIcon from "@/public/cardimagetop1.svg";
import debtlawsuitIcon from "@/public/deblawsuit.svg";
import rightArrow from "@/public/rightarrow.svg";

export default function Home() {
  return (
    <div className="w-screen h-screen flex p-10 items-center justify-center bg-white">
      {/* <Card
        variant="primary"
        heading="Settle a debt"
        content="SoloSettle helps you arrange with the collector to settle outside of court. While you may want to win the lawsuit and pay nothing, agreeing to close the case by paying the person less than the face value of the debt could be more realistic."
        link="/"
        linktitle="Start my Response"
        icon={cardtopIcon}
        debtIcon={debtlawsuitIcon}
        linkicon={rightArrow}
      /> */}
      {/* <Button variant="primary" title="Reply to a debt lawsuit" size="sm" />
      <Button variant="primary" title="Settle a debt" size="sm" />
      <Button variant="outlined" title="Genearte a document" size="sm" /> */}
      <TestominalCard
        imageColor="bg-green-500"
        fullname="Rahul Das"
        review="Collection agency tried to sue me, but using SoloSuit’s answer letter, I got the case dismissed. Then, after using SoloSuit’s debt verification letter, I got the collection completely wiped from my credit report"
        month={4}
        rating={5}
      />
    </div>
  );
}
