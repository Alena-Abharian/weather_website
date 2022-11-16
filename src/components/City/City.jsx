import React from 'react';
import {useSelector} from "react-redux";
import {Box, Typography} from "@mui/material";


const City = () => {
    const forecastData = useSelector(state => state.forecast.data)

    return (
        <>
            {
                forecastData ?

                    <Box component="div" sx={{display:'flex', justifyContent:'center'}}>
                        <Typography variant="h5" component="h5">
                            {forecastData.city.name}
                        </Typography>
                    </Box>

                    : null
            }
        </>
    );
}

export default City;