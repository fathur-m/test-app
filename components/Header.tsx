import React, { useState } from "react";
import Link from "next/link";
import Logo from "./Logo";
import {
  BarsArrowDownIcon,
  ArrowRightOnRectangleIcon,
  BarsArrowUpIcon,
  UserIcon,
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import { useAuth } from "../hooks/useAuth";
import { useRouter } from "next/router";

const variants = {
  hidden: { top: "-100vh" },
  enter: { top: "0" },
};

function Header() {
  const { user } = useAuth();
  const [openNav, setOpenNav] = useState(false);
  const [drop, setDrop] = useState(false);
  const router = useRouter();

  return (
    <header>
      <div className="fixed top-0 left-0 right-0 z-50 h-[64px] bg-ctm-black/70 backdrop-blur-md">
        <nav className="relative mx-auto flex h-full max-w-7xl items-center justify-between border-b-2 border-ctm-blue/50 px-4">
          <div className="flex items-center space-x-5 md:space-x-10">
            <Link href="/">
              <div className="">
                <Logo className="h-8 w-16 cursor-pointer" />
              </div>
            </Link>
            <button
              className="mt-2 h-6 w-6 cursor-pointer text-ctm-blue md:hidden"
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? <BarsArrowUpIcon /> : <BarsArrowDownIcon />}
            </button>
            {user ? (
              <ul className="hidden space-x-5 text-lg md:inline-flex">
                <li className="cursor-pointer">Serial TV</li>
                <li className="cursor-pointer">Film</li>
                <li className="cursor-pointer">Tentang</li>
              </ul>
            ) : null}
          </div>
          {user ? (
            <div
              onMouseEnter={() => setDrop(true)}
              onMouseLeave={() => setDrop(false)}
              onClick={() =>
                router.push(`/user/${user.name.replace(/ /g, "-")}`)
              }
              className="flex cursor-pointer items-center space-x-2"
            >
              <h1>{user.name}</h1>
              <UserIcon className="h-8 w-8 opacity-70 transition duration-200 hover:opacity-100" />
            </div>
          ) : (
            <Link href="/Login">
              <div className="flex items-center space-x-2 text-base">
                <button className="hidden md:inline">Masuk</button>
                <ArrowRightOnRectangleIcon className="mt-2 h-6 w-6 cursor-pointer text-ctm-blue md:mt-0" />
              </div>
            </Link>
          )}
        </nav>
      </div>
      <motion.div
        variants={variants}
        animate={openNav ? "enter" : "hidden"}
        transition={{ type: "linear", duration: 0.5 }}
        className={`fixed top-[-100vh] left-0 z-40 flex h-screen w-full items-center justify-center bg-ctm-blue`}
      >
        <ul className={`flex flex-col items-center space-y-8 text-lg`}>
          <li className="cursor-pointer">Serial TV</li>
          <li className="cursor-pointer">Film</li>
          <li className="cursor-pointer">Tentang</li>
        </ul>
      </motion.div>
    </header>
  );
}

export default Header;
