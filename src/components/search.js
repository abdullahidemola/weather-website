import { useState } from "react";
import { useLocation } from "react-router-dom";
import { AsyncPaginate } from "react-select-async-paginate";
import { geoApiOptions, geoUrl } from "../Api/api";
import "./search.scss";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setWeatherResponseState } from "../store/fetchSlice";
import { WEATHER_API_KEY, WEATHER_API_URL } from "../Api/api";

const Search = ({ className }) => {
  const location = useLocation();
  const [search, setSearch] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onChangeHandler = (searchData) => {
    setSearch(searchData);

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

        dispatch(
          setWeatherResponseState({
            weatherResponseData: { city: searchData.label, ...weatherResponse },
            forecastResponseData: {
              city: searchData.label,
              ...forecastResponse,
            },
          })
        );
      })
      .catch((err) => console.log(err));

    console.log(searchData.value);
    if (location.pathname !== "/details") {
      navigate("details");
    }
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
    <div className={className}>
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
