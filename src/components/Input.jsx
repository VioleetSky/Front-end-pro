import Todo from "./Todo.jsx";
import React from "react";

class Input extends React.Component {
    constructor() {
        super();
        this.state = {
            name:'',
            todo:[] //name: task, done:false, id:1
        }
    }


    handlerChange = (e) => {
        this.setState({name: e.target.value});
    }

    handleSubmit = (e) => {
        e.preventDefault();
    if(!this.state.name.trim()) return;
    const newTask={
        name:this.state.name,
        done: false,
        id:this.state.todo.length+1}
        this.setState((prevState)=>({
            todo:[ ...prevState.todo, newTask],
            name: ""
        }));
    }

    render(){
        return (
            <div className="p-5 w-25 mb-3">
            <form className="d-flex" onSubmit={this.handleSubmit}>
                <input
                    className="input-group "
                    onChange={this.handlerChange}
                    value={this.state.name} />
                <input className="m-1 btn btn-secondary" type="submit" value="Submit"/>
            </form>
                <Todo todo={this.state.todo}/>
            </div>
        )
    }
}
export default Input;