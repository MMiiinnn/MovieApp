import { useRef } from "react";
import Badge from "./Atoms/Badge";
import Button from "./Atoms/Button";
import Icon from "./Atoms/Icon";
import MovieRating from "./Atoms/MovieRating";
import { formatRuntime } from "./helper/formatRuntime";
import { getImageUrl } from "./services/apiConfig";
import Genres from "./Atoms/Genres";

const AwardSection = ({
  awardMovies: featuredMovie,
  fastMovies,
  liveMovies,
  isLoading,
}) => {
  const fastListRef = useRef(null);
  const liveListRef = useRef(null);

  // Take the first Movie
  const rank = featuredMovie.vote_average?.toFixed(1) || "0.0";

  // console.log(featuredMovie);

  if (isLoading || !featuredMovie) {
    return <div className="h-150 bg-zinc-900 animate-pulse rounded-xl" />;
  }

  const handleScroll = (ref, direction) => {
    if (ref.current) {
      // Calculate scroll distance
      const scrollAmount = direction === "left" ? -320 : 320;

      ref.current.scrollBy({
        top: scrollAmount, // lists are vertical
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="px-6 lg:px-16 py-12 grid grid-cols-1 lg:grid-cols-12 gap-8 bg-black text-white">
      {/* MOVIES ON AWARDS */}
      <div className="lg:col-span-6 flex flex-col">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-heading font-bold uppercase tracking-wider">
            Movies On Awards
          </h2>
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

            <Genres genres={featuredMovie.genres} />
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

      {/* FAST  */}
      <div className="lg:col-span-3 flex flex-col w-full">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl lg:text-2xl font-heading font-bold uppercase text-white">
            Fast
          </h2>
          <div className="flex gap-2">
            <Button
              variant="ghost"
              onClick={() => handleScroll(fastListRef, "up")}
            >
              <Icon name="chevron_left" className="rotate-90 lg:rotate-0" />
            </Button>
            <Button
              variant="ghost"
              onClick={() => handleScroll(fastListRef, "down")}
            >
              <Icon name="chevron_right" className="rotate-90 lg:rotate-0" />
            </Button>
          </div>
        </div>

        {/* List */}
        <div
          ref={fastListRef}
          className="flex flex-col gap-6 h-100 lg:h-137.5 overflow-y-auto no-scrollbar scroll-smooth"
        >
          {fastMovies?.map((movie) => (
            <div
              key={movie.id}
              className="flex gap-4 group cursor-pointer shrink-0"
            >
              <div className="w-16 h-24 lg:w-20 lg:h-28 shrink-0 rounded-xl overflow-hidden border-2 border-transparent group-hover:border-green-500 transition-all">
                <img
                  src={movie.poster}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  alt={movie.title}
                />
              </div>

              <div className="flex flex-col justify-center gap-1 min-w-0">
                <Badge className="mb-1 w-fit bg-zinc-800 text-[10px] text-zinc-400">
                  {movie.ageRating || "PG-13"}
                </Badge>
                <h4 className="font-bold text-sm text-white truncate group-hover:text-green-500 transition-colors">
                  {movie.title}
                </h4>
                <Genres genres={movie.genres} icon />
                <div className="flex items-center gap-1 text-xs mt-1">
                  <Icon name="star" className="text-yellow-500 text-[10px]" />
                  <span className="font-bold text-white">{movie.rating}</span>
                  <span className="text-zinc-500 ml-1">| Movie</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* LIVE  */}
      <div className="lg:col-span-3 flex flex-col w-full">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl lg:text-2xl font-heading font-bold uppercase flex items-center gap-2 text-white">
            Live{" "}
            <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse shadow-[0_0_8px_rgba(220,38,38,0.8)]" />
          </h2>
          <div className="flex gap-2">
            <Button
              variant="ghost"
              onClick={() => handleScroll(liveListRef, "up")}
            >
              <Icon name="chevron_left" className="rotate-90 lg:rotate-0" />
            </Button>
            <Button
              variant="ghost"
              onClick={() => handleScroll(liveListRef, "down")}
            >
              <Icon name="chevron_right" className="rotate-90 lg:rotate-0" />
            </Button>
          </div>
        </div>

        {/* List */}
        <div
          ref={liveListRef}
          className="flex flex-col gap-6 h-100 lg:h-137.5 overflow-y-auto no-scrollbar scroll-smooth"
        >
          {liveMovies?.map((movie) => (
            <div
              key={movie.id}
              className="flex gap-4 group cursor-pointer shrink-0"
            >
              <div className="w-16 h-24 lg:w-20 lg:h-28 shrink-0 rounded-xl overflow-hidden border-2 border-transparent group-hover:border-red-500 transition-all duration-300">
                <img
                  src={movie.poster}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  alt={movie.title}
                />
              </div>

              <div className="flex flex-col justify-center gap-1 min-w-0">
                <Badge className="mb-1 w-fit bg-zinc-800 text-[10px] text-zinc-400 border-zinc-700">
                  {movie.ageRating || "PG-13"}
                </Badge>
                <h4 className="font-bold text-sm text-white truncate group-hover:text-red-500 transition-colors">
                  {movie.title}
                </h4>
                <p className="text-xs text-zinc-500 truncate">
                  Variety • Reality
                </p>
                <div className="flex items-center gap-1 text-xs mt-1">
                  <Icon name="star" className="text-yellow-500 text-[10px]" />
                  <span className="font-bold text-white">{movie.rating}</span>
                  <span className="text-zinc-500 ml-1">| Live</span>
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
