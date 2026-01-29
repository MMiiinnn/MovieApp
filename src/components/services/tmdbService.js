import { BASE_URL, getImageUrl, fetchConfig } from "./apiConfig";

const tmdbService = {
  // Helper to transform TMDB data to your App's format
  transformMovie: (movie) => ({
    id: movie.id,
    title: movie.title || movie.name,
    desc: movie.overview,
    poster: getImageUrl(movie.poster_path),
    backdrop: getImageUrl(movie.backdrop_path, "original"),
    rating: movie.vote_average?.toFixed(1) || "0.0",
    genres: ["Action", "Sci-Fi"], // We will map real genre names later
    type: movie.media_type === "tv" ? "TV Series" : "Movie",
    ageRating: "PG-13",
  }),

  getTrending: async () => {
    const response = await fetch(`${BASE_URL}/trending/all/day`, fetchConfig);
    const data = await response.json();
    return data.results.map(tmdbService.transformMovie);
  },

  getPopular: async () => {
    const response = await fetch(`${BASE_URL}/movie/popular`, fetchConfig);
    const data = await response.json();
    return data.results.map(tmdbService.transformMovie);
  },

  getTopRated: async () => {
    const response = await fetch(`${BASE_URL}/movie/top_rated`, fetchConfig);
    const data = await response.json();
    return data.results.map(tmdbService.transformMovie);
  },

  getNowPlaying: async () => {
    const response = await fetch(`${BASE_URL}/movie/now_playing`, fetchConfig);
    const data = await response.json();
    return data.results.map(tmdbService.transformMovie);
  },
  getUpComing: async () => {
    const response = await fetch(`${BASE_URL}/movie/upcoming`, fetchConfig);
    const data = await response.json();
    return data.results.map(tmdbService.transformMovie);
  },
  getTrendingMovies: async () => {
    const response = await fetch(
      `${BASE_URL}/trending/movie/week`,
      fetchConfig,
    );
    const data = await response.json();
    return data.results.map(tmdbService.transformMovie);
  },
  getPopularTV: async () => {
    const response = await fetch(`${BASE_URL}/tv/popular`, fetchConfig);
    const data = await response.json();
    return data.results.map(tmdbService.transformMovie); // transformMovie của bạn đã hỗ trợ cả TV
  },
  getTopToday: async () => {
    const response = await fetch(`${BASE_URL}/trending/all/day`, fetchConfig);
    const data = await response.json();
    return data.results.slice(0, 10).map(tmdbService.transformMovie); // Lấy đúng 10 phim
  },
  getKoreanTVSeries: async () => {
    const params = new URLSearchParams({
      with_original_language: "ko",
      sort_by: "popularity.desc",
      page: "1",
    });

    const response = await fetch(
      `${BASE_URL}/discover/tv?${params.toString()}`,
      fetchConfig,
    );
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    const data = await response.json();
    return data.results.map(tmdbService.transformMovie);
  },
  getMovieDetails: async (movieId) => {
    try {
      const response = await fetch(
        `${BASE_URL}/movie/${movieId}?language=en-US`,
        fetchConfig,
      );
      if (!response.ok) throw new Error("Failed to fetch details");
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Detail fetch error:", error);
      return null;
    }
  },
};

export default tmdbService;
