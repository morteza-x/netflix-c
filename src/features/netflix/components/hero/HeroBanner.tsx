"use client";
import React from "react";
import { TMovie } from "../../types/dto";
import Image from "next/image";
import { FaPlay } from "react-icons/fa";
import { HiInformationCircle } from "react-icons/hi2";
import { useBaseModal } from "@/__client/BaseModalProvider";
import Trailer from "../Trailer";
import { Tooltip } from "@chakra-ui/react";

const HeroBanner = ({ item }: { item: TMovie }) => {
  const { modalOn } = useBaseModal();
  function openTrailerModal() {
    console.log("oepn");
    modalOn(<Trailer item={item} />, {});
  }

  return (
    <div className="h-full flex flex-col space-y-2 py-16 md:space-y-4 lg:h-[65vh] lg:justify-end ld:pb-12">
      <div className="absolute top-0 left-0 -z-10 h-[95vh] w-screen">
        <Image
          className="w-full object-cover h-full"
          src={item.image}
          alt={item.name}
          fill
        />
      </div>

      {/* text */}
      <h1 className="text-2xl md:text-4xl lg:text-7xl">{item.name}</h1>
      <p className="max-w-xs text-xs md:max-w-lg md:text-lg lg:max-w-2xl lg:text-2xl drop-shadow-xl">
        {item.description}
      </p>

      <div className="flex space-x-3 items-center">
        <Tooltip
          placement={"top"}
          hasArrow
          label={`Click to see: ${item.name} Trailer`}
        >
          <button
            className="bannerButton bg-white text-black"
            onClick={openTrailerModal}
          >
            <FaPlay className="size-4 text-black md:size-7" />
            Play
          </button>
        </Tooltip>
        <button className="bannerButton bg-[gray]/70">
          More Info
          <HiInformationCircle className="size-5 md:size-8" />
        </button>
      </div>
    </div>
  );
};

export default HeroBanner;
