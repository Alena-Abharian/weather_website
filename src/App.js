import Search from "./components/Search/Search";
import WeekWeatherList from "./components/WeekWeatherList/WeekWeatherList";
import City from "./components/City/City";
import WeatherToday from "./components/WeatherToday/WeatherToday";
import WeekDay from "./components/WeekDay/WeekDay";
import {useSelector} from "react-redux";
import {Box, Card, Container} from "@mui/material";

function App() {
    const dayData = useSelector(state => state.forecast.selectedDay)
    const weatherData = useSelector(state => state.weather.data);

    return (
        <Container sx={{mt: '20px'}}>
            <Search/>
            <Box component="div" sx={{display: "flex", justifyContent: 'center'}}>
                {
                    weatherData ?
                        <Card sx={{mt: '20px', mb: '20px', p: '20px 80px'}}>
                            <City/>
                            {dayData ?
                                <WeekDay/>
                                :
                                <WeatherToday/>
                            }
                        </Card>
                        : null
                }
            </Box>
            <WeekWeatherList/>
        </Container>
    );
}

export default App;
