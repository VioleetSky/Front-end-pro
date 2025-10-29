import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';

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

const getWeatherCategory = (weatherCode) => {
    if ([0, 1].includes(weatherCode)) return 'sunny';
    if ([2, 3].includes(weatherCode)) return 'cloudy';
    if ([45, 48].includes(weatherCode)) return 'fog';

    if ([51, 53, 55, 56, 57, 61, 63, 65, 66, 67, 80, 81, 82, 95, 96, 99].includes(weatherCode)) {
        return 'rain';
    }
    if ([71, 73, 75, 77, 85, 86].includes(weatherCode)) {
        return 'snow';
    }
    return 'default';
}
function WeatherContainer({data,onCityAdd}){
    if(!data){
        return (
            <Container className="mt-4">
                <Alert variant="info">
                    Будь ласка, введіть назву міста, щоб побачити погоду.
                </Alert>
            </Container>
        )
    }
    const {latitude, longitude, timezone}=data;
    const {temperature, time, weathercode} = data.current_weather;
    const {temperature: tempUnit} = data.current_weather_units;
    const weatherCategory=getWeatherCategory(weathercode);
    const textColor=(weatherCategory==='snow') ? 'text-dark' : 'text-light';
    const cardBodyClass=`weather-body ${weatherCategory} ${textColor}`;
    const {time: datesOfWeek, temperature_2m_max, temperature_2m_min}=data.daily;

    const formattedTime = new Date(time).toLocaleString('uk-UA', {
        hour: '2-digit',
        minute: '2-digit',
        day: '2-digit',
        month: 'long'
    });

    const handleSelected =(e)=>{
    e.preventDefault();
    const newCitySelected={
       city: timezone,
       temperature: temperature,
       tempUnit: tempUnit,
       date: formattedTime,
       weather: WEATHER_CODES[weathercode] || 'Недоступно',
        latitude: latitude,
        longitude: longitude
   }
   onCityAdd(newCitySelected);
    }
return (
    <Container className="mt-4">
        <Card>
            <Card.Header className="d-flex justify-content-between" as="h3">Погода {timezone} <Button onClick={handleSelected} variant="outline-secondary"><i
                className="bi bi-heart"></i></Button></Card.Header>
            <Card.Body className={cardBodyClass}>
                <Card.Title className="display-4">
                    {temperature}{tempUnit}
                </Card.Title>
                <Card.Text >
                    <strong>{WEATHER_CODES[weathercode]||'Невідомо'}</strong>
                </Card.Text>
                <Card.Text >
                    Час вимірювання: {formattedTime}
                </Card.Text>
                <Table responsive="sm" striped bordered hover>
                    <thead>
                    <tr>
                        {datesOfWeek.map((date) => (
                            <th key={date}>
                                {new Date(date).toLocaleString('uk-UA', { day: '2-digit', month: '2-digit' })}
                            </th>
                        ))}
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        {temperature_2m_max.map((temp, index) => (
                            <td key={`max-${index}`}>{temp}°</td>
                        ))}
                    </tr>
                    <tr>
                        {temperature_2m_min.map((temp, index) => (
                            <td key={`min-${index}`}>{temp}°</td>
                        ))}
                    </tr>
                    </tbody>
                </Table>
            </Card.Body>
        </Card>
    </Container>
)
}
export default WeatherContainer;