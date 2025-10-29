import Container from "react-bootstrap/Container";
import Alert from "react-bootstrap/Alert";
import {ListGroup} from "react-bootstrap";
import Button from "react-bootstrap/Button";


function SelectedWeatherList({weatherList, onCityDelete, onCityReload}) {
    if (weatherList.length === 0) {
        return (
            <Container className="mt-4">
                <Alert variant="danger">Список обраних міст порожній</Alert>
            </Container>
        )
    }
    const deleteSelectedCity=(id)=>{
        onCityDelete(id);
    }
    const refreshSelectedCity = (id) => {
        onCityReload(id);
    }

    return (
        <Container className="mt-4 p-4">
            <h3>Обрані міста</h3>
            <ListGroup>
                {weatherList.map((item) => (
                    <ListGroup.Item key={item.id} className="d-flex justify-content-between align-items-center">
                        <div>
                            <strong>{item.city}</strong>: {item.temperature}{item.tempUnit}
                            <br/>
                            <small>Останнє оновлення: {item.date}</small>
                        </div>
                        <div>
                            <Button
                                className="m-2"
                                variant="outline-secondary"
                                onClick={() => refreshSelectedCity(item.id)}
                            >
                                <i className="bi bi-arrow-clockwise"></i>
                            </Button>
                            <Button onClick={()=>deleteSelectedCity(item.id)} variant="outline-secondary">
                                <i className="bi bi-trash"></i>
                            </Button>
                        </div>
                    </ListGroup.Item>
                ))}
            </ListGroup>
        </Container>
    )
}
export default SelectedWeatherList;