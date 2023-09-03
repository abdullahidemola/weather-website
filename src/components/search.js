import { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { geoApiOptions, geoUrl } from "../Api/api";
import "./search.scss";
import { useNavigate } from "react-router-dom";
import { WEATHER_API_KEY, WEATHER_API_URL } from "../Api/api";

const Search = ({ onSearchChange }) => {
  const [search, setSearch] = useState(null);

  const navigate = useNavigate();

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

        console.log(weatherResponse);
        console.log(forecastResponse);
        // setCurrentWeather({ city: searchData.label, ...weatherResponse });
        // setCurrentForecast({ city: searchData.label, ...forecastResponse });
      })
      .catch((err) => console.log(err));
  };

  const onChangeHandler = (searchData) => {
    console.log(searchData);
    setSearch(searchData);
    searchChangeHandler(searchData);
    navigate("details");
  };

  const loadOptions = (inputValue) => {
    return fetch(
      `${geoUrl}/cities?minPopulation=1000000&namePrefix=${inputValue}`,
      geoApiOptions
    )
      .then((response) => response.json())
      .then((response) => {
        return {
          options: response.data.map((city) => {
            return {
              value: `${city.latitude} ${city.longitude}`,
              label: `${city.name}, ${city.countryCode}`,
            };
          }),
        };
      });
  };

  return (
    <div className="search-icon">
      <AsyncPaginate
        placeholder="Search for city"
        debounceTimeout={600}
        value={search}
        onChange={onChangeHandler}
        loadOptions={loadOptions}
      />
    </div>
  );
};

export default Search;
