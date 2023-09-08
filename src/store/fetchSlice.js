import { createSlice } from "@reduxjs/toolkit";
import { WEATHER_API_KEY, WEATHER_API_URL } from "../Api/api";

const fetchSlice = createSlice({
  name: "fetchy",
  initialState: {
    weatherResponse: "",
    forecastResponse: "",
  },

  reducers: {
    getLatLng: (state, action) => {
      const [lat, lon] = action.payload.split(" ");
      console.log(lat, lon);
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

          state = { weatherResponse, forecastResponse };
          console.log(weatherResponse);
          console.log(forecastResponse);
        })
        .catch((err) => console.log(err));
    },
  },
});

export const { getLatLng } = fetchSlice.actions;
export default fetchSlice.reducer;
