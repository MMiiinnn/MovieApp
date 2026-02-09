import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import tmdbService from "../services/tmdbService";
import MovieCard from "../molecules/MovieCard";
import MovieCardSkeleton from "../atoms/MovieCardSkeleton";
import Button from "../atoms/Button";
import Icon from "../atoms/Icon";

const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [activeFilter, setActiveFilter] = useState("all"); // 'all', 'Movie', 'TV Series'

  useEffect(() => {
    const fetchResults = async () => {
      setLoading(true);
      setActiveFilter("all"); // Reset filter on new search
      try {
        if (query) {
          const results = await tmdbService.search(query);
          setMovies(results);
        } else {
          // Default : Trending
          const results = await tmdbService.getTrending();
          setMovies(results);
        }
      } catch (err) {
        console.error(err);
        setMovies([]);
      } finally {
        setLoading(false);
      }
    };  

    fetchResults();
  }, [query]);

  // Derived state for filtering
  const filteredMovies = movies.filter((movie) => {
    if (activeFilter === "all") return true;
    return movie.type === activeFilter;
  });

  const filterOptions = [
    { id: "all", label: "All Results" },
    { id: "Movie", label: "Movies" },
    { id: "TV Series", label: "TV Shows" },
  ];

  return (
    <div className="pt-24 px-6 lg:px-16 min-h-screen">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <h2 className="text-3xl font-heading text-white border-l-4 border-green-500 pl-4">
          {query ? `Search Results for "${query}"` : "Discover Trending"}
        </h2>

        {/* Filters */}
        {!loading && movies.length > 0 && (
          <div className="flex gap-2">
            {filterOptions.map((opt) => (
              <Button
                key={opt.id}
                variant={activeFilter === opt.id ? "primary" : "secondary"}
                onClick={() => setActiveFilter(opt.id)}
                className="text-sm px-4 py-1.5! rounded-full!"
              >
                {opt.label} ({opt.id === "all" ? movies.length : movies.filter(m => m.type === opt.id).length})
              </Button>
            ))}
          </div>
        )}
      </div>

      {loading ? (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {[...Array(10)].map((_, i) => (
            <MovieCardSkeleton key={i} />
          ))}
        </div>
      ) : filteredMovies.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {filteredMovies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      ) : (
        /* Enhanced Empty State */
        <div className="flex flex-col items-center justify-center text-center text-zinc-500 mt-20 gap-4">
          <div className="bg-zinc-800/50 p-6 rounded-full inline-block mb-2">
            <Icon name="search_off" className="text-6xl text-zinc-600" />
          </div>
          <h3 className="text-2xl font-bold text-white">No matches found</h3>
          <p className="max-w-md">
            {query
              ? `We couldn't find any movies or TV shows matching "${query}" with the current filters.`
              : "No trending content found at the moment."}
          </p>
          {movies.length > 0 && activeFilter !== "all" && <Button variant="outline" onClick={() => setActiveFilter("all")}>
            Clear Filters
          </Button>}
        </div>
      )}
    </div>
  );
};

export default SearchPage;
