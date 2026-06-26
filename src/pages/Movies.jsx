import { useEffect, useState } from "react";
import { useStore } from "../store/useStore";

import profile from "../assets/profile.png";

import MovieCard from "../components/movie/MovieCard";
import MovieModal from "../components/movie/MovieModal";

import {
  getMovies,
  getMovieDetails,
} from "../services/movieApi";

const Movies = () => {
  const categories = useStore((state) => state.categories);

  const [movies, setMovies] = useState({});
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    loadMovies();
  }, []);

  const loadMovies = async () => {
    const data = {};

    for (const category of categories) {
      const response = await getMovies(category);
      data[category] = response.slice(0, 4);
    }

    setMovies(data);
  };

  const openMovie = async (id) => {
    const details = await getMovieDetails(id);
    setSelectedMovie(details);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-black to-[#1d1d1d] text-white">

      {/* Fixed width container */}
      <div className="w-full flex justify-center">
        <div className="w-[1380px] pt-6 pb-10">

        {/* Header */}
        <div className="flex justify-between items-start mb-8 px-8">

          <h1 className="text-[#72DB73] text-[48px] leading-none"
            style={{ fontFamily: "Poor Story" }}
          >
            Super app
          </h1>

          <img
            src={profile}
            alt="Profile"
            className="w-16 h-16 rounded-full border-2 border-white object-cover"
          />

        </div>

        <div className="h-[12px]" />

        <h1 className="text-[22px] font-semibold mb-5 ml-8">
          Entertainment according to your choice
        </h1>

        <div className="h-[12px]" />

        {categories.map((category) => (
          <div key={category} className="mb-9">

            <h2 className="text-gray-400 text-[22px] mb-5 font-medium">
              {category}
            </h2>

            <div className="h-[12px]" />

            <div className="grid grid-cols-4 gap-x-8 gap-y-10">

              {movies[category]?.map((movie) => (
                <MovieCard
                  key={movie.imdbID}
                  movie={movie}
                  onClick={() => openMovie(movie.imdbID)}
                />
              ))}

            </div>

            <div className="h-[12px]" />

          </div>
        ))}

      </div>
      </div>

      <MovieModal
        movie={selectedMovie}
        close={() => setSelectedMovie(null)}
      />

    </div>
  );
};

export default Movies;