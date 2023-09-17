import { createSlice } from "@reduxjs/toolkit";
import { WEATHER_API_KEY, WEATHER_API_URL } from "../Api/api";

// const initialState = {}
const fetchSlice = createSlice({
  name: "fetchy",
  initialState: {
    weatherResponseData: {},
    forecastResponseData: {},
  },

  reducers: {
    setWeatherResponseState: (state, action) => {
      state.weatherResponseData = action.payload.weatherResponseData
      state.forecastResponseData = action.payload.forecastResponseData

      console.log(action.payload)
        
    },
  },
});

export const { setWeatherResponseState } = fetchSlice.actions;
export default fetchSlice.reducer;
