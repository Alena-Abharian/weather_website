import {configureStore} from '@reduxjs/toolkit'
import forecastSlice from "./forecast/forecastSlice";
import weatherSlice from "./weather/weatherSlice";

export const store = configureStore({
    reducer: {
        forecast: forecastSlice,
        weather: weatherSlice,
    },
})