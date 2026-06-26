import { useNavigate } from "react-router-dom";
import { useStore } from "../store/useStore";

import CategoryCard from "../components/category/CategoryCard";
import SelectedCategory from "../components/category/SelectedCategory";

import { categoriesData } from "../utils/constants";

const Category = () => {
  const navigate = useNavigate();

  const categories = useStore((state) => state.categories);
  const setCategories = useStore((state) => state.setCategories);

  const toggleCategory = (name) => {
    if (categories.includes(name)) {
      setCategories(categories.filter((item) => item !== name));
    } else {
      setCategories([...categories, name]);
    }
  };

  const removeCategory = (name) => {
    setCategories(categories.filter((item) => item !== name));
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      {/* Main Wrapper */}
      <div className="w-[1450px] flex items-center justify-center gap-[180px]">

        {/* ================= LEFT ================= */}
        <div className="w-[360px] flex flex-col justify-center py-8">

          <h1 className="text-[#72DB73] text-[48px] leading-none"
            style={{ fontFamily: "Poor Story" }}
          >
            Super app
          </h1>

          <div className="h-[38px]" />

          <h2 className="text-white font-bold text-[54px] leading-[72px] mt-8">
            Choose your
            <br />
            entertainment
            <br />
            category
          </h2>

          <div className="h-[36px]" />

          <div className="flex flex-wrap gap-4 mt-10 w-[340px]">
            {categories.map((item) => (
              <SelectedCategory
                key={item}
                name={item}
                remove={removeCategory}
              />
            ))}
          </div>

          <div className="h-[22px]" />

          {categories.length < 3 && (
            <div className="flex items-center gap-2 mt-8 text-[#FF0000] text-[20px]">
              <span className="text-[18px]">⚠</span>
              <span>Minimum 3 category required</span>
            </div>
          )}
        </div>

        {/* ================= RIGHT ================= */}
        <div className="w-[720px] flex flex-col items-end justify-center py-8">

          <div className="grid grid-cols-3 gap-x-7 gap-y-6">
            {categoriesData.map((category) => (
              <CategoryCard
                key={category.id}
                title={category.title}
                image={category.image}
                color={category.color}
                selected={categories.includes(category.title)}
                onClick={() => toggleCategory(category.title)}
              />
            ))}
          </div>

          <div className="h-[28px]" />

          <button
  disabled={categories.length < 3}
  onClick={() => navigate("/dashboard")}
  className="
    mt-10
    w-[135px]
    h-[34px]
    rounded-full
    bg-[#148A08]
    text-white
    text-[16px]
    font-normal
    flex
    items-center
    justify-center
    hover:bg-[#16990A]
    transition-all
    duration-200
    disabled:bg-gray-600
  "
>
  Next Page
</button>

        </div>
      </div>
    </div>
  );
};

export default Category;