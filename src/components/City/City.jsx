import React from 'react';
import {useSelector} from "react-redux";
import moment from 'moment';

const City = () => {
    const forecastData = useSelector(state => state.forecast.data)
    const dateNow = moment().format("dddd HH:mm ");

    return (
        <>
            {
                forecastData ?

                    <div>
                        <h2>{forecastData.city.name}</h2>
                        <p>{dateNow}</p>
                    </div>

                    : null
            }
        </>
    );
}

export default City;