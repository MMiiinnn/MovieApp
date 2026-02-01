import Badge from "./atoms/Badge";
import Button from "./atoms/Button";
import MovieRating from "./atoms/MovieRating";
import { formatRuntime } from "./helpers/formatRuntime";
import { getImageUrl } from "./services/apiConfig";
import Genres from "./atoms/Genres";
import SideMovieList from "./SideMovieList";

const AwardSection = ({
  awardMovies: featuredMovie,
  fastMovies,
  liveMovies,
  isLoading,
}) => {
  // Take the first Movie
  const rank = featuredMovie.vote_average?.toFixed(1) || "0.0";

  // console.log(featuredMovie);

  if (isLoading || !featuredMovie) {
    return <div className="h-150 bg-zinc-900 animate-pulse rounded-xl" />;
  }

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

      {/* FAST */}
      <SideMovieList title="Fast" movies={fastMovies} />

      {/* LIVE */}
      <SideMovieList title="Live" movies={liveMovies} isLive={true} />
    </section>
  );
};

export default AwardSection;
