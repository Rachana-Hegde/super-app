import { useEffect, useState } from "react";
import axios from "axios";

const NewsCard = () => {
  const [articles, setArticles] = useState([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    fetchNews();
  }, []);

  useEffect(() => {
    if (!articles.length) return;

    const interval = setInterval(() => {
      setIndex((prev) =>
        prev === articles.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [articles]);

  const fetchNews = async () => {
    try {
      const res = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=us&apiKey=${
          import.meta.env.VITE_NEWS_KEY
        }`
      );

      setArticles(res.data.articles);
    } catch (err) {
      console.log(err);
    }
  };

  if (!articles.length) {
    return (
      <div className="w-[463px] h-[630px] rounded-[20px] bg-white flex items-center justify-center">
        Loading News...
      </div>
    );
  }

  const article = articles[index];

  return (
    <div className="w-[463px] h-[630px] rounded-[20px] overflow-hidden bg-white">

      {/* Image */}
      <div className="relative h-[430px]">

        <img
          src={
            article.urlToImage ||
            "https://placehold.co/463x430"
          }
          alt={article.title}
          className="w-full h-full object-cover"
        />

        {/* Dark Overlay */}
        <div className="absolute bottom-0 left-0 w-full bg-black/65 px-5 py-3">

          <h2 className="text-white text-[20px] font-medium leading-5">
            {article.title}
          </h2>

          <div className="flex items-center gap-3 mt-4 text-white text-[16px]">

            <span>
              {new Date().toLocaleDateString()}
            </span>

            <span>|</span>

            <span>
              {new Date().toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </span>

          </div>

        </div>

      </div>

      {/* Description */}
      <div className="px-8 py-6">

        <p className="text-[#2A2A2A] text-[16px] leading-[26px] text-justify line-clamp-[8]">

          {article.description ||
            article.content ||
            "No description available."}

        </p>

      </div>

    </div>
  );
};

export default NewsCard;