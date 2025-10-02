import FormControl from "./components/FormControl.jsx";
import CardUser from "./components/CardUser.jsx";
import {Component} from "react";

class App extends Component{
    constructor() {
        super();
        this.state = {
            users: []
        }
    }

    handlerFormSubmit = (userData) => {
        this.setState(prevState => ({
            users: [...prevState.users, userData]
        }))
    }
    render() {
        return (
                <div className="row row-cols-2 g-2 m-3">
                     <div className="col">
                <FormControl onSubmit={this.handlerFormSubmit} />
            </div>
                <div className="p-1">
                {this.state.users.map((user) => (
                    <div className="col mb-3"> <CardUser key={user.lastName} user={user} />   </div>
                ))}
            </div>
            </div>
        )
    }
}

export default App
