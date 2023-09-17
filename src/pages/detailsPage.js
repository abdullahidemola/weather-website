import { useSelector } from "react-redux";
import ForecastComponent from "../components/forecastComponent";
import Search from "../components/search";
import CurrentWeatherComponent from "../components/currentWeatherComponent";
import "./detailsPage.scss"

const DetailsPage = () => {
  const fetchedWeatherData = useSelector((state)=> state.fetchHandler)
  const forecastData = fetchedWeatherData.forecastResponseData;
  const weatherData = fetchedWeatherData.weatherResponseData;

  return (
    <div className="container">
      <h2>home</h2>
      <div className="search-container">
        <Search />
      </div>
     <ForecastComponent forecastData={forecastData}/>
     <CurrentWeatherComponent weatherData = {weatherData}/>
    </div>
  );
};

export default DetailsPage;
