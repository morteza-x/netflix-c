"use client";
import { FaStar } from "react-icons/fa";
import { TMovie } from "../types/dto";
import ReactPlayer from "react-player";

const Trailer = ({ item }: { item: TMovie }) => {
  return (
    <div className="bg-[#181818] #p-6 w-full">
      <div className="aspect-video w-full">
        {/* <video className="aspect-video" src={item.trailer} controls></video> */}
        <ReactPlayer
          width={"100%"}
          height={"100%"}
          url={item.trailer}
          controls
          //playing
          volume={0.5}
        />
      </div>

      <div className="w-full bg-[#181818] px-6 py-4 md:px-10 md:py-8">
        <div>
          <div className="flex items-center space-x-2 text-sm">
            <p className="flex items-center gap-2">
              <span className="font-semibold text-green-400">
                {item.rating}
              </span>
              <FaStar className="fill-yellow-400" />
            </p>
            <p>{item.year}</p>
            <p className="flex h-4 items-center justify-center rounded border border-white/40 px-1.5 text-xs">
              HD
            </p>
          </div>

          <div>
            <h2 className="text-2xl mt-2">{item.name}</h2>
            <p className="mt-3 text-gray-300">{item.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trailer;
