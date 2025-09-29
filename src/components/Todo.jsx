 import React from "react";

class Todo extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            todos: this.props.todo
        }
    }
    componentDidUpdate(prevProps) {
        if(prevProps.todo != this.props.todo){
            this.setState({todos:this.props.todo})
        }
    }
    createList(){
        return this.state.todos.map((task)=>(
               <li onClick={()=>this.handlerClick(task.id)}
                          className={
                              task.done
                                  ? "border border-success shadow p-2 mb-3 w-100 rounded-2"
                                  : "border border-danger shadow p-2 mb-3 w-100 rounded-2"
                          }
                   key={task.id}>
                   {task.name}
               </li>
        ))
    }
    handlerClick = (id) => {
        this.setState((state) => {
            const updated = state.todos.map((task) =>
                task.id === id ? { ...task, done: !task.done } : task
            );
            updated.sort((a, b) => {
                if (a.done === b.done) return 0;
                return a.done ? -1 : 1;
            });
            return { todos: updated };
        });
    };
    render() {
        return (
            <ul className="list-unstyled text-center pt-4">
                <h3>ToDo-List</h3>
                {this.createList()}
            </ul>
        )
    }
}

export default Todo;