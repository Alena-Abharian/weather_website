import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://api.openweathermap.org/';
const PERSONAL_KEY = 'cfa3a038cdb64a32c162d9be86ebe125';

export const getWeatherToday = createAsyncThunk(
    "weather/getWeatherToday",
    async (query, thunkAPI) => {
        try {
            const res = await axios.get(`data/2.5/weather?q=${query}&units=imperial&appid=${PERSONAL_KEY}`)
            return res.data
        } catch (err) {
            return thunkAPI.rejectWithValue('Sorry, server Error!');
        }
    }
);
