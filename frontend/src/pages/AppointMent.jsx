import React, { useState } from 'react'
import Header from '../common/Header'
import Footer from '../common/Footer'
import { Row,Col } from 'react-bootstrap';

const AppointMent = () => {
    const [appointment,setAppointment] =useState({
        AppointmentDate:'',
        status:'',
    });
    const handleChange = (e)=>{
        const {name, value} =e.target;
        setAppointment((prevAppointment)=>({
            ...prevAppointment,
                [name]:value
        }));
    };

const handleSubmit =(e)=>{
    e.preventDefault();
    setAppointment({
        AppointmentDate:'',
    });
};
  return (
    <div>
        <Header/>
        <Row className="justify-content-md-center">
        <Col xs={6} md={6}>
            <br/>
            <h1 variant="dark">Want to Book an Appointment?</h1>
            <img src='/image2.jpg' alt='appointment'></img>
            <br/>
          <h2 className='mt-4 mb-12'></h2>
          <br/>
        <form onSubmit={handleSubmit}>
        <label className='mt-6 mb-12'>
            AppointMent Date :
            <input type='datetime-local'
            name='AppointmentDate'
            value={appointment.AppointmentDate}
            onChange={handleChange}/>
        </label>
       <br/>
        <button type="submit" className='bookAppointment'>Book Now</button>
        <br/>
        <br/>
        </form>
        </Col>
        </Row>
        <Footer/>
    </div>

  );
};

export default AppointMent