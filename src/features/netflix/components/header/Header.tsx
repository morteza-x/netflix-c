"use client";
import Image from "next/image";
//import LogoB from "../../svgs/LogoB";
import Logo from "@/features/netflix/assets/netflix-logo.png";
import { headerLinks } from "../../data/data";
import { THeaderLink } from "../../types/dto";
import Link from "next/link";
import { IconButton } from "@chakra-ui/react";
import { HiBell, HiMiniMagnifyingGlass, HiUserCircle } from "react-icons/hi2";
import React, { useEffect } from "react";
import { twMerge } from "tailwind-merge";

const Header = () => {
  const [isScrolled, setIsScrolled] = React.useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={twMerge(
        "flex items-center fixed top-0 z-50 h-16 overflow-hidden w-full transition-all duration-500",
        isScrolled ? "bg-gray-950/80" : "bg-transparent"
      )}
    >
      <div className="flex items-center justify-between container mx-auto px-4 ">
        <div className="flex items-center space-x-2 md:space-x-10">
          <a href="#">
            <Image src={Logo} alt="logo" width={100} height={100} />
          </a>

          <nav className="hidden md:flex items-center gap-4">
            {headerLinks?.map((link: THeaderLink) => (
              <Link
                className="cursor-pointer text-sm font-light text-[#e5e5e5] transition duration-[.4s] hover:text-[#b3b3b3] "
                key={link.name}
                href={link.href}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <button
            className="hidden lg:flex items-center justify-center"
            aria-label="search"
            //size={"sm"}
            //variant={"outline"}
            //colorScheme="grasy"
            // color={"white"}
            // _hover={{
            //   color: "white",
            // }}
          >
            <HiMiniMagnifyingGlass size={24} />
          </button>
          <p className="hidden lg:inline">Kids</p>

          <IconButton
            className=""
            aria-label="search"
            size={"sm"}
            colorScheme="whiteAlpha"
            color={"white"}
            variant={"ghost"}
          >
            <HiBell size={24} />
          </IconButton>

          <IconButton
            as={Link}
            href={"#"}
            className=""
            aria-label="search"
            size={"sm"}
            colorScheme="whiteAlpha"
            color={"white"}
            variant={"ghost"}
          >
            <HiUserCircle size={24} />
          </IconButton>
        </div>
      </div>
    </header>
  );
};

export default Header;
