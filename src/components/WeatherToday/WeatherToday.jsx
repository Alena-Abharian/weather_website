import React from 'react';
import {useSelector} from "react-redux";
import moment from "moment";
import {Box, CardContent, CardMedia, Typography} from "@mui/material";

import s from "./WeatherToday.module.scss"

const WeatherToday = () => {
    const weatherData = useSelector(state => state.weather.data);
    const dateNow = moment().format("dddd HH:mm ");

    return (
        <>
            {
                weatherData ?

                    <CardContent sx={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                        <Box component="div">
                            {weatherData.weather.map(({id, icon, main, description}) => (
                                <div key={id}>
                                    <CardMedia
                                        component="img"
                                        height="300"
                                        image={`https://openweathermap.org/img/wn/${icon}@2x.png`}
                                        alt={main}
                                    />
                                </div>
                            ))
                            }
                        </Box>

                        <Box component="div">
                            <Typography className={s.today} variant="h6" component="p">{dateNow}</Typography>
                            <Typography variant="h5" component="h5" color="text.secondary">
                                {Math.round(weatherData.main.temp)} ℃
                            </Typography>
                            <Typography variant="body1" component="p" color="text.secondary">
                                Wind: {Math.round(weatherData.wind.speed)} km/h
                            </Typography>
                            <Typography variant="body1" component="p" color="text.secondary">
                                Humidity: {Math.round(weatherData.main.humidity)} %
                            </Typography>
                        </Box>
                    </CardContent>

                    : null
            }
        </>
    );
}

export default WeatherToday;