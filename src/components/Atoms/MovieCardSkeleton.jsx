// src/components/Atoms/MovieCardSkeleton.jsx

const MovieCardSkeleton = ({ variant = "vertical" }) => {
  // Skeleton for the Popular/Horizontal variant
  if (variant === "horizontal") {
    return (
      <div className="flex items-center gap-4 py-4 animate-pulse">
        {/* Fake Rank Number */}
        <div className="w-12 h-16 bg-zinc-800 rounded-lg" />
        {/* Fake Poster */}
        <div className="w-28 lg:w-32 aspect-2/3 bg-zinc-800 rounded-xl" />
        {/* Fake Info */}
        <div className="flex-1 space-y-3">
          <div className="h-4 bg-zinc-800 rounded w-3/4" />
          <div className="h-3 bg-zinc-700 rounded w-1/2" />
          <div className="flex gap-2">
            <div className="h-3 bg-zinc-800 rounded w-10" />
            <div className="h-3 bg-zinc-800 rounded w-16" />
          </div>
        </div>
      </div>
    );
  }

  // Skeleton for the Default Vertical variant
  return (
    <div className="flex flex-col gap-3 animate-pulse">
      {/* Fake Poster */}
      <div className="aspect-2/3 w-full bg-zinc-800 rounded-2xl" />
      {/* Fake Title */}
      <div className="h-4 bg-zinc-800 rounded w-3/4" />
      {/* Fake Meta Info */}
      <div className="flex gap-2">
        <div className="h-3 bg-zinc-700 rounded w-1/4" />
        <div className="h-3 bg-zinc-700 rounded w-1/4" />
      </div>
    </div>
  );
};

export default MovieCardSkeleton;
