import Card from "@/components/Card";
import cardtopIcon from "@/public/cardimagetop1.svg";
import debtlawsuitIcon from "@/public/deblawsuit.svg";
import rightArrow from "@/public/rightarrow.svg";

export default function Home() {
  return (
    <div className="w-screen h-screen flex pt-10 justify-center bg-black">
      <Card
        variant="primary"
        heading="Settle a debt"
        content="SoloSettle helps you arrange with the collector to settle outside of court. While you may want to win the lawsuit and pay nothing, agreeing to close the case by paying the person less than the face value of the debt could be more realistic."
        link="/"
        linktitle="Start my Response"
        icon={cardtopIcon}
        debtIcon={debtlawsuitIcon}
        linkicon={rightArrow}
      />
    </div>
  );
}
