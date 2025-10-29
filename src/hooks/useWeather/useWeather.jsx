import {useState} from "react";
import {useEffect} from "react";
const WEATHER_CODES = {
 0: 'Сонячно',
 1: 'Переважно ясно',
 2: 'Мінлива хмарність',
 3: 'Хмарно',
 45: 'Туман',
 48: 'Туман',
 51: 'Мряка: Cлабка',
 53: 'Мряка: Помірна',
 55: 'Мряка: Сильна',
 56: 'Крижана мряка: Слабка',
 57: 'Крижана мряка: Сильна',
 61: 'Дощ: Слабкий',
 63: 'Дощ: Помірний',
 65: 'Дощ: Сильний',
 66: 'Крижаний дощ: Слабкий',
 67: 'Крижаний дощ: Сильний',
 71: 'Сніг: Слабкий',
 73: 'Сніг: Помірний',
 75: 'Сніг: Сильний',
 77: 'Снігові зерна',
 80: 'Зливи: Слабкі',
 81: 'Зливи: Помірні',
 82: 'Зливи: Сильні',
 85: 'Снігопади: Слабкі',
 86: 'Снігопади: Сильні',
 95: 'Гроза',
 96: 'Гроза зі слабким градом',
 99: 'Гроза з сильним градом'
};

const URL_WEATHER= "https://api.open-meteo.com/v1/forecast?latitude="; //{LAT}&longitude={LON}&current_weather=true&daily=temperature_2m_max,temperature_2m_min,weathercode&timezone=auto

  function useWeather(){
   const STORAGE_KEY = 'weatherAppFavorites';

   const [cityData, setCityData] = useState(() => {
    try {
     const storedData = localStorage.getItem(STORAGE_KEY);
     return storedData ? JSON.parse(storedData) : [];
    } catch (error) {
     console.error("Помилка завантаження даних з localStorage", error);
     return [];
    }
   });

   useEffect(() => {
    try {
     localStorage.setItem(STORAGE_KEY, JSON.stringify(cityData));
    } catch (error) {
     console.error("Помилка збереження даних у localStorage", error);
    }
   }, [cityData]);

  const handlerAddCity=(newCity)=> {
   setCityData((prevList) => {
    if(prevList.find(city => city.city===newCity.city)) return prevList;
    const maxId = prevList.reduce((max, item) => (item.id > max ? item.id : max), 0);
    const newId = maxId + 1;
    const cityWithId = {...newCity, id: newId};
    return [...prevList, cityWithId]
   });

  }
  const handlerDeleteCity=(idDeleteCity)=>{
   setCityData((prevList)=>{
    return prevList.filter((item)=>item.id!==idDeleteCity);
   })
  }

  const handlerReloadCity= async (id)=>{
const reloadCity=cityData.find(city=>city.id===id);

if(!reloadCity)return;

   try {
    const { latitude, longitude } = reloadCity;
    const res = await fetch(URL_WEATHER + `${latitude}&longitude=${longitude}&current_weather=true&daily=temperature_2m_max,temperature_2m_min,weathercode&timezone=auto`);
    const data = await res.json();

    const { temperature, time, weathercode } = data.current_weather;
    const { temperature: tempUnit } = data.current_weather_units;
    const formattedTime = new Date(time).toLocaleString('uk-UA', {
     hour: '2-digit',
     minute: '2-digit',
     day: '2-digit',
     month: 'long'
    });

    const updatedCity = {
     ...reloadCity,
     temperature: temperature,
     tempUnit: tempUnit,
     date: formattedTime,
     weather: WEATHER_CODES[weathercode] || 'Недоступно'
    };

    setCityData((prevList) =>
        prevList.map((city) =>
            city.id === id ? updatedCity : city
        )
    );


   } catch (err) {
    console.error("Помилка при оновленні погоди:", err);
   }
  }
  return {cityData, handlerAddCity, handlerDeleteCity, handlerReloadCity};
 }

 export default useWeather;