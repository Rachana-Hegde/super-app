import axios from "axios";

const movieApi = axios.create({
  baseURL:
    "https://www.omdbapi.com",
});

export const getMovies = async (
  category
) => {
  const response =
    await movieApi.get(
      `/?apikey=${
        import.meta.env.VITE_OMDB_KEY
      }&s=${category}`
    );

  return response.data.Search || [];
};

export const getMovieDetails =
  async (id) => {
    const response =
      await movieApi.get(
        `/?apikey=${
          import.meta.env.VITE_OMDB_KEY
        }&i=${id}`
      );

    return response.data;
  };
  