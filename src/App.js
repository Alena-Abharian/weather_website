import Search from "./components/Search/Search";
import WeekWeatherList from "./components/WeekWeatherList/WeekWeatherList";
import City from "./components/City/City";
import WeatherToday from "./components/WeatherToday/WeatherToday";
import WeekDay from "./components/WeekDay/WeekDay";
import {useSelector} from "react-redux";
import {Box,Container} from "@mui/material";

import s from "./App.module.scss"

function App() {
    const dayData = useSelector(state => state.forecast.selectedDay)
    const weatherData = useSelector(state => state.weather.data);

    return (
        <Container sx={{mt: '20px'}}>
            <Search/>
            <Box component="div" sx={{display: "flex", justifyContent: 'center'}}>
                {
                    weatherData ?
                        <div className={s.wrap}>
                            <City/>
                            {dayData ?
                                <WeekDay/>
                                :
                                <WeatherToday/>
                            }
                        </div>
                        : null
                }
            </Box>
            <WeekWeatherList/>
        </Container>
    );
}

export default App;
