import { API_URL, API_URL_CLIENT } from "./config";

const baseUrl = API_URL;
const baseUrlClient = API_URL_CLIENT;

const apis = {
  heroMovies: baseUrl + "/hero-movies",
  heroMoviesClient: baseUrlClient + "/hero-movies",
};

export default apis;
