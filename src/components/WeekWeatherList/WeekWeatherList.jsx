import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import moment from "moment";
import s from './WeekWeatherList.module.css'
import {selectedDayItem, weekDayItem} from '../../redux/forecast/forecastSlice'

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

                    <ul className={s.list}>
                        {forecastData.list.map(({dt, weather: [{icon, main}], main: {temp}}, i) => (
                            <li className={s.item} key={dt} onClick={() => onHandlerDay(dt, forecastDays[i])}>
                                <p className={s.day}>{forecastDays[i]}</p>
                                <img className={s.pic} src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
                                     alt={main}/>
                                <p className={s.temp}>{Math.round(temp)} ℃</p>
                            </li>
                        ))
                        }
                    </ul>

                    : null
            }

        </>
    );
}

export default WeekWeatherList;