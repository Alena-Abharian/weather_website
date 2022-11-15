import {createSlice} from '@reduxjs/toolkit';
import {getWeatherToday} from "./weatherOperations";

const weatherSlice = createSlice({
    name: "weather",
    initialState: {
        data: null,
        error: null,
    },
    extraReducers: {
        [getWeatherToday.pending]: (state) => {
            state.error = null;
        },
        [getWeatherToday.fulfilled]: (state, action) => {
            state.data = action.payload;
        },
        [getWeatherToday.rejected]: (state, action) => {
            state.error = action.payload;
        },
    }
})

export default weatherSlice.reducer;