import { useNavigate } from "react-router-dom";

const BrowseButton = () => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate("/movies")}
      className="
        w-[110px]
        h-[30px]
        rounded-full
        bg-[#148A08]
        text-white
        text-[16px]
        font-medium
        hover:bg-[#17940A]
        transition-all
        duration-200
        shadow-lg
      "
    >
      Browse
    </button>
  );
};

export default BrowseButton;