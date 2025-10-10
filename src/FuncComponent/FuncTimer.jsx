import Button from "react-bootstrap/Button";
import { useEffect, useState } from "react";

let intervalId = null;

function FuncTimer() {
    const [timer, setTimer] = useState(Number(localStorage.getItem("timer")) || 0);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        startTimer();
        return () => clearInterval(intervalId);
    }, []);
    useEffect(() => {
        localStorage.setItem("timer", timer);
    }, [timer])
    const startTimer = () => {
        if (isRunning) return;
        intervalId = setInterval(() => {
            setTimer(prev => prev + 1);
        }, 1000);
        setIsRunning(true);
    }
    const pauseTimer = () => {
        clearInterval(intervalId);
        intervalId = null;
        setIsRunning(false);
    }
    const resetTimer = () => {
        clearInterval(intervalId);
        intervalId = null;
        setIsRunning(false);
        setTimer(0);
        localStorage.setItem("timer", 0);
    }
    return (
        <>
            <h3>Timer</h3>
            <p className="fw-bold" style={{ color: isRunning ? "black" : "red" }}>{timer}</p>
            <Button onClick={startTimer} variant="primary">
                Start
            </Button>
            <Button className="m-1"  onClick={pauseTimer} variant="danger">
                Stop
            </Button>
            <Button onClick={resetTimer} variant="secondary">
                Reset
            </Button>
        </>
    )
}

export default FuncTimer;
