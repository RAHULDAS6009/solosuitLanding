import { LinkedinLogo } from "@/public/Linkedin";
import pointingguy from "@/public/images/pointingguy.webp";
import Image from "next/image";

export function Footer() {
  return (
    <div className="">
      <div className="flex pl-32">
        <Image src={pointingguy} alt="pointingguy" width={460} height={300} />
        <Card />
      </div>
      <section className="bg-black w-full h-screen flex items-center justify-center py-20">
        <div className="max-w-4xl flex flex-col justify-between  h-full">
          <span className="font-serif font-bold flex justify-center text-white gap-5 text-4xl items-center">
            Solo <LinkedinLogo />
          </span>
          <div className="text-white text-center">
            <table className="w-full font-extralight">
              <tr>
                <th className="py-4">Company </th>
                <th>Legal</th>
                <th>Features</th>
                <th>Resources</th>
              </tr>

              <tr>
                <td>Help</td>
                <td>Privacy Policy</td>
                <td>Courts </td>
                <td>Guest Posts</td>
              </tr>

              <tr>
                <td>Carrers</td>
                <td>Terms of Service</td>
                <td>Collectors</td>
                <td>Affiliate Program</td>
              </tr>

              <tr>
                <td>Get solo</td>
                <td>Legal Disclaimer</td>
                <td>Hello Resolve</td>
              </tr>
            </table>
          </div>
          <p className="text-white text-center text-xl font-light font-serif">
            Solo is not an attorney or a law firm. Nor is it a substitute for an
            attorney or law firm. We do not provide legal advice nor do we
            practice law. This site only contains legal information, not legal
            advice. Solo is a self-help tool. This site does not create an
            attorney-client relationship. We provide no guarantee regarding case
            outcomes nor are we liable for any case outcomes. Use of its
            products are governed by its Terms of Service, Privacy Policy, and
            Legal Disclaimer
          </p>
        </div>
      </section>
    </div>
  );
}

export function Card() {
  return (
    <div className=" flex justify-center items-center     rounded-tl-3xl rounded-br-3xl h-[600px] shadow-lg p-8 max-w-4xl  text-center">
      <div className="flex flex-col gap-10">
        <h2 className="text-5xl font-serif font-bold text-gray-900">
          Solo has your back
        </h2>
        <p className="text-gray-600 mt-2 text-xl">
          And we’ve got you covered in all 50 states.
        </p>

        <div className="mt-6 flex justify-center gap-4">
          <button className="flex items-center gap-2 bg-blue-600 text-white px-5 py-3 rounded-xl font-medium shadow-md hover:bg-blue-700 transition">
            ⚖️ Debt Lawsuits
          </button>
          <button className="flex items-center gap-2 bg-blue-600 text-white px-5 py-3 rounded-xl font-medium shadow-md hover:bg-blue-700 transition">
            💰 Debt Settlement
          </button>
        </div>
      </div>
    </div>
  );
}
