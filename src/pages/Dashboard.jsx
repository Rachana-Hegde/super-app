import ProfileCard from "../components/dashboard/ProfileCard";
import WeatherCard from "../components/dashboard/WeatherCard";
import NotesCard from "../components/dashboard/NotesCard";
import NewsCard from "../components/dashboard/NewsCard";
import Timer from "../components/dashboard/Timer";
import BrowseButton from "../components/dashboard/BrowseButton";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-black flex justify-center items-center py-10">
      <div className="w-[1310px]">

        {/* Top */}
        <div className="flex gap-10">

          {/* Left */}
          <div className="w-[980px]">

            <div className="flex gap-10">

              <div className="flex flex-col gap-6">
                <ProfileCard />
                <WeatherCard />
              </div>

              <NotesCard />

            </div>

            <div className="h-[22px]" />

            <div className="mt-7">
              <Timer />
            </div>

          </div>

          {/* Right */}
          <div className="w-[463px] flex flex-col">

            <NewsCard />

            <div className="h-[16px]" />

            <div className="flex justify-end mt-6">
              <BrowseButton />
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};

export default Dashboard;