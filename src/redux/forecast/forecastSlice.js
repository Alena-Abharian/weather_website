import {createSlice} from '@reduxjs/toolkit';
import {getForecast} from "./forecastOperations";

const forecastSlice = createSlice({
    name: "forecast",
    initialState: {
        data: null,
        selectedDay: null,
        weekDay: '',
        error: null,
    },
    reducers: {
        selectedDayItem: (state, action) => {
            state.selectedDay = action.payload;
        },

        weekDayItem: (state, action) => {
            state.weekDay = action.payload;
        }
    },
    extraReducers: {
        [getForecast.pending]: (state) => {
            state.error = null;
        },
        [getForecast.fulfilled]: (state, action) => {
            state.data = action.payload;
        },
        [getForecast.rejected]: (state, action) => {
            state.error = action.payload;
        },
    }
})

export const {selectedDayItem} = forecastSlice.actions;
export const {weekDayItem} = forecastSlice.actions;
export default forecastSlice.reducer;