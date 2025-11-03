import {useParams, useNavigate, Link} from 'react-router-dom';
import Button from "react-bootstrap/Button";
import {Alert, Form} from "react-bootstrap";
import {useState} from "react";

function Task(){
    const LOCALSTORAGE_KEY = "todoList";
    const {id} = useParams();
    const navigate = useNavigate();
    const list=()=>JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY)) || [];
    const [showAlert, setShowAlert] = useState(false);
    const taskToEdit=list().find(task=>Number(id) === task.date);
    const [task,setTask]=useState(taskToEdit);


    const handlerSubmit=(e)=>{
   e.preventDefault();
        if (task.name.trim() === "" || task.task.trim() === "") {
            setShowAlert(true);
            return;
        }
        setShowAlert(false);
        const currentList=list();
        const updateList=currentList.map((t)=>{
            if(t.date===Number(id)){
                return task;
            }
            return t;
        })

        localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(updateList));
        navigate("/");
    }

    const handlerChange=(e)=>{
        setShowAlert(false);
        const { name, value } = e.target;
        setTask((prevState)=>({
            ...prevState,
            [name]: value
        }))
    }
    return (
        <div>
        {task ? (
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
            </Form>
                ) : (
            <p>Завдання не знайдено</p>
        )}
            <Button
                as={Link}
                to="/"
                variant="outline-primary"
                 className="mt-4"
            >Back to list</Button>
        </div>
    )
}
export default Task;