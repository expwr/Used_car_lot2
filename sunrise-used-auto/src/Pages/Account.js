import React from 'react'
import SignUp from '../Components/SignUp';
import { Container } from 'react-bootstrap'

function Cars() {
  return (
    <Container 
    className =  "d-flex justify-content-center align-items-center"
    style ={{minHeight: "100vh"}}>
      <div className="w-100" style={{maxWidth: "800px"}}>
      <SignUp />
      </div>
    </Container>
  );
}

export default Cars;