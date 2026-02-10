import axios from "axios";

// Basic Setup
export const BASE_URL = "https://api.themoviedb.org/3";
export const IMAGE_BASE_URL = "https://image.tmdb.org/t/p";
const API_KEY = import.meta.env.VITE_API_KEY;

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    Accept: "application/json",
    Authorization: `Bearer ${API_KEY}`,
  },
});

// Request Interceptor: Checking things before the messenger leaves
api.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response Interceptor: Checking the bag when the messenger returns
api.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    // Server responded with a status code (4xx, 5xx)
    if (error.response) {
      const status = error.response.status;

      switch (status) {
        case 401:
          console.error("Unauthorized: API Key is invalid or missing.");
          // In a real auth app, you would redirect here:
          // window.location.href = "/login"; 
          break;
        case 404:
          console.error("Resource not found: The movie/page doesn't exist.");
          break;
        case 429:
          console.warn("Too Many Requests: Slow down!");
          break;
        default:
          if (status >= 500) {
            console.error("Server Error: TMDB is having issues.");
          }
      }
    } 
    // No response received (Network Error / Offline)
    else if (error.request) {
      console.error("Network Error: Please check your internet connection.");
    } 
    // Request setup error
    else {
      console.error("Error setting up request:", error.message);
    }

    return Promise.reject(error);
  }
);

// 4. Image Helper (Updated with a more stable placeholder)
export const getImageUrl = (path, size = "w500") => {
  if (!path) return "https://placehold.co/500x750/09090b/22c55e?text=No+Image";
  return `${IMAGE_BASE_URL}/${size}${path}`;
};

export default api;