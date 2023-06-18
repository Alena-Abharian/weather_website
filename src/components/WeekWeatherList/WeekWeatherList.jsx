import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import moment from "moment";
import {selectedDayItem, weekDayItem} from '../../redux/forecast/forecastSlice'
import {CardContent, CardMedia, Grid, Typography} from "@mui/material";

import s from './WeekWeatherList.module.scss';

const WeekWeatherList = () => {
    const forecastData = useSelector(state => state.forecast.data);
    const dispatch = useDispatch()

    const weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    const dayInAWeek = moment().format("dddd");
    const forecastDays = weekDays.slice(dayInAWeek, weekDays.length).concat(
        weekDays.slice(0, dayInAWeek));

    const onHandlerDay = (id, weekDay) => {
        const selectedDay = forecastData.list.find(item => item.dt === id)
        dispatch(selectedDayItem(selectedDay))
        dispatch(weekDayItem(weekDay))
    }

    return (

        <>
            {
                forecastData ?

                    <Grid container spacing={2}>
                        {forecastData.list.map(({dt, weather: [{icon, main}], main: {temp}}, i) => (
                            <Grid item
                                  key={dt}
                                  onClick={() => onHandlerDay(dt, forecastDays[i])}
                            >
                                <div className={s.card}>
                                    <CardMedia
                                        component="img"
                                        height="150"
                                        image={`https://openweathermap.org/img/wn/${icon}@2x.png`}
                                        alt={main}
                                    />
                                    <CardContent>
                                        <Typography
                                            variant="body2"
                                            color="text.secondary"
                                            sx={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}
                                        >
                                            {Math.round(temp)} ℃
                                        </Typography>
                                        <Typography
                                            variant="h6"
                                            component="div"
                                            sx={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}
                                        >
                                            {forecastDays[i]}
                                        </Typography>
                                    </CardContent>
                                </div>
                            </Grid>
                        ))
                        }
                    </Grid>

                    : null
            }

        </>
    );
}

export default WeekWeatherList;