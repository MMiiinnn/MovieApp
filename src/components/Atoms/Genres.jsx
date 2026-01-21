import Icon from "./Icon";

const Genres = ({ genres, icon = false }) => {
  return (
    <>
      {icon && <Icon name="Theaters" className="text-zinc-400! text-xs!" />}
      <p className="font-body text-zinc-400 text-xs truncate">
        {genres?.slice(0, 2).join(" • ")}
      </p>
    </>
  );
};

export default Genres;
