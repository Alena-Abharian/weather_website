import React from 'react';
import {useSelector} from "react-redux";

const WeekDay = () => {
    const dayData = useSelector(state => state.forecast.selectedDay)
    const weekDay = useSelector(state => state.forecast.weekDay)

    return (
        <>
            {
                dayData ?

                    <ul>
                        <li>{weekDay}</li>
                        <li><p>{Math.round(dayData.main.temp)} ℃</p></li>
                        <li><p>Wind: {Math.round(dayData.wind.speed)} km/h</p></li>
                        <li><p>Humidity: {Math.round(dayData.main.humidity)} %</p></li>
                        {dayData.weather.map(({id, icon, main, description}) => (
                            <li key={id}>
                                <img src={`https://openweathermap.org/img/wn/${icon}@2x.png`} alt={description}/>
                                <p>{main}</p>
                            </li>
                        ))
                        }
                    </ul>

                    : null
            }
        </>
    );
}

export default WeekDay;