import axios from "axios";

const newsApi = axios.create({
  baseURL:
    "https://newsapi.org/v2",
});

export const getNews = async () => {
  const response =
    await newsApi.get(
      `/top-headlines?country=us&apiKey=${
        import.meta.env.VITE_NEWS_KEY
      }`
    );

  return response.data.articles;
};