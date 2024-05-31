"use client";

import { Element } from "react-scroll";
import { COMPANY_DESCRIPTION } from "./AboutSection.constants";

const AboutSection = () => {
  return (
    <Element
      name="About"
      className="flex min-h-[600px] border-b-8 border-black bg-white tablet:flex-col"
    >
      <div className="flex w-[50%] items-center justify-center bg-[#00b4f5] bg-[url('/img/grid-curved.svg')] bg-cover bg-fixed bg-center tablet:w-auto">
        <img
          src="/img/asset-1.png"
          className="h-[600px] object-cover tablet:h-[400px]"
          alt="asset-1"
        />
      </div>
      <div className="box-border flex w-[50%] flex-col items-center gap-12 p-16 tablet:w-auto mobile:gap-6">
        <div className="h-fit w-fit p-4 text-3xl font-bold uppercase text-black">
          About Us
        </div>
        <div className="w-[576px] border-2 border-black bg-white px-8 py-10 text-[26px] shadow-[20px_20px_0px_0px_#000000] tablet:w-auto tablet:text-xl">
          <div className="font-semibold uppercase">What are we?</div>
          <div>{COMPANY_DESCRIPTION}</div>
        </div>
      </div>
    </Element>
  );
};

export default AboutSection;
