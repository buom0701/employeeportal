
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button';
import { Component } from 'react';
import axios from 'axios';

class Registrationform extends Component {
    constructor (props) {
        super(props)
        this.state = {
            id : '',
            firstname: '',
            lastname: '',
            jobtitle: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.submitform = this.submitform.bind(this);
        
    }

    handleChange = (e) => {
        this.setState({[e.target.name] : e.target.value});
        
       
    }

    async submitform (e) {
        console.log(this.state);

      axios.post('localhost:8095/add', this.state);
        
    }

    render (){
        const {id, firstname, lastname, jobtitle} = this.state

    return (
        <div className = 'content-sm'>
        <br></br>
        <Form>
<Row>
    <div className = 'col-xs-4'>
        <Col>
          <Form.Control onChange = {this.handleChange} type = 'text' placeholder="Employee ID" name = 'id' value = {id} />
        </Col>
    </div>
</Row>
<br></br>
<Row>
    <div className = 'col-xs-2'>
        <Col>
          <Form.Control onChange = {this.handleChange} placeholder="First Name" name = 'firstname' value = {firstname}/>
        </Col>
<br></br>
        <Col>
          <Form.Control onChange = {this.handleChange} placeholder="Last Name" name = 'lastname' value = {lastname}/>
        </Col>
    </div>
</Row>
<br></br>
<Row>
     <div className = 'col-xs-4'>
        <Col>
          <Form.Control onChange = {this.handleChange} placeholder="Job Title" name = 'jobtitle' value = {jobtitle}/>
        </Col>
    </div>
</Row>
<br></br>
        <Button onClick = {this.submitform}>Create</Button>
</Form>
    </div>
    )

  
}

}


export default Registrationform;