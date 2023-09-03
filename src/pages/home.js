import Search from "../components/search";
import { useState } from "react";
import { WEATHER_API_KEY, WEATHER_API_URL } from "../Api/api";

const Home = () => {
  const [currentWeather, setCurrentWeather] = useState(null);

  const [currentForecast, setCurrentForecast] = useState(null);

  const searchChangeHandler = (searchData) => {
    const [lat, lon] = searchData.value.split(" ");
    const fetchWeather = fetch(
      `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );

    const fetchForecast = fetch(
      `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );

    Promise.all([fetchWeather, fetchForecast])
      .then(async (response) => {
        const weatherResponse = await response[0].json();

        const forecastResponse = await response[1].json();

        setCurrentWeather({ city: searchData.label, ...weatherResponse });
        setCurrentForecast({ city: searchData.label, ...forecastResponse });
      })
      .catch((err) => console.log(err));
  };

  console.log(currentForecast);
  console.log(currentWeather);
  return (
    <>
      <div>
        <Search onSearchChange={searchChangeHandler} />
      </div>
    </>
  );
};

export default Home;
