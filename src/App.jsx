import SearchBar from "./components/SearchBar";
import WeatherContainer from "./components/WeatherContainer";
import SelectedWeatherList from "./components/SelectedWeatherList";
import {useState} from "react";
import useWeather from "./hooks/useWeather/useWeather.jsx";

function App() {
    const [searchData, setSearchData] = useState(null);

    const { cityData, handlerAddCity, handlerDeleteCity, handlerReloadCity } = useWeather();

  return (
    <>
        <SearchBar onDataChange={setSearchData} />
        <WeatherContainer data={searchData} onCityAdd={handlerAddCity} />
        <SelectedWeatherList
            weatherList={cityData}
            onCityDelete={handlerDeleteCity}
            onCityReload={handlerReloadCity}
            />
    </>
  )
}

export default App
