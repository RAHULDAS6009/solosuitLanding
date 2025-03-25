import Image from "next/image";
import solosuit from "@/public/Solosuitlogo.svg";
import { navItems } from "@/constant";
import { Button } from "../Button";

export const NavBar = () => {
  return (
    <div className="flex justify justify-between p-4 items-center ">
      <Image src={solosuit} alt="solosuit" width={77} height={40} />

      <div className="flex gap-12 items-center invisible lg:visible">
        {navItems.map((item, index) => {
          return (
            <div
              className="cursor-pointer text-black hover:text-white text-[18px] rounded-full transition delay-150 duration-300 ease-in-out   hover:bg-primary py-2 px-4 trasnsition-all"
              key={index}
            >
              {/* TODO: hasroute function */}
              {/* TODO: list items of Products */}
              {item}
            </div>
          );
        })}
        <div className="flex gap-2 items-center">
          <Button variant="outlined" title="Sign In" />
          <Button variant="primary" title="Sign Up" />
        </div>
      </div>
    </div>
  );
};

// function NavItem(item: string) {
//   return <div>{item}</div>;
// }

// function SeeItems({item}: string) {
//   if (item === "Products") return;
//   return (
//     <>
//       {item}
//       <ul>
//         <li>Debt answer</li>
//         <li>SoloSettle</li>
//       </ul>
//     </>
//   );
// }
