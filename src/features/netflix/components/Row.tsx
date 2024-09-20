"use client";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { TMovie } from "../types/dto";
import Thumbnail from "./Thumbnail";
import React, { useRef } from "react";
import { twMerge } from "tailwind-merge";
import useDragToScroll from "../hooks/useDragToScroll";

const Row = ({ title, data }: { title: string; data: TMovie[] }) => {
  const rowRef = useRef<null | HTMLDivElement>(null);
  // this state shows the left arrow if the row is scrolled
  const [isScrolled, setIsScrolled] = React.useState(false);

  // handle left & right click scroll
  const handleClick = (dir: "left" | "right") => {
    // container is scrolled
    setIsScrolled(true);

    if (rowRef.current) {
      const { scrollLeft, clientWidth } = rowRef.current;

      const scrollTo =
        dir === "left" ? scrollLeft - clientWidth : scrollLeft + clientWidth;

      rowRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  const {
    isDragging,
    handleMouseDown,
    handleMouseLeave,
    handleMouseUp,
    handleMouseMove,
  } = useDragToScroll(rowRef);

  return (
    <div
      className="relative h-40 space-y-0.5 md:space-y-2 #bg-gray-400 #overflow-x-clip"
      onMouseDown={handleMouseDown}
      onMouseLeave={handleMouseLeave}
      onMouseUp={handleMouseUp}
    >
      <h2 className="w-56 cursor-pointer text-sm font-semibold text-[#e5e5e5] md:text-2xl transition duration-200 hover:text-white">
        {title}
      </h2>
      <div className="relative group md:-ml-2 #bg-red-500 #overflow-x-auto">
        <button onClick={() => handleClick("left")}>
          <FaChevronLeft
            className={twMerge(
              "absolute top-8 bottom-0 left-2 z-40 m-auto size-9 cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100 fill-red-500/90",
              !isScrolled && "hidden"
            )}
          />
        </button>

        <div
          ref={rowRef}
          className="flex items-center space-x-1.5 overflow-x-scroll md:space-x-2.5 md:p-2 scrollbar-hide transition-all"
          onMouseMove={handleMouseMove}
        >
          {data.map((item: TMovie) => (
            <Thumbnail key={item.id} item={item} />
          ))}
        </div>

        <button onClick={() => handleClick("right")}>
          <FaChevronRight className="absolute top-8 bottom-0 right-2 z-40 m-auto size-9 cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100 fill-red-500/90" />
        </button>
      </div>
    </div>
  );
};

export default Row;
