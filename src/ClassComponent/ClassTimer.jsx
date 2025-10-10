import React from "react";
import Button from "react-bootstrap/Button";

class ClassTimer extends React.Component {
    constructor() {
        super();
        this.state = {
            timer: Number(localStorage.getItem("timer")) || 0,
            paused: false
        };
        this.interval= null;

    }

    startTimer = () => {
        if (this.interval) return;

        this.interval = setInterval(() => {
            this.setState((prevState) => {
                const newTime = prevState.timer + 1;
                localStorage.setItem("timer", newTime);
                return { timer: newTime };
            });
        }, 1000);
        this.setState({ paused: false });
    };

    pauseTimer = () => {
        if (this.interval) {
            clearInterval(this.interval);
            this.interval = null;
            this.setState({ paused: true });        }
    };

    resetTimer = () => {
        if (this.interval) {
            clearInterval(this.interval);
        }
        this.setState({ timer: 0});
        localStorage.setItem("timer", 0);
        this.interval = null;
        this.setState({ paused: false });
    };

    componentDidMount() {
      this.startTimer();
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.timer !== this.state.timer) {
            console.log("Updated:", this.state.timer);
        }
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        return (
            <>
                <h3>Timer</h3>
                <p className="fw-bold" style={{color: this.state.paused ? "red": "black"}}>{this.state.timer}</p>
                <Button onClick={this.startTimer} variant="primary">
                    Start
                </Button>
                <Button className="m-1" onClick={this.pauseTimer} variant="danger">
                    Stop
                </Button>
                <Button onClick={this.resetTimer} variant="secondary">
                    Reset
                </Button>
            </>
        );
    }
}

export default ClassTimer;
