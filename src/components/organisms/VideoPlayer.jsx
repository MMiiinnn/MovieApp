import { useOutletContext } from "react-router-dom";

const VideoPlayer = () => {
  // We get the movie data directly from the Parent (MovieDetailPage)
  const { movie } = useOutletContext();

  // Using a common embed provider for the demo
  const videoSrc = `https://vidsrc.to/embed/movie/${movie.id}`;

  return (
    <div className="w-full aspect-video rounded-3xl overflow-hidden bg-black shadow-2xl border border-white/5 animate-in fade-in zoom-in duration-500">
      <iframe
        src={videoSrc}
        className="w-full h-full"
        allowFullScreen
        title={`Watching ${movie.title}`}
      ></iframe>
    </div>
  );
};

export default VideoPlayer;
