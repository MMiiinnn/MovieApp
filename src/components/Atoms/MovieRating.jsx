import Icon from "./Icon";

const MovieRating = ({ score }) => {
  return (
    <div className="flex items-center gap-1 text-yellow-400">
      <Icon name="star" className="text-sm! fill-current" />
      <span className="font-body text-xs font-bold">{score}</span>
    </div>
  );
};

export default MovieRating;
