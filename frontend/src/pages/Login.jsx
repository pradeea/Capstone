import React from 'react'
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBIcon,
    MDBInput
} from 'mdb-react-ui-kit';
import Header from '../common/Header';
import Footer from '../common/Footer';
import '../styles/style.css';

function Login(){
  return (
    <div>
    <Header/>
    <MDBContainer fluid>
    <MDBRow>
      <MDBCol sm='9'>
        <div className='d-flex flex-column justify-content-center h-custom-2 w-75 pt-4'>
          <h3 className="fw-normal mb-3 ps-5 pb-3" style={{letterSpacing: '1px'}}>Log in</h3>
          <MDBInput wrapperClass='mb-4 mx-5 w-100' label='Email address' id='formControlLg' type='email' size="lg"/>
          <MDBInput wrapperClass='mb-4 mx-5 w-100' label='Password' id='formControlLg' type='password' size="lg"/>
          <MDBBtn className="mb-4 px-5 mx-5 w-100" color='info' size='lg'>Login</MDBBtn>
          <p className="small mb-5 pb-lg-3 ms-5"><a class="text-muted" href="#!">Forgot password?</a></p>
          <p className='ms-5'>Don't have an account? <a href="/register" class="link-info">Register here</a></p>
        </div>
      </MDBCol>
    </MDBRow>
  </MDBContainer>
    <Footer/>
  </div>
  );
}

export default Login