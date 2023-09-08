import { useState } from "react";
import { useLocation } from "react-router-dom";
import { AsyncPaginate } from "react-select-async-paginate";
import { geoApiOptions, geoUrl } from "../Api/api";
import "./search.scss";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getLatLng } from "../store/fetchSlice";

const Search = () => {
  const location = useLocation();
  const [search, setSearch] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onChangeHandler = (searchData) => {
    dispatch(getLatLng(searchData.value));
    console.log(searchData.value);
    setSearch(searchData);
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
