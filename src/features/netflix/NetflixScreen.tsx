import helper from "@/utils/helper";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Trending from "./components/trending/Trending";
import { getMovies } from "./services/services";
import Row from "./components/Row";

const fetchData = async () => {
  const data = await getMovies();
  return data;
};

const NetflixScreen = async () => {
  const movies = await fetchData();

  return (
    <section className="relative h-screen bg-cusGradient-to-b lg:h-[140vh]">
      <main>
        <Header />
        <Hero movies={movies} />
      </main>
    </section>
  );
};

export default NetflixScreen;
