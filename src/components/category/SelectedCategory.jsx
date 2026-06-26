const SelectedCategory = ({ name, remove }) => {
  return (
    <div
      className="
        h-[34px]
        min-w-[95px]
        px-[18px]
        bg-[#148A08]
        rounded-full
        flex
        items-center
        justify-between
        gap-[12px]
      "
    >
      <span
       style={{
    paddingLeft: "12px",
    paddingRight: "8px",
  }}
        className="
    flex-1
    ml-[8px]
    text-center
    text-white
    text-[16px]
    font-normal
    leading-none
  "
      >
        {name}
      </span>

      <button
        type="button"
        onClick={() => remove(name)}
        className="
          w-[20px]
          h-[16px]
          mr-[2px]
          flex
          items-center
          justify-center
          text-[#085C00]
          text-[18px]
          leading-none
        "
      >
        ×
      </button>
    </div>
  );
};

export default SelectedCategory;