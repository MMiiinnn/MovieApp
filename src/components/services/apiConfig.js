export const BASE_URL = "https://api.themoviedb.org/3";
export const IMAGE_BASE_URL = "https://image.tmdb.org/t/p";
const API_KEY = import.meta.env.VITE_API_KEY;

export const fetchConfig = {
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${API_KEY}`,
  },
};

// Helper for image URLs
export const getImageUrl = (path, size = "w500") => {
  if (!path) return "https://via.placeholder.com/500x750?text=No+Image";
  return `${IMAGE_BASE_URL}/${size}${path}`;
};
