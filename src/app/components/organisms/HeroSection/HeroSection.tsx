/* eslint-disable @next/next/no-img-element */
"use client";
import { Element, Link } from "react-scroll";

import { useEffect, useState } from "react";
import { AiOutlineCrown } from "react-icons/ai";
import Button from "../../atoms/Button/Button";

const HeroSection = () => {
  const [scale, setScale] = useState(false);

  useEffect(() => {
    setScale(true);
  }, []);

  return (
    <Element
      name="Home"
      className="relative z-10 flex h-[865px] items-center justify-between overflow-hidden border-b-8 border-black bg-[#9059ff] bg-[url('/img/grid-hero.svg')] bg-cover bg-fixed bg-center px-32 tablet:flex-col-reverse tablet:justify-evenly tablet:px-0"
    >
      <div
        className={`flex w-fit flex-col gap-8 transition-transform duration-500 tablet:delay-500 ${
          scale ? "scale-100" : "scale-0"
        }`}
      >
        <div
          className={`relative flex flex-col items-start justify-center bg-white px-8 py-10
          shadow-[20px_20px_0px_0px_#000000] mobile:px-6 mobile:py-8
        `}
        >
          <div className="z-10 flex items-center text-6xl font-semibold leading-[64px] small-desktop:text-4xl tablet:text-3xl mobile:text-xl">
            Top-tier&nbsp;
            <div className="flex w-fit -rotate-[3deg] items-center rounded-full border-2 border-black bg-[#ffea80] px-5 py-2 font-bold hover:rotate-[0deg] hover:cursor-default hover:transition-all hover:duration-300 mobile:px-1">
              <AiOutlineCrown size={32} />
              Craftsmanship
              <AiOutlineCrown size={32} />
            </div>
          </div>
          <div className="z-10 flex items-center text-6xl font-semibold leading-[64px] small-desktop:text-4xl tablet:text-3xl mobile:text-xl">
            to create material products
            <br />
            that are functional and stylish.
          </div>
        </div>
        <Link
          key={"Products"}
          activeClass="active"
          to={"Products"}
          spy={true}
          smooth={true}
          duration={500}
        >
          <Button text="See Products" onClick={() => {}} />
        </Link>
      </div>
      <div
        className={`relative flex items-center justify-center transition-transform delay-500 duration-500 tablet:delay-0 ${
          scale ? "scale-100" : "scale-0"
        }
        `}
      >
        <img
          src="/img/kursi_2.png"
          className="z-10 w-[650px] small-desktop:w-[500px] tablet:w-[450px] mobile:px-4"
          alt="chair-img"
        />
      </div>
    </Element>
  );
};

export default HeroSection;
