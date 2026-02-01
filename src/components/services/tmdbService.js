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
  getMovieDetails: async (movieId, options = { extended: false }) => {
    try {
      const { extended } = options;

      // Sử dụng URLSearchParams để quản lý query parameters chuyên nghiệp hơn
      const queryParams = new URLSearchParams();
      if (extended) {
        queryParams.append("append_to_response", "videos,credits,similar");
      }

      // Chuyển params thành chuỗi, nếu có dữ liệu thì thêm dấu "?" phía trước
      const queryString = queryParams.toString();
      const finalUrl = `${BASE_URL}/movie/${movieId}${queryString ? `?${queryString}` : ""}`;

      // Fetch sử dụng URL sạch (API_KEY đã nằm trong fetchConfig.headers.Authorization)
      const response = await fetch(finalUrl, fetchConfig);

      if (!response.ok) throw new Error("Không thể lấy thông tin chi tiết");
      const data = await response.json();

      // 1. Chuyển đổi dữ liệu cơ bản
      const movie = tmdbService.transformMovie(data);

      // 2. Trả về object kết hợp (Hợp nhất dữ liệu nhẹ và nặng)
      return {
        ...movie,
        runtime: data.runtime, // Phục vụ AwardSection
        genres: data.genres?.map((g) => g.name) || [],

        // Chỉ xử lý các mảng dữ liệu lớn nếu extended = true
        ...(extended && {
          cast: data.credits?.cast?.slice(0, 8).map((c) => ({
            id: c.id,
            name: c.name,
            profile: getImageUrl(c.profile_path),
            character: c.character,
          })),
          trailer: data.videos?.results?.find((v) => v.type === "Trailer")?.key,
          similar: data.similar?.results
            ?.slice(0, 6)
            .map(tmdbService.transformMovie),
        }),
      };
    } catch (error) {
      console.error("Lỗi khi lấy chi tiết phim:", error);
      return null;
    }
  },
};

export default tmdbService;
