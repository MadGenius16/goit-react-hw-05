import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3";
const apiKey = "c1d786b9267a0ef235800ccde4ad858e"

export const getTrendFilms = async () => {
  const {data} = await axios.get(`/trending/movie/day?api_key=${apiKey}`);
  return data;
};

export const getFilmsById = async (filmId) => {
  const {data} = await axios.get(`/movie/${filmId}?api_key=${apiKey}`);
  return data;
};

export const getFilmReviews = async (filmId) => {
  const {data} = await axios.get(
    `/movie/${filmId}/reviews?api_key=${apiKey}`
  );
  return data;
};

export const getCastList = async (filmId) => {
  const {data} = await axios.get(
    `/movie/${filmId}/credits?api_key=${apiKey}`
  );
  return data;
};

export const getFilmByKeyword = async (query) => {
  const {data} = await axios.get(
    `/search/movie?api_key=${apiKey}&query=${query}`
  );
  return data;
};