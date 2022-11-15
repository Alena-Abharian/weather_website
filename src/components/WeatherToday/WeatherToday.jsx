import React from 'react';
import {useSelector} from "react-redux";

const WeatherToday = () => {
    const weatherData = useSelector(state => state.weather.data)

    return (
        <>
            {
                weatherData ?

                    <ul>
                        <li><p>{Math.round(weatherData.main.temp)} ℃</p></li>
                        <li><p>Wind: {Math.round(weatherData.wind.speed)} km/h</p></li>
                        <li><p>Humidity: {Math.round(weatherData.main.humidity)} %</p></li>
                        {weatherData.weather.map(({id, icon, main, description}) => (
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

export default WeatherToday;