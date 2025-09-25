import {Component} from "react";

class Navigation extends Component {
    createList(){
        const {data} = this.props;
        return data.map(section=> <li className="m-2 text-secondary" key={section.id}><a>{section.name}</a></li>)
    }
    render() {
return (
    <ul className="list-unstyled d-flex flex-column m-5">
        {this.createList()}
    </ul>
)
    }
}

export default Navigation;