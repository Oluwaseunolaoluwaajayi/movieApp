import axios from 'axios';

const API_URL = '/api/movies';

export const fetchMovies = (params) => {
  return axios.get(API_URL, { params });
};

export const getMovieDetails = (movieId) => {
  return axios.get(`${API_URL}/${movieId}`);
};

export const getRecommendations = (userId) => {
  return axios.get(`${API_URL}/recommendations/${userId}`);
};
