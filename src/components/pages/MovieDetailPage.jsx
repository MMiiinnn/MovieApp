import { useParams } from "react-router-dom";
import { useEffect } from "react";
// import { movieService } from "../services/movieService";

const MovieDetailPage = () => {
  const { movieId } = useParams(); // Lấy đúng tên biến đã đặt ở route :movieId
  // const [movie, setMovie] = useState(null);

  useEffect(() => {
    // Logic fetch data dựa trên movieId
    // movieService.getMovieById(movieId).then(...)
  }, [movieId]);

  return (
    <div className="text-white pt-24 px-6 lg:px-16">
      <h1 className="text-4xl font-bold">Movie ID: {movieId}</h1>
      {/* Build UI chi tiết phim ở đây */}
    </div>
  );
};

export default MovieDetailPage;
