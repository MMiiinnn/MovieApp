import { useEffect, useState } from "react";
import Input from "./Atoms/Input";
import HeroSection from "./HeroSection";
import MovieList from "./MovieList";
import MobileSideBar from "./Navigation/MobileSideBar";
import Navbar from "./Navigation/Navbar";

const movies = [
  {
    id: 1,
    title: "Star Wars: The Rise of Skywalker",
    desc: "The surviving members of the resistance face the First Order once again...",
    backdrop:
      "https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.jpg",

    poster: "https://image.tmdb.org/t/p/w500/db32vUioqsXRABvBRXY7S9K6Y8b.jpg",
    rating: 8.4,
    genres: ["Action", "Adventure", "Fantasy"],
    ageRating: "PG-13",
    type: "Movie",
  },
  {
    id: 2,
    title: "The Batman",
    desc: "Batman ventures into Gotham City's underworld when a sadistic killer leaves behind a trail of cryptic clues.",
    backdrop:
      "https://image.tmdb.org/t/p/original/5P8ViwpRhNPSiKU0clCc7Cg9Y9C.jpg",
    poster: "https://image.tmdb.org/t/p/w500/74xTEgt7R36Fpooo50r9T25onun.jpg",
    rating: 7.9,
    genres: ["Crime", "Drama", "Mystery"],
    ageRating: "R",
    type: "Movie",
  },
  {
    id: 3,
    title: "Spider-Man: No Way Home",
    desc: "With Spider-Man's identity now revealed, Peter asks Doctor Strange for help.",
    backdrop:
      "https://image.tmdb.org/t/p/original/14QbnygCuTO0mZPkCoF9fjA9mS5.jpg",
    poster: "https://image.tmdb.org/t/p/w500/1g0zzYpws9h9biS58uhI1OnyvKi.jpg",
    rating: 8.2,
    genres: ["Action", "Sci-Fi"],
    ageRating: "PG-13",
    type: "Movie",
  },
  {
    id: 4,
    title: "The Last of Us",
    desc: "Twenty years after modern civilization has been destroyed, Joel is hired to smuggle Ellie.",
    backdrop:
      "https://image.tmdb.org/t/p/original/uDgy6hyPd92UnS3IFpSyc9OQiOS.jpg",
    poster: "https://image.tmdb.org/t/p/w500/uKvH56B29db7hgCwqo1p4Lp1uoF.jpg",
    rating: 8.9,
    genres: ["Drama", "Action"],
    ageRating: "18+",
    type: "TV Series",
  },
];
function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000); // Simulate API call
    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      <HeroSection movies={movies} />
      <MovieList title="Just Release" movies={movies} isLoading={loading} />
      <MovieList
        title="Popular Of The Week"
        movies={movies}
        variant="popular"
        isLoading={loading}
      />
      <MovieList
        title=" Movies"
        movies={movies}
        imageType="landscape"
        isLoading={loading}
      />
      <MovieList
        title=" Top 10 today"
        movies={movies}
        variant="popular"
        isLoading={loading}
      />
      <MovieList
        title=" Series"
        movies={movies}
        imageType="landscape"
        isLoading={loading}
      />
      <MovieList
        title=" Korean Series"
        movies={movies}
        imageType="landscape"
        isLoading={loading}
      />
    </>
  );
}

export default Home;
