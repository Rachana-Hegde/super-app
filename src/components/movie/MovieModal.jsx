const MovieModal = ({ movie, close }) => {
  if (!movie) return null;

  return (
    <div
      onClick={close}
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-6"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-[#181818] rounded-2xl overflow-hidden max-w-3xl w-full"
      >
        <img
          src={movie.Poster}
          alt={movie.Title}
          className="w-full h-[450px] object-cover"
        />

        <div className="p-6 text-white">

          <h2 className="text-3xl font-bold mb-4">
            {movie.Title}
          </h2>

          <div className="space-y-2 text-gray-300">

            <p>
              <span className="font-semibold text-white">
                Genre :
              </span>{" "}
              {movie.Genre}
            </p>

            <p>
              <span className="font-semibold text-white">
                Runtime :
              </span>{" "}
              {movie.Runtime}
            </p>

            <p>
              <span className="font-semibold text-white">
                Actors :
              </span>{" "}
              {movie.Actors}
            </p>

            <p>
              <span className="font-semibold text-white">
                IMDb :
              </span>{" "}
              ⭐ {movie.imdbRating}
            </p>

            <p className="pt-4 leading-7">
              {movie.Plot}
            </p>

          </div>

          <button
            onClick={close}
            className="mt-6 bg-red-600 hover:bg-red-700 px-6 py-3 rounded-lg font-semibold"
          >
            Close
          </button>

        </div>
      </div>
    </div>
  );
};

export default MovieModal;