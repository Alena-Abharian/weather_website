import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {getForecast} from "../../redux/forecast/forecastOperations";
import {getWeatherToday} from "../../redux/weather/weatherOperations";

const Search = () => {
    const [search, setSearch] = useState()
    const dispatch = useDispatch()

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
                <input type='text' onChange={onHandleQuery}/>
                <button>Search</button>
            </form>
        </>

    );
}

export default Search;