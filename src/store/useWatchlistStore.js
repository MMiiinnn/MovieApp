import { create } from "zustand";
import { persist } from "zustand/middleware";
import toast from "react-hot-toast";

const useWatchlistStore = create(
  persist(
    (set, get) => ({
      watchlist: [],

      addToWatchlist: (movie) => {
        const { watchlist } = get();
        // Check if movie already exists
        if (watchlist.some((m) => m.id === movie.id)) {
          toast.error("Already in Watchlist!");
          return;
        }
        
        set((state) => ({
          watchlist: [movie, ...state.watchlist],
        }));
        toast.success("Added to Watchlist");
      },

      removeFromWatchlist: (movieId) => {
        set((state) => ({
          watchlist: state.watchlist.filter((m) => m.id !== movieId),
        }));
        toast.success("Removed from Watchlist");
      },

      isInWatchlist: (movieId) => {
        return get().watchlist.some((m) => m.id === movieId);
      },
      
      clearWatchlist: () => set({ watchlist: [] }),
    }),
    {
      name: "movie-watchlist", // key in localStorage
    }
  )
);

export default useWatchlistStore;
