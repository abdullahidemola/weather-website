import { createSlice } from "@reduxjs/toolkit";

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
    },
  },
});

export const { setWeatherResponseState } = fetchSlice.actions;
export default fetchSlice.reducer;
