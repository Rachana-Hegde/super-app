import { useStore } from "../../store/useStore";
import profile from "../../assets/profile.png";

const ProfileCard = () => {
  const user = useStore((state) => state.user);
  const categories = useStore((state) => state.categories);

  return (
    <div className="w-[390px] h-[250px] bg-[#5746EA] rounded-[20px] flex items-center px-[18px]">

      {/* Profile Image */}
      <div className="profile-image">
        <img
          src={profile}
          alt="profile"
          className="
            w-[80px]
            h-[190px]
            object-cover
            rounded-[42px]
            border-[3px]
            border-white
            shadow-lg
          "
        />
      </div>

      {/* Right Section */}
      <div className="profile-content">

        <p className="text-white text-[14px] leading-[18px]">
          {user.name}
        </p>

        <p className="text-white text-[14px] leading-[18px] mt-[4px]">
          {user.email}
        </p>

        <h2 className="text-white text-[27px] font-semibold leading-none mt-[8px]">
          {user.username}
        </h2>

        <div className="h-[26px]" />

        <div className="mt-[34px] flex flex-wrap gap-x-[8px] gap-y-[10px]">

          {categories.slice(0, 4).map((item) => (
            <div
              key={item}
              className="
                w-[104px]
                h-[28px]
                bg-[#9F94FF]
                rounded-full
                flex
                items-center
                justify-center
                text-white
                text-[12px]
                font-normal
              "
            >
              {item}
            </div>
          ))}

        </div>

      </div>

    </div>
  );
};

export default ProfileCard;