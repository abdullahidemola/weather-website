import { useSelector } from "react-redux";
import Search from "../components/search";
import CurrentWeatherComponent from "../components/currentWeatherComponent";
import { useNavigate } from "react-router-dom";
import sunbeach from "../images/sunbeach.jpg";

import "./detailsPage.scss";

const DetailsPage = () => {
  const fetchedWeatherData = useSelector((state) => state.fetchHandler);
  const forecastData = fetchedWeatherData.forecastResponseData;
  const weatherData = fetchedWeatherData.weatherResponseData;
  console.log(forecastData);
  const navigate = useNavigate();

  const onClickHandler = () => navigate("/");

  return (
    <div className="container ">
      <div className="container-header">
        <h2 className="home" onClick={onClickHandler}>
          home
        </h2>
        <div className="search-container">
          <Search />
        </div>
      </div>
      {weatherData.cod && (
        <CurrentWeatherComponent
          weatherData={weatherData}
          forecastData={forecastData}
        />
      )}
    </div>
  );
};

export default DetailsPage;
