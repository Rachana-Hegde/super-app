import { motion } from "framer-motion";

const MovieCard = ({ movie, onClick }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.04 }}
      transition={{ duration: 0.25 }}
      onClick={onClick}
      className="cursor-pointer"
    >
      <img
        src={
          movie.Poster !== "N/A"
            ? movie.Poster
            : "https://placehold.co/300x170"
        }
        alt={movie.Title}
        className="
          w-[260px]
          h-[140px]
          rounded-lg
          object-cover
          shadow-lg
        "
      />
    </motion.div>
  );
};

export default MovieCard;