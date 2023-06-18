import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {getForecast} from "../../redux/forecast/forecastOperations";
import {getWeatherToday} from "../../redux/weather/weatherOperations";

import s from "./Search.module.scss";

const Search = () => {
    const [search, setSearch] = useState()
    const dispatch = useDispatch();

    const onHandleQuery = (e) => {
        setSearch(e.target.value.toLowerCase());
    }

    const onHandlerSubmit = (e) => {
        e.preventDefault()
        dispatch(getForecast(search))
        dispatch(getWeatherToday(search))
    }

    return (
        <>
            <form onSubmit={onHandlerSubmit}>
                <input className={s.form} onChange={onHandleQuery} type="search" placeholder="Search"/>
            </form>
        </>


    );
}

export default Search;