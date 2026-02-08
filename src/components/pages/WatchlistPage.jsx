import useWatchlistStore from "../../store/useWatchlistStore";
import MovieCard from "../molecules/MovieCard";
import Icon from "../atoms/Icon";
import Button from "../atoms/Button";
import { Link } from "react-router-dom";

const WatchlistPage = () => {
  const { watchlist, clearWatchlist } = useWatchlistStore();

  return (
    <div className="pt-28 px-6 lg:px-16 min-h-screen bg-zinc-950 text-white">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <h2 className="text-3xl font-heading text-white border-l-4 border-green-500 pl-4 uppercase tracking-wider">
          My Watchlist
        </h2>

        {watchlist.length > 0 && (
          <Button
            variant="outline"
            className="text-red-500 hover:text-red-400 hover:border-red-500"
            onClick={() => {
              if (
                window.confirm("Are you sure you want to clear your watchlist?")
              ) {
                clearWatchlist();
              }
            }}
          >
            Clear All
          </Button>
        )}
      </div>

      {watchlist.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {watchlist.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center text-center text-zinc-500 mt-20 gap-6 animate-in fade-in slide-in-from-bottom-10 duration-700">
          <div className="bg-zinc-900/50 p-8 rounded-full shadow-[0_0_40px_rgba(22,163,74,0.1)]">
            <Icon name="bookmark_border" className="text-8xl text-zinc-700" />
          </div>
          <div className="space-y-2">
            <h3 className="text-2xl font-bold text-white">
              Your watchlist is empty
            </h3>
            <p className="max-w-md text-zinc-400">
              Movies you add to your watchlist will appear here. Start exploring
              to find your next favorite!
            </p>
          </div>
          <Link to="/">
            <Button
              variant="primary"
              className="px-8 py-3 rounded-full! font-bold! text-lg!"
            >
              Browse Movies
            </Button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default WatchlistPage;
