import { useEffect, useState } from "react";
import axios from "axios";
import {
  WiRain,
  WiStrongWind,
  WiHumidity,
  WiBarometer,
} from "react-icons/wi";

const WeatherCard = () => {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    fetchWeather();
  }, []);

  const fetchWeather = async () => {
    const res = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=Bangalore&units=metric&appid=${
        import.meta.env.VITE_WEATHER_KEY
      }`
    );

    setWeather(res.data);
  };

  if (!weather)
    return (
      <div className="w-[390px] h-[140px] bg-[#101744] rounded-[20px]" />
    );

  return (
    <div className="w-[390px] rounded-[20px] overflow-hidden">

      {/* Header */}
      <div className="h-[42px] bg-[#FF4ADE] flex justify-center gap-14 items-center px-6">

        <p className="text-white font-semibold text-[22px]">
          {`${new Date().getMonth() + 1}-${new Date().getDate()}-${new Date().getFullYear()}`}
        </p>

        <p className="text-white font-semibold text-[22px]">
          {new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </p>

      </div>

      {/* Body */}
      <div className="bg-[#101744] h-[130px] flex items-center justify-evenly">

        {/* Left */}
        <div className="flex flex-col items-center">

          <WiRain className="text-white text-[48px]" />

           <div className="h-[8px]" />

          <p className="text-white text-[13px]">
            Heavy rain
          </p>

        </div>

        <div className="w-[1px] h-[70px] bg-white/40" />

        {/* Middle */}
        <div className="flex flex-col items-center">

          <h2 className="text-white text-[28px] font-normal leading-none">
            {Math.round(weather.main.temp)}°C
          </h2>

           <div className="h-[14px]" />

          <div className="flex items-center gap-1 mt-2">

            <WiBarometer className="text-white text-[20px]" />

            <div>
              <p className="text-white text-[12px] leading-none font-normal">
                {weather.main.pressure} mbar
              </p>

              <p className="text-white text-[12px] leading-none font-normal">
                Pressure
              </p>
            </div>

          </div>

        </div>

        <div className="w-[1px] h-[70px] bg-white/40" />

        {/* Right */}
        <div className="space-y-4">

          <div className="flex items-center gap-2">

            <WiStrongWind className="text-white text-[24px]" />

            <div>
              <p className="text-white text-[12px] leading-none font-normal">
                {weather.wind.speed} km/h
              </p>

              <p className="text-white text-[12px] leading-none font-normal">
                Wind
              </p>
            </div>

          </div>

           <div className="h-[14px]" />

          <div className="flex items-center gap-2">

            <WiHumidity className="text-white text-[22px]" />

            <div>
              <p className="text-white text-[12px] leading-none font-normal">
                {weather.main.humidity}%
              </p>

              <p className="text-white text-[12px] leading-none font-normal">
                Humidity
              </p>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default WeatherCard;