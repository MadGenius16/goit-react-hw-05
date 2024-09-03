import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3";
const apiKey = "d969496d1bc07cbd028cf70601276a53"

export const getTrendFilms = async () => {
  const {data}  = await axios.get(`/trending/movie/day?api_key=${apiKey}`);
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