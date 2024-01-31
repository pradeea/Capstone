import React,{useState} from 'react';
import { Form,Button,Row,Col } from 'react-bootstrap';
import Header from '../common/Header'
import Footer from '../common/Footer'
import '../styles/style.css';


const  Register=()=>{
const [formData,setFormData]=useState(
  {
    username:'',
    firstname:'',
    lastname:'',
    password:'',
    email:'',
    phonenumber:'',
    address:'',
    usertype:'',
  });
  const handleChange =(e) =>{
    const {name, value}=e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit =(e)=>{
    e.preventDefault();
    console.log('Form Submitted:',formData);
  };
  return (
    <div>

      <Header />
      <Row className="justify-content-md-center">
        <Col xs={6} md={6}>
          <h2 className='mt-4 mb-6'>Register</h2>
     <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formUsername">
        <Form.Label>UserName</Form.Label>
        <Form.Control
        type="text"
        placeholder="UserName"
        name="UserName"
        value={FormData.UserName}
        onChange={handleChange}
        />
      </Form.Group>

      <Form.Group controlId="formFirstName">
        <Form.Label>FirstName</Form.Label>
        <Form.Control
        type="text"
        placeholder="FirstName"
        name="FirstName"
        value={FormData.FirstName}
        onChange={handleChange}
        />
      </Form.Group>

      <Form.Group controlId="formLastName">
        <Form.Label>LastName</Form.Label>
        <Form.Control
        type="text"
        placeholder="LastName"
        name="LastName"
        value={FormData.LastName}
        onChange={handleChange}
        />
      </Form.Group>

      <Form.Group controlId="formPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
        type="password"
        placeholder="Password"
        name="Password"
        value={FormData.Password}
        onChange={handleChange}
        />
      </Form.Group>

      <Form.Group controlId="formEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control
        type="email"
        placeholder="Email"
        name="Email"
        value={FormData.Email}
        onChange={handleChange}
        />
      </Form.Group>

      <Form.Group controlId="formPhoneNumber">
        <Form.Label>PhoneNumber</Form.Label>
        <Form.Control
        type="tel"
        placeholder="Phone Number"
        name="PhoneNumber"
        value={FormData.PhoneNumber}
        onChange={handleChange}
        />
      </Form.Group>

      <Form.Group controlId="formAddress">
        <Form.Label>Address</Form.Label>
        <Form.Control
        type="text"
        placeholder="Address"
        name="Address"
        value={FormData.Address}
        onChange={handleChange}
        />
      </Form.Group>
      
      <Form.Group controlId='formUserType'>
        <Form.Label>UserRole</Form.Label>
        <Form.Control 
        as="select"
        name="role"
        value={formData.usertype} 
        onChange={handleChange}>

          <option value="patient">Patient</option>
          <option value="doctor">Doctor</option>
          <option value="admin">Admin</option>
        
        </Form.Control>
      </Form.Group>
      <br />

      <Button variant="primary" type="submit">Submit</Button>
     </Form>
     <br/>
     </Col>
     </Row>
    <Footer/>
    </div>
   
    )
    }

export default Register;