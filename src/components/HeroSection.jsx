import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import Button from "./Atoms/Button";

const HeroSection = ({ movies }) => {
  if (!movies || movies.length === 0)
    return <div className="h-screen bg-black" />;
  return (
    <section className="h-[75vh] lg:h-screen w-full bg-black">
      <Swiper
        modules={[Pagination, Autoplay, EffectFade]}
        effect="fade"
        speed={800}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 5000 }}
        pagination={{ clickable: true }}
        className="hero-swiper h-full w-full"
      >
        {movies.slice(0, 6).map((movie) => (
          <SwiperSlide key={movie.id} className="border-none">
            <div className="relative h-full w-full">
              {/* Backdrop */}
              <img
                src={movie.backdrop}
                className="absolute inset-0 w-full h-full object-cover object-top  origin-center"
                alt={movie.title}
              />

              {/* Gradient Overlays */}
              <div className="absolute -inset-px bg-linear-to-r from-black via-black/40 to-transparent" />
              <div className="absolute -inset-px bg-linear-to-t from-zinc-950 via-transparent to-transparent" />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-center px-6 lg:px-16 max-w-3xl">
                <h1 className="text-4xl lg:text-7xl font-bold text-white mb-4">
                  {movie.title}
                </h1>
                <p className="text-gray-300 text-sm lg:text-lg mb-8 line-clamp-3">
                  {movie.desc}{" "}
                  <span className="text-green-500 cursor-pointer">
                    Read more
                  </span>
                </p>

                <div className="flex items-center gap-4">
                  <Button
                    variant="primary"
                    icon="play_arrow"
                    className="px-6 py-3 rounded-md! font-bold!"
                  >
                    Watch Trailer
                  </Button>

                  <Button
                    variant="outline"
                    icon="add"
                    className="px-6 py-3 rounded-md!"
                  >
                    Add Watchlist
                  </Button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default HeroSection;
