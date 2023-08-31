import React from "react";
import Link from "next/link";

// assets
import Logo from "@/assets/Logo";

function Footer() {
  return (
    <div className="flex items-center ">
      <Logo />
      {/* <div className="flex md:flex-col flex-wrap">
        {[
          "Home Pages",
          "Custom Posts",
          "Style Guide",
          "Customization",
          "Tags",
          "Contact",
        ].map((link, index) => (
          <Link
            className="  hover:text-primary text-base  pb-2 pr-4 font-sans-serif text-[var(--color-text-accent-3)]"
            href={`/${link}`}
            key={index}
          >
            {link}
          </Link>
        ))}
      </div> */}
      <div
        className="flex gap-44 mt-24
       mb-12"
      >
        <div className="flex flex-col ">
          <h1 className="text-base text-[#9F9F9F] font-medium mb-14">Links</h1>
          <div className="text-base  text-[#000] font-medium flex flex-col gap-11">
            {["Home", "Shop", "About", "About"].map((link, index) => (
              <Link href="#" key={index}>
                {link}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex flex-col w-full">
          <h1 className="text-base text-[#9F9F9F] font-poppins font-medium mb-14">
            Links
          </h1>
          <div className="text-base font-poppins font-medium flex flex-col gap-11">
            {["Payment Options", "Returns", "Privacy Policy"].map(
              (link, index) => (
                <Link href="#" key={index}>
                  {link}
                </Link>
              )
            )}
          </div>
        </div>
        <div className="flex flex-col w-full">
          <h1 className="text-base text-[#9F9F9F] font-poppins font-medium mb-14">
            Newa Letters
          </h1>
          <div className="flex gap-3">
            <input
              placeholder="Enter Your Email Address"
              type="text"
              className="border-0 border-b-2 bg-transparent border-black outline-none focus:outline-none"
            />
            <button className="border-b-2 border-black">Subscribe</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
