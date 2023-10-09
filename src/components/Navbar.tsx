"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { FaUser } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import {
  BiLogOut,
  BiSolidBookAdd,
  BiUser,
  BiSolidHome,
  BiSolidDashboard,
} from "react-icons/bi";
import edhHub from "../../public/images/EduHubLogo.png";
const Navbar = () => {
  const [toggleNav, setToggleNav] = useState<boolean>(false);
  const pathname = usePathname();
  return (
    //container lg:px-20 py-6 px-5
    <div>
      {/* Side-Navbar */}
      <div
        className="fixed bg-primary-1 pt-8 h-screen rounded-r-xl hover:w-[250px] w-[50px] md:w-[80px]  transition-width ease-in-out"
        onMouseEnter={() => {
          setToggleNav(true);
        }}
        onMouseLeave={() => {
          setToggleNav(false);
        }}
      >
        {/* Logo */}
        <div
          className={`flex md:justify-center justify-between items-center h-[120px] w-full ${
            toggleNav ? "px-2" : ""
          }`}
        >
          <div className="px-1 md:px-0">
            <Image src={edhHub} alt="logo" className="w-[70px]" />
          </div>
          <div
            className=" md:hidden"
            onClick={() => {
              setToggleNav(false);
            }}
          >
            {toggleNav ? <AiOutlineClose size={24} /> : ""}
          </div>
        </div>

        {/* Links */}
        <div>
          <ul className="flex flex-col gap-8 text-xl text-primary-3">
            <Link href="/">
              <li
                className={`flex items-center gap-1 md:gap-5 pr-4 ${
                  pathname == "/" ? "text-primary-2" : ""
                }`}
              >
                <span
                  className={`border-l-4 ${
                    pathname == "/" ? "" : "border-transparent"
                  }`}
                >
                   
                </span>
                <div>
                  <BiSolidHome size={24} />
                </div>
                <p className={`${toggleNav ? "" : "hidden"} ml-4 md:ml-0`}>
                  Home
                </p>
              </li>
            </Link>

            <Link href="/dashboard">
              <li
                className={`flex items-center gap-1 md:gap-5 pr-4 ${
                  pathname == "/dashboard" ? "text-primary-2" : ""
                }`}
              >
                <span
                  className={`border-l-4 ${
                    pathname == "/dashboard" ? "" : "border-transparent"
                  }`}
                >
                   
                </span>
                <div>
                  <BiSolidDashboard size={24} />
                </div>
                <p className={`${toggleNav ? "" : "hidden"} ml-4 md:ml-0`}>
                  Dashboard
                </p>
              </li>
            </Link>
          </ul>
        </div>
        <div className="px-4 pt-4 h-[60px] absolute bottom-0 rounded-br-lg bg-[#948EE3] w-full">
          <div className="flex items-center justify-around gap-5 transition-all ease-in-out duration-300">
            <div className="flex items-center gap-2">
              <FaUser size={24} />
              <p className={`${toggleNav ? "" : "hidden"} text-md`}>UserName</p>
            </div>
            <BiLogOut
              size={24}
              className={`${toggleNav ? "" : "hidden"} cursor-pointer`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
