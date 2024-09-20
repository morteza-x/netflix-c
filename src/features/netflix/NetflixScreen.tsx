import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import apis from "./services/apis";

const fetchData = async () => {
  const response = await fetch(`${apis.heroMovies}?count=5`, {
    cache: "no-store",
  });

  const data = await response.json();
  console.log("fetched movies: ", response.ok);
  return data.data;
};

export default async function NetflixScreen() {
  const movies = await fetchData();

  return (
    <section className="relative h-screen bg-cusGradient-to-b lg:h-[140vh]">
      <main>
        <Header />
        <Hero movies={movies} />
      </main>
    </section>
  );
}
