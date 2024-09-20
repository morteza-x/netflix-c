import apis from "./apis";

export const getMovies = async () => {
  try {
    const response = await fetch(`${apis.heroMovies}?count=5`, {
      cache: "no-store",
    });
    const data = await response.json();

    console.log("fetched movies: ", response.ok);
    //console.log(data);

    return data.data;
  } catch (error) {
    console.log(error);
  }
};

export const getMoviesClient = async () => {
  try {
    const response = await fetch(`${apis.heroMoviesClient}?count=5`, {
      cache: "no-store",
    });
    const data = await response.json();

    console.log("fetched movies: ", response.ok);
    //console.log(data);

    return data.data;
  } catch (error) {
    console.log(error);
  }
};
