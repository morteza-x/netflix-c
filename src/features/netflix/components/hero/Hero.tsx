import helper from "@/utils/helper";
import { getMovies, getMoviesClient } from "../../services/services";
import Row from "../Row";
import HeroBanner from "./HeroBanner";
import { useEffect, useState } from "react";
import { TMovie } from "../../types/dto";

const Hero = async ({ movies }: { movies: TMovie[] }) => {
  return (
    <section className="h-screen">
      <main className="h-full relative pl-4 pb-24 lg:space-y-24 lg:pl-16">
        {!movies?.length ? <></> : <HeroBanner item={movies[0]} />}

        <div className="flex flex-col gap-10 md:gap-24">
          <Row
            title="Trending"
            data={helper
              .shuffleArray(movies)
              .filter((_: any, index: number) => index < 10)}
          />

          <Row
            title="Top Ratings"
            data={helper
              .shuffleArray(movies)
              .filter((_: any, index: number) => index < 10)}
          />
          <Row
            title="Action"
            data={helper
              .shuffleArray(movies)
              .filter((_: any, index: number) => index < 10)}
          />
          <Row
            title="Horror"
            data={helper
              .shuffleArray(movies)
              .filter((_: any, index: number) => index < 10)}
          />
          <Row
            title="Romance"
            data={helper
              .shuffleArray(movies)
              .filter((_: any, index: number) => index < 10)}
          />
          <Row
            title="Comedy"
            data={helper
              .shuffleArray(movies)
              .filter((_: any, index: number) => index < 10)}
          />
        </div>
      </main>
    </section>
  );
};

export default Hero;
