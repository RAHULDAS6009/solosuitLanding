import { LinkedinLogo } from "@/public/Linkedin";

export function Footer() {
  return (
    <section className="bg-black w-full h-screen flex items-center justify-center">
      <div className="max-w-4xl flex flex-col gap-10">
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
          outcomes nor are we liable for any case outcomes. Use of its products
          are governed by its Terms of Service, Privacy Policy, and Legal
          Disclaimer
        </p>
      </div>
    </section>
  );
}
