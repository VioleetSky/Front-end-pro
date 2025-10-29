    import Button from 'react-bootstrap/Button';
    import Form from 'react-bootstrap/Form';
    import InputGroup from 'react-bootstrap/InputGroup';
    import {useState} from "react";

    function SearchBar({onDataChange}) {
    const [city, setCity] = useState("");

    const URL_SEARCH_CITY='https://geocoding-api.open-meteo.com/v1/search?name='; //{CITY}&count=1&language=uk
    const URL_WEATHER= "https://api.open-meteo.com/v1/forecast?latitude="; //{LAT}&longitude={LON}&current_weather=true&daily=temperature_2m_max,temperature_2m_min,weathercode&timezone=auto

    const handleChange = (e) => {
        setCity(e.target.value);
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        if(city.trim()=== "") return;
        const geoCity= await searchCity(`${URL_SEARCH_CITY}${city}`+`&count=1&language=uk`);
        if (geoCity) {
            const data=await weather(geoCity);
        }
        setCity("");
    }
    const searchCity= async (url)=>{
        try {
            const res = await fetch(url);
            const data = await res.json();
            if (data.results && data.results.length > 0) {
                const {latitude, longitude} = data.results[0];
                return {lat: latitude, lng: longitude};
            }
            return null;
        }
        catch(err){
            console.log("Error searching city "+err);
            return null;
        }
    }
    const weather=async (geo) => {
        const res = await fetch(URL_WEATHER+`${geo.lat}&longitude=${geo.lng}&current_weather=true&daily=temperature_2m_max,temperature_2m_min,weathercode&timezone=auto`);
        const data = await res.json();
     console.log(data);
     onDataChange(data);
     return data;
    }
        return (
            <div className="container">
                <InputGroup className="mb-3 p-4">
                    <Form.Control
                        placeholder="Пошук міста"
                        aria-describedby="basic-addon2"
                        value={city}
                        onChange={handleChange}
                    />
                    <Button variant="outline-secondary"
                            id="button-addon2"
                    onClick={handleSubmit}
                    >
                        Пошук
                    </Button>
                </InputGroup>
            </div>
        )
    }
    export default SearchBar;