import Badge from "./Atoms/Badge";
import Button from "./Atoms/Button";
import Icon from "./Atoms/Icon";
import MovieRating from "./Atoms/MovieRating";
import { formatRuntime } from "./helper/formatRuntime";
import { getImageUrl } from "./services/apiConfig";
// import tmdbService from "./services/tmdbService";
import MovieCard from "./MovieCard"; // Giả sử bạn có MovieCard cho các item nhỏ
import MovieList from "./MovieList";

const AwardSection = ({ awardMovies, fastMovies, liveMovies, isLoading }) => {
  // Lấy bộ phim đầu tiên làm tiêu điểm cho phần 1
  const featuredMovie = awardMovies;

  const rank = featuredMovie.vote_average?.toFixed(1) || "0.0";
  // console.log(featuredMovie);

  if (isLoading || !featuredMovie) {
    return <div className="h-150 bg-zinc-900 animate-pulse rounded-xl" />;
  }

  return (
    <section className="px-6 lg:px-16 py-12 grid grid-cols-1 lg:grid-cols-12 gap-8 bg-black text-white">
      {/* PHẦN 1: MOVIES ON AWARDS (CHIẾM 6/12 CỘT) */}
      <div className="lg:col-span-6 flex flex-col">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-heading font-bold uppercase tracking-wider">
            Movies On Awards
          </h2>
          {/* <div className="flex gap-2">
            <Button variant="secondary">
              <Icon name="chevron_left" />
            </Button>
            <Button variant="secondary">
              <Icon name="chevron_right" />
            </Button>
          </div> */}
        </div>

        <div className="relative group overflow-hidden rounded-2xl aspect-video mb-6">
          <img
            src={getImageUrl(featuredMovie.backdrop_path, "original")}
            alt={featuredMovie.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent" />
        </div>

        <div className="space-y-4">
          <Badge className="block mb-2 w-fit bg-zinc-800 text-[10px] text-zinc-400 border-zinc-700">
            Best Pictures
          </Badge>
          <h3 className="text-5xl font-bold leading-none">
            {featuredMovie.title}
          </h3>

          <div className="flex items-center gap-4 text-sm text-zinc-400">
            <MovieRating score={rank} />
            <span>| {formatRuntime(featuredMovie.runtime)}</span>
            <span>| {featuredMovie.release_date?.split("-")[0]}</span>
            <span>
              |{" "}
              {featuredMovie.genres?.map((genre, index) => (
                <span key={genre.id || index}>
                  {genre.name || genre}
                  {index < featuredMovie.genres.length - 1 && " • "}
                </span>
              ))}
            </span>
          </div>

          <p className="text-zinc-400 text-sm leading-relaxed line-clamp-3 max-w-xl">
            {featuredMovie.desc}
          </p>

          <div className="flex gap-4 pt-4">
            <Button
              variant="primary"
              icon="play_arrow"
              className="px-8 py-3 rounded-xl!"
            >
              Play Now
            </Button>
            <Button
              variant="outline"
              icon="bookmark"
              className="px-8 py-3 rounded-xl!"
            >
              Add Watchlist
            </Button>
          </div>
        </div>
      </div>

      {/* PHẦN 2: FAST (CHIẾM 3/12 CỘT) */}
      <div className="lg:col-span-3 flex flex-col">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-heading font-bold uppercase">Fast</h2>
        </div>
        <div>
          {/* {fastMovies?.slice(0, 4).map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
              rank={rank}
              isLoading={isLoading}
            />
          ))} */}

          {/* Change the Swiper direction to Vertical!!! */}
          <MovieList
            movies={fastMovies?.slice(0, 4)}
            variant="popular"
            isLoading={isLoading}
            className="flex-col! gap-6"
          />
        </div>
      </div>

      {/* PHẦN 3: LIVE (CHIẾM 3/12 CỘT) */}
      <div className="lg:col-span-3 flex flex-col">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-heading font-bold uppercase flex items-center gap-2">
            Live{" "}
            <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
          </h2>
          <div className="flex gap-2">
            <button className="text-zinc-500 hover:text-white">
              <Icon icon="chevron_left" />
            </button>
            <button className="text-zinc-500 hover:text-white">
              <Icon icon="chevron_right" />
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          {liveMovies?.slice(0, 4).map((movie) => (
            <div key={movie.id} className="flex gap-4 group cursor-pointer">
              <div className="w-20 h-28 shrink-0 rounded-xl overflow-hidden shadow-lg border-2 border-transparent group-hover:border-green-500 transition-all">
                <img
                  src={movie.poster}
                  className="w-full h-full object-cover"
                  alt={movie.title}
                />
              </div>
              <div className="flex flex-col justify-center gap-1">
                <span className="text-[10px] text-zinc-500 font-bold border border-zinc-700 px-2 py-0.5 rounded w-fit">
                  PG-13
                </span>
                <h4 className="font-bold text-sm line-clamp-1 group-hover:text-green-500 transition-colors">
                  {movie.title}
                </h4>
                <p className="text-xs text-zinc-500">Comedy • Action</p>
                <div className="flex items-center gap-1 text-xs mt-1">
                  <Icon icon="star" className="text-yellow-500 text-[10px]" />
                  <span className="font-bold">{movie.rating}</span>
                  <span className="text-zinc-500 ml-1">| Movie</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AwardSection;
