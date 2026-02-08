import toast from "react-hot-toast";
import { create } from "zustand";
import { persist } from "zustand/middleware";


const useTestStoreTest = create(
    persist((set, get)=>({
    watchList: [],
    addToWatchList: (newMovie)=>{
        const {watchList} = get();
        if(watchList.some((movie)=>movie.id === newMovie.id)){
            toast.error("Already in Watchlist!")
            return;
        }
        set((state)=>({
            watchList: [newMovie, ...state.watchList]
        }))
        toast.success("Added to Watchlist")
    }
    
}),{name:"test"}))