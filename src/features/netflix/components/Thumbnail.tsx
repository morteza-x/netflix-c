"use client";
import Image from "next/image";
import { TMovie } from "../types/dto";
import { IconButton, Tooltip } from "@chakra-ui/react";
import { useBaseModal } from "@/__client/BaseModalProvider";
import { FaPlay } from "react-icons/fa";
import Trailer from "./Trailer";
import { useState } from "react";
const Thumbnail = ({ item }: { item: TMovie }) => {
  const { modalOn } = useBaseModal();
  const [srcImg, setSrcImg] = useState(item.poster);

  function openTrailerModal() {
    console.log("oepn");
    modalOn(<Trailer item={item} />, { size: "xl" });
  }

  return (
    <div className="relative aspect-video flex-1 h-28 min-w-[180px] transition duration-200 md:h-36 md:min-w-[260px] md:hover:scale-105 #cursor-grab">
      <Image
        src={srcImg}
        alt={item?.name}
        fill
        draggable={false}
        className="w-full object-cover rounded-sm md:rounded"
        onError={() => setSrcImg("/fallback.jpg")}
        onLoadingComplete={(result: any) => {
          if (result.naturalWidth === 0) {
            // Broken image
            setSrcImg("/fallback.jpg");
          }
        }}
      />

      <div className={"absolute bottom-2 left-4"}>
        <Tooltip
          placement={"top"}
          hasArrow
          label={`Click to see: ${item.name} Trailer`}
        >
          <IconButton
            className="!grid !place-content-center"
            aria-label="play trailer"
            colorScheme="red"
            isRound={true}
            onClick={openTrailerModal}
            icon={<FaPlay size={18} />}
          />
        </Tooltip>
      </div>
    </div>
  );
};

export default Thumbnail;
