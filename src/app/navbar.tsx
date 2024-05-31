"use client";

import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-scroll";

const navItems = {
  "#": {
    name: "Home",
    offset: -80
  },
  "#about": {
    name: "About",
    offset: -120
  },
  "#products": {
    name: "Products",
    offset: 0
  },
};

export function Navbar() {
  const [nav, setNav] = useState<boolean>(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="z-40 flex w-full justify-center">
      <div className="mx-auto flex h-14 w-full items-center justify-between border-y-2 border-black  bg-[#eefc6d] pr-10 text-black mobile:pr-4">
        {/* Logo */}
        <div className="flex h-14 w-48 items-center justify-center border-2 border-l-0 border-black bg-[#e6ffde] text-2xl font-bold">
          Craftify
        </div>

        {/* Desktop Navigation */}
        <ul className="flex mobile:hidden">
          {Object.entries(navItems).map(([path, { name, offset }]) => {
            return (
              <li
                key={name}
                className="flex cursor-pointer rounded-xl px-4 text-lg duration-300 hover:bg-[#C8B0EC] hover:text-black "
              >
                <Link
                  key={name}
                  activeClass="active"
                  className="relative flex align-middle font-bold transition-all hover:text-neutral-800 dark:hover:text-neutral-200"
                  to={name}
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={offset}
                >
                  {name}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Mobile Navigation Icon */}
        <div className="z-40 hidden mobile:block">
          {nav ? null : <AiOutlineMenu onClick={handleNav} size={20} />}
        </div>

        {/* Mobile Navigation Menu */}
        <ul
          className={
            nav
              ? "fixed left-0 top-0 z-40 h-full w-[60%] border-r border-r-gray-900 bg-[#eefc6d] duration-500 ease-in-out desktop:hidden mobile:block"
              : "fixed bottom-0 left-[-100%] top-0 z-10 w-[60%] duration-500 ease-in-out"
          }
        >
          {/* Mobile Logo */}
          <div className="m-4 flex items-center justify-between">
            <h1 className=" w-full text-3xl font-bold text-[#000]">Craftify</h1>
            <AiOutlineClose onClick={handleNav} size={20} />
          </div>

          {/* Mobile Navigation Items */}
          {Object.entries(navItems).map(([path, { name, offset }]) => {
            return (
              <li
                key={name}
                className="m-2 cursor-pointer rounded-xl p-4 text-black duration-300 hover:bg-[#00df9a] hover:text-black"
              >
                <Link
                  key={name}
                  activeClass="active"
                  className="relative flex align-middle transition-all hover:text-neutral-800 dark:hover:text-neutral-200"
                  to={name}
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={offset}
                >
                  {name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
