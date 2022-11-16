import React from 'react';
import {useSelector} from "react-redux";
import {Box, CardContent, CardMedia, Typography} from "@mui/material";

const WeekDay = () => {
    const dayData = useSelector(state => state.forecast.selectedDay)
    const weekDay = useSelector(state => state.forecast.weekDay)

    return (
        <>
            {
                dayData ?
                    <CardContent sx={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                        <Box component="div">
                            {dayData.weather.map(({id, icon, main}) => (
                                <div key={id}>
                                    <CardMedia
                                        component="img"
                                        height="100"
                                        image={`https://openweathermap.org/img/wn/${icon}@2x.png`}
                                        alt={main}
                                    />
                                </div>
                            ))
                            }
                        </Box>
                        <Box component="div">
                            <Typography variant="h6" component="p">{weekDay}</Typography>
                            <Typography variant="h5" component="h5" color="text.secondary">
                                {Math.round(dayData.main.temp)} ℃
                            </Typography>
                            <Typography variant="body1" component="p" color="text.secondary">
                                Wind: {Math.round(dayData.wind.speed)} km/h
                            </Typography>
                            <Typography variant="body1" component="p" color="text.secondary">
                                Humidity: {Math.round(dayData.main.humidity)} %
                            </Typography>
                        </Box>
                    </CardContent>

                    : null
            }
        </>
    );
}

export default WeekDay;