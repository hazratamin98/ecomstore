import React from "react";
import Link from "next/link";

//components
// import Container from "./Container";

//assets;
import Logo from "@/assets/Logo";
import User from "@/assets/User";
import Search from "@/assets/Search";
import LoveIcon from "@/assets/LoveIcon";
import AddtoCard from "@/assets/AddtoCard";

const Navigation_Link = [
  {
    path: "Home",
    href: "#",
  },
  {
    path: "Shop",
    href: "#",
  },
  {
    path: "About",
    href: "#",
  },
  {
    path: "Contact",
    href: "#",
  },
  {
    path: "Tools",
    href: "#",
  },
];

function Navbar() {
  return (
    <div className="bg-[#D4D4D4] hidden lg:block ">
      {/* <Container> */}
      <div className="  flex  items-center">
        <Logo />
        <div className="flex gap-[75px] py-9 px-24 text-base font-normal not-italic leading-normal  ">
          {Navigation_Link.map((link, index) => {
            return (
              <Link key={index} href={link.href}>
                {link.path}
              </Link>
            );
          })}
        </div>

        <div className="flex gap-11 mr-20">
          <User />
          <Search />
          <LoveIcon />
          <AddtoCard />
        </div>
      </div>
      {/* </Container> */}
    </div>
  );
}

export default Navbar;
