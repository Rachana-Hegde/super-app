const CategoryCard = ({
  title,
  image,
  color,
  selected,
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      className={`
        w-[225px]
        h-[190px]
        rounded-[18px]
        cursor-pointer
        transition-all
        duration-200
        relative
        overflow-hidden
        ${
          selected
            ? "border-[4px] border-[#11B800]"
            : "border-[4px] border-transparent"
        }
      `}
      style={{ backgroundColor: color }}
    >
      <h3 className="absolute top-[12px] left-[12px] text-white text-[28px] font-normal">
        {title}
      </h3>

      <img
        src={image}
        alt={title}
        className="
          absolute
          left-[12px]
          right-[12px]
          bottom-[12px]
          w-[calc(100%-24px)]
          h-[92px]
          object-cover
          rounded-[10px]
        "
      />
    </div>
  );
};

export default CategoryCard;