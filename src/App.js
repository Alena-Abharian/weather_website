import './App.css';
import Search from "./components/Search/Search";
import WeekWeatherList from "./components/WeekWeatherList/WeekWeatherList";
import City from "./components/City/City";
import WeatherToday from "./components/WeatherToday/WeatherToday";
import WeekDay from "./components/WeekDay/WeekDay";

function App() {
    return (
        <div className="container">
            <Search/>
            <City/>
            <WeatherToday/>
            <WeekDay/>
            <WeekWeatherList/>
        </div>
    );
}

export default App;
