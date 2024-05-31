"use client";

import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillMediumSquare,
  AiFillYoutube,
} from "react-icons/ai";
import { Link } from "react-scroll";

const FooterSection = () => {
  return (
    <div className="box-border flex min-h-[200px] flex-col gap-4 bg-[url('/img/bg-footer.svg')] px-14 py-20 text-white">
      <div className="text-3xl font-bold">Craftify</div>
      <div className="flex gap-4">
        <AiFillInstagram className="hover:cursor-pointer" size={28} />
        <AiFillLinkedin className="hover:cursor-pointer" size={28} />
        <AiFillFacebook className="hover:cursor-pointer" size={28} />
        <AiFillYoutube className="hover:cursor-pointer" size={28} />
        <AiFillMediumSquare className="hover:cursor-pointer" size={28} />
      </div>
      <div className="flex gap-4">
        <Link
          key={"Home"}
          activeClass="active"
          className="hover:rotate-[-10deg] hover:cursor-pointer hover:transition-all hover:duration-200"
          to={"Home"}
          spy={true}
          smooth={true}
          duration={500}
          offset={-80}
        >
          {"Home"}
        </Link>
        <Link
          key={"About"}
          activeClass="active"
          className="hover:rotate-[-10deg] hover:cursor-pointer hover:transition-all hover:duration-200"
          to={"About"}
          spy={true}
          smooth={true}
          duration={500}
          offset={-140}
        >
          {"About"}
        </Link>
        <Link
          key={"Products"}
          activeClass="active"
          className="hover:rotate-[-10deg] hover:cursor-pointer hover:transition-all hover:duration-200"
          to={"Products"}
          spy={true}
          smooth={true}
          duration={500}
        >
          {"Products"}
        </Link>
      </div>
      <div>
        At Craftify, we blend innovative design with top-tier craftsmanship to
        create material products that are both functional and stylish. From
        chairs to tables, every piece is meticulously crafted to elevate your
        space and enhance your lifestyle. Our products are built to last, using
        the finest materials and sustainable practices.
      </div>
      <div>&copy; 2024 Craftify. All rights reserved.</div>
      <div className="opacity-10">Created by Hafizh Maulana</div>
    </div>
  );
};

export default FooterSection;
