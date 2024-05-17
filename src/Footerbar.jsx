import React, { useState } from 'react'
import { Row,Col,Card } from 'react-bootstrap';
import './Footerbar.css'
import Accordion from 'react-bootstrap/Accordion';
import axios from 'axios'





function Footerbar() {
  
  



  
  return (
    <>
      

     
      <div className="bg-black d-none d-lg-block pt-5 ">
        <Row className=" footersize w-100 mt-5 pt-5 mb-5    d-flex align-content-center ">
          <Col className="text-center">
            <img src="/KFC_Logo (1).svg" alt="" />
          </Col>
          <Col>
            <ul className="list-unstyled ">
              <li>LegalCaution</li>
              <li>Terms and Conditions</li>
              <li>Privacy Policy </li>
              <li> Disclaimer </li>
              <li> Notice</li>
            </ul>
          </Col>
          <Col>
            <ul className="list-unstyled ">
              <li>KFC India</li>
              <li>About KFC</li>
              <li>KFC Care</li>
              <li>Careers</li>
              <li>Our Golden Past</li>
            </ul>
          </Col>
          <Col>
            <ul className="list-unstyled ">
              <li>KFC Food</li>
              <li>Menu</li>
              <li>Order Lookup</li>
              <li>Gift Card</li>
              <li> Nutrition & Allergen</li>
            </ul>
          </Col>
          <Col>
            <ul className="list-unstyled ">
              <li>Support </li>
              <li>Get Help</li>
              <li>Contact Us</li>
              <li>KFC Feedback</li>
              <li>Privacy Policy</li>
            </ul>
          </Col>
          <Col xs={1} className="p-0">
            <img src="/asset 0.svg" alt="" width={13} />
            <span>Find a KFC</span>
          </Col>
          <Col>
            <img src="/google_play.svg" alt="" width={100} />
          </Col>
          <Col xs={2}>
            <img src="/apple.svg" alt="" width={100} />
          </Col>
        </Row>

        <div className="text-light pt-5 d-flex text-center justify-content-around  ">
          <div className=" w-75">
            <p className="ps-5 ms-5">
              Copyright © KFC Corporation 2024 All Rights Reserved
            </p>
          </div>

          <div className="">
            <img src="../public/Social_Insta_White.svg" alt="" />
            <img src="../public/Social_Facebook_White.svg" alt="" />
            <img src="../public/Social_Twitter_White.svg" alt="" />
          </div>
        </div>
      </div>

      <div className="bg-black accod d-lg-none d-grid align-content-center pt-5 pb-5  ">
        <div className="text-center pt-5">
          <img src="/KFC_Logo (1).svg" alt="" />
        </div>
        <Accordion className="p-5">
          <Accordion.Item eventKey="0">
            <Accordion.Header>LegalCaution</Accordion.Header>
            <Accordion.Body className="bg-black text-light ">
              <p>Terms and Conditions</p>
              <p>Privacy Policy </p>
              <p> Disclaimer </p>
              <p> Notice</p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>KFC India</Accordion.Header>
            <Accordion.Body className="bg-black text-light ">
              <p>About KFC</p>
              <p>KFC Care</p>
              <p>Careers</p>
              <p>Our Golden Past</p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header className="bg-black">KFC Food</Accordion.Header>
            <Accordion.Body className="bg-black text-light ">
              <p>Menu</p>
              <p>Order Lookup</p>
              <p>Gift Card</p>
              <p> Nutrition & Allergen</p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>Support</Accordion.Header>
            <Accordion.Body className="bg-black text-light ">
              <p>Get Help</p>
              <p>Contact Us</p>
              <p>KFC Feedback</p>
              <p>Privacy Policy</p>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <div className="text-light ps-5  pe-5">
          <p className=" borderfind pb-3 ">
            <img src="/asset 0.svg" alt="" className="ps-2 pb-2 ms-2" />
            <span className="ms-3">Find a KFC</span>
          </p>
        </div>
        <div className="ps-5  pe-5  text-light ">
          <p className="pt-3 ps-3">Download App</p>
          <div className="d-flex justify-content-around ">
            <img src="/google_play.svg" alt="" />
            <img src="/apple.svg" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Footerbar