import Icon from "./Icon";

const Genres = ({ genres, icon = false, limit = 2, className = "" }) => {
  if (!genres || genres.length === 0) return null;

  // Array Object [{name: 'Action'}] to Array String ['Action']
  const genreNames = genres.map((g) => (typeof g === "object" ? g.name : g));

  return (
    <div className={`flex items-center gap-1.5 ${className}`}>
      {icon && <Icon name="Theaters" className="text-zinc-500! text-xl!" />}

      <p className="font-body text-zinc-400 text-xs truncate leading-none">
        {genreNames.slice(0, limit).join(" • ")}
      </p>
    </div>
  );
};

export default Genres;
