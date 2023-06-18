import React from 'react';
import {useSelector} from "react-redux";
import {Box} from "@mui/material";

import s from "./City.module.scss"


const City = () => {
    const forecastData = useSelector(state => state.forecast.data)

    return (
        <>
            {
                forecastData ?

                    <Box component="div" sx={{display:'flex', justifyContent:'center'}}>
                        <h5 className={s.city} >
                            {forecastData.city.name}
                        </h5>
                    </Box>

                    : null
            }
        </>
    );
}

export default City;