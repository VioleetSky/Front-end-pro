import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class FormControl extends React.Component {

    constructor() {
        super();
        this.state = {
            firstName: '',
            lastName: '',
            age: '',
            file: null
        }
    }
  handlerSubmit=(e)=>{
        e.preventDefault();
      if (!this.state.firstName || !this.state.lastName || !this.state.age || !this.state.file) {
       alert("Будь ласка, заповніть поля");
          return;
      }
       this.props.onSubmit(this.state);
      this.setState({
          firstName: '',
          lastName: '',
          age: '',
          file: null
      })
  }
  handleChange=(e)=>{
        const {name, value, files } = e.target;
    this.setState({
        [name]: files ? files[0]:value
    })
  }
   formCreate(){
       return (<div className="container w-50">
       <Form onSubmit={this.handlerSubmit}>
           <Form.Group className="mb-3" controlId="formInputFirstName">
               <Form.Label>First Name</Form.Label>
               <Form.Control
                   onChange={this.handleChange}
                   value={this.state.firstName}
                   name="firstName"
                   type="text"
                   placeholder="Enter First Name" />
           </Form.Group>
           <Form.Group className="mb-3" controlId="formInputLastName">
               <Form.Label>Last Name</Form.Label>
               <Form.Control
                   onChange={this.handleChange}
                   value={this.state.lastName}
                   name="lastName"
                   type="text"
                   placeholder="Enter Last Name" />
           </Form.Group>
           <Form.Group className="mb-3" controlId="formInputAge">
               <Form.Label>Age</Form.Label>
               <Form.Control
                   onChange={this.handleChange}
                   value={this.state.age}
                   min="0"
                   name="age"
                   type="number"
                   placeholder="Enter Age" />
           </Form.Group>
           <Form.Group controlId="photoFile" className="mb-3">
               <Form.Label>Choose a photo file</Form.Label>
               <Form.Control
                   onChange={this.handleChange}
                   name="file"
                   type="file"/>
           </Form.Group>
           <Button type="submit" variant="primary">Submit</Button>
       </Form>
           </div>
       )
   }
    render() {
        return (
            <div>
                {this.formCreate()}
            </div>
        );
    }
}
export default FormControl;