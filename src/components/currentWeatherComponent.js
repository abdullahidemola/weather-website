import "./currentWeatherComponent.scss";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";


const days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const currentDay = new Date().getDay();
const forecastDays = days
  .slice(currentDay, days.length)
  .concat(days.slice(0, currentDay));

const CurrentWeatherComponent = ({ weatherData, forecastData }) => {
  

  return (
    <>
      <div className="cw-container">
        <div className="header-container">
          <div className="weather-header">
            <h1 className="city">{weatherData.city}</h1>
          </div>
          <div className="weathericon-container">
            <img
              src={`icons/${weatherData.weather[0].icon}.png`}
              alt="weather"
              className="weather-icon"
            />
            <p className="cloud">{weatherData.weather[0].description}</p>
          </div>
        </div>
        <div className="weather-data">
          <p className="temp">
            {Math.round(weatherData.main.temp * 10) / 10}°C
          </p>
          <div className="details">
            <div className="parameter">
              <span className="label">Feels like</span>
              <span className="value">
                {Math.round(weatherData.main.feels_like * 10) / 10}°C
              </span>
            </div>
            <div className="parameter">
              <span className="label">wind</span>
              <span className="value">{weatherData.wind.speed} m/s</span>
            </div>
            <div className="parameter">
              <span className="label">humidity</span>
              <span className="value">{weatherData.main.humidity}%</span>
            </div>
            <div className="parameter">
              <span className="label">Pressure</span>
              <span className="value">{weatherData.main.pressure}</span>
            </div>
            <div className="parameter"></div>
          </div>
        </div>
      </div>

      <div className="forecast-container">
        <Accordion allowZeroExpanded>
          {forecastData.list.slice(0, 7).map((item, index) => {
            return (
              <AccordionItem key={index} className="forecast-item">
                <AccordionItemHeading>
                  <AccordionItemButton className="forecast-header">
                    <div className="item-container">
                      <span className="day">{forecastDays[index]}</span>

                      <span className="min-max">
                        {Math.round(item.main.temp_min * 10) / 10} °C /
                        {Math.round(item.main.temp_max * 10) / 10} °C
                      </span>
                      <span className="small-icon-container">
                        <img
                          src={`icons/${item.weather[0].icon}.png`}
                          alt="weather"
                          className="small-icon"
                        />
                        <span className="description">
                          {item.weather[0].description}
                        </span>
                      </span>
                    </div>
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <div className="content-container">
                    <div className="content-section">
                      <div className="content">
                        <span>pressure: </span>
                        <span>{item.main.pressure}</span>
                      </div>
                      <div className="content">
                        <span>humidity: </span>
                        <span>{item.main.humidity}%</span>
                      </div>
                    </div>
                    <div className="content-section">
                      <div className="content">
                        <span>wind speed: </span>
                        <span>{item.wind.speed}m/s</span>
                      </div>
                      <div className="content">
                        <span>clouds: </span>
                        <span>{item.clouds.all}%</span>
                      </div>
                    </div>
                  </div>
                </AccordionItemPanel>
              </AccordionItem>
            );
          })}
        </Accordion>
      </div>
    </>
  );
};

export default CurrentWeatherComponent;
