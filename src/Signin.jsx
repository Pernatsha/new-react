import React, { useState } from 'react'
import './Signin.css'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { Col, Button, Badge ,Stack} from "react-bootstrap";

function Signin() {
  const [mobno,setmobno]=useState("")
  const updateno=(e)=>{
    setmobno(e.target.value)
    
  }
  console.log(mobno);
  
  return (
    <Container>
      <Row>
        <Col md={3}></Col>
        <Col>
          <div className="container-sm mt-5 ">
            <p className="text-center ">Sign In / Sign up</p>
            <div className="d-flex justify-content-center mt-5 mb-5">
              <img className="signlogo " src="/KFC-Logo-PNG.png" alt="" />
            </div>
            <p className="text-center mb-3 fs-5 fw-bolder head ">
              LET’S SIGN IN OR CREATE ACCOUNT WITH YOUR
              <br /> PHONE NUMBER!
            </p>
            <div className=" ">
              <FloatingLabel
                controlId="floatingInput"
                label="Phone Number*"
                className="mb-3 "
              >
                <Form.Control type="text" placeholder="" value={mobno} onChange={updateno}/>
              </FloatingLabel>
            </div>
            <p>
              By “logging in to KFC”, you agree to our Privacy Policy and Terms
              & Conditions.
            </p>
            <div className="text-center  mb-2 ">
              
              <Button
                variant="dark" type='submit'
                className="rounded-pill pt-3 ps-5 pe-5 pb-3"
              >
                Send Me a Code
              </Button>
            </div>
            <Row>
              <Col xs={5}>
                <hr />
              </Col>
              <Col>
                <p className="text-center">or</p>
              </Col>
              <Col xs={5}>
                <hr />
              </Col>
            </Row>
            <div className="text-center ">
              <Badge
                pill
                bg="light"
                text="dark"
                className="w-75 pt-4 pb-4 fs-6  border border-dark rounded-pill"
              >
                Skip, Continue As Guest
              </Badge>
            </div>
          </div>
        </Col>
        <Col md={3}></Col>
      </Row>
    </Container>
  );
}

export default Signin