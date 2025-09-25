import React from "react";

class Header extends React.Component {
    createList(){
        const {data} = this.props;
        return data.map(section=> <li className="text-primary fw-semibold border-bottom border-primary" key={section.id}><a>{section.name}</a></li>)
    }

    render() {
        return(
       <ul className="list-unstyled d-flex justify-content-evenly mt-3">
           {this.createList()}
       </ul>
        )
    }
}

export default Header;