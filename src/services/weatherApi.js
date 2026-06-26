import axios from "axios";

const weatherApi = axios.create({
  baseURL:
    "https://api.openweathermap.org/data/2.5",
});

export const getWeather = async (
  city = "Bangalore"
) => {
  const response =
    await weatherApi.get(
      `/weather?q=${city}&units=metric&appid=${
        import.meta.env.VITE_WEATHER_KEY
      }`
    );

  return response.data;
};