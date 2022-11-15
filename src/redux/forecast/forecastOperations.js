import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://api.openweathermap.org/';
const PERSONAL_KEY = 'cfa3a038cdb64a32c162d9be86ebe125';

export const getForecast = createAsyncThunk(
    "forecast/getForecast",
    async (query, thunkAPI) => {
        try {
            const res = await axios.get(`data/2.5/forecast?q=${query}&units=imperial&cnt=7&appid=${PERSONAL_KEY}`)
            return res.data
        } catch (err) {
            return thunkAPI.rejectWithValue('Sorry, server Error!');
        }
    }
);
