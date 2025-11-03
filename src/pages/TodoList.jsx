import {Alert, Form} from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {useEffect, useState} from "react";
import {useParams, Link} from "react-router-dom";


function TodoList() {
   const LOCALSTORAGE_KEY = "todoList";
   const {id} = useParams();

    const [task, setTask] = useState({
        name: "",
        task:""
    });
    const [list, setList] = useState(JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY)) || []);
    const [showAlert, setShowAlert] = useState(false);


    useEffect(() => {
        localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(list))
    }, [list])
    const handlerChange = (e) => {
        setShowAlert(false);
        const { name, value } = e.target;
        setTask((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handlerSubmit=(e)=>{
     e.preventDefault();
        if (task.name.trim() === "" || task.task.trim() === "") {
            setShowAlert(true);
            return;
        }
        setShowAlert(false);
        const newTask={
            name: task.name,
            task: task.task,
            date: Date.now(),
            status: "active" // active by default
        }
     setList((prevState)=>[...prevState, newTask]);
     setTask(
         {
             name: "",
             task:""
         }
     )
    }

    const handleStatusChange =(taskId, newStatus )=>{
    setList((prevState)=>(
        prevState.map((task) => task.date === taskId ? { ...task, status: newStatus } : task)
    ));
    }

    const handlerDelete=(id)=>{
setList((prevState)=>(
    prevState.filter((task) => task.date !== id)
))
    }
    return(
        <>
        <Form onSubmit={handlerSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Назва</Form.Label>
                <Form.Control
                    type="text"
                    name="name"
                    placeholder="Введіть назву"
                    onChange={handlerChange}
                    value={task.name}
                />
            </Form.Group>
            <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
            >
                <Form.Label>Постановка задачі</Form.Label>
                <Form.Control
                    as="textarea"
                    placeholder="Введіть задачу"
                    rows={3}
                    name="task"
                    value={task.task}
                    onChange={handlerChange}
                />
            </Form.Group>
            {showAlert && (<Alert key='danger' variant='danger'>
               Всі поля мають бути заповненими!
            </Alert>)}

            <Button
                variant="success"
                type="submit"
                className="mb-2"
            >
                Надіслати
            </Button>
            <hr></hr>
        </Form>
            <h3 className="mt-4 mb-4">Список завдань</h3>
            <div className="container d-flex justify-content-center flex-wrap ">
            { list.map( t=>( <Card className="m-3" style={{ width: '30rem' }}>
                <Card.Header as="h5" className="d-flex justify-content-between ">{t.name}
                   <div >
                       <Button
                           as={Link}
                           to={`/task/${t.date}`}
                           className="me-2"
                           variant="outline-success"
                       ><i className="bi bi-pencil"></i></Button>
                       <Button variant="outline-danger" onClick={()=>handlerDelete(t.date)}><i className="bi bi-trash3"></i></Button>
                   </div>
                </Card.Header>
                <Card.Body>
                    <Card.Title>{t.task}</Card.Title>
                    <Card.Text>
                       Дата створення: {(new Date(t.date)).toLocaleString()}
                    </Card.Text>
                    <Form>
                        <div className="mb-3">
                            <Form.Check
                                inline
                                label="Активне"
                                name={`status-${t.date}`}
                                type='radio'
                                id={`radio-active-${t.date}`}
                                value="active"
                                checked={t.status === 'active'}
                                onChange={(e) => handleStatusChange(t.date, e.target.value)}
                            />
                            <Form.Check
                                inline
                                label="Виконане"
                                name={`status-${t.date}`}
                                type='radio'
                                id={`radio-completed-${t.date}`}
                                value="completed"
                                checked={t.status === 'completed'}
                                onChange={(e) => handleStatusChange(t.date, e.target.value)}
                            />
                        </div>
                    </Form>
                </Card.Body>
            </Card>))}
            </div>
        </>

    )
}
export default TodoList;