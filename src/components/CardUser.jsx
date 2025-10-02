import React, {Component} from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

class CardUser extends Component {

    cardUser(){
        const {user} = this.props;
        if(!user) return null;
        return(
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={user?.file && URL.createObjectURL(user.file)} />
            <Card.Body>
                <Card.Text>{user?.firstName}</Card.Text>
                <Card.Text>{user?.lastName}</Card.Text>
                <Card.Text>{user?.age}</Card.Text>
            </Card.Body>
        </Card>
        )
    }

    render() {
        return (
            <div>
                   {this.cardUser()}
            </div>
        );
    }
}

export default CardUser;