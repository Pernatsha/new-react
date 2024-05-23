import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import {Badge,Row,Col} from "react-bootstrap";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link } from "react-router-dom";
import './Headerbar.css'
function Headerbar() {
  return (
    <>
      <div className="sticky-top bg-light ">
        <p className="text-center border pt-3 pb-3 headfont ">
          <img src="../public/asset 0.svg" alt="" width={13} />{" "}
          <span className="pe-3">
            Allow location access for local store menu and promos
          </span>
          <Badge pill bg="dark" className="pt-2 pb-2 ps-3 pe-3">
            Set Location
          </Badge>
        </p>
        <Navbar expand="md" className=" ">
          <hr />
          <Container fluid="md" className="pt-1 pb-2">
            <Navbar.Brand href="/" className="ps-5 pb-4 ">
              <img src="/KFC-Logo-PNG.png" alt="" width={90} />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-md`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-md`}
              aria-labelledby={`offcanvasNavbarLabel-expand-md`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-md`}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className=" flex-grow-1 pe-3 pt-2  text-center  ">
                  <Nav.Link href="/menu" className="fw-bold ps-md-5 headnav">
                    Menu
                  </Nav.Link>
                  <Nav.Link href="#action2" className="fw-bold ps-md-5 headnav">
                    Deal
                  </Nav.Link>
                </Nav>

                <div className="d-grid  d-md-flex  justify-content-center ">
                  <Link to="/signin" className="text-decoration-none text-dark">
                    <div className=" d-flex    ">
                      <img
                        src="/asset 2.svg"
                        alt=""
                        className="pe-2 ps-md-5 "
                      />
                      <div className="d-flex ">
                        <p className="pe-4 pt-3 fw-bold  ">Sign in </p>
                        <div className="border-end border-2  mt-2 mb-2 d-none d-md-block "></div>
                      </div>
                    </div>
                  </Link>

                  <div className="d-flex justify-content-center d-none d-md-block ms-3 ">
                    <span className=" ">&#8377; 0</span>
                    <img src="/asset 3.svg" alt="" width={50} className="" />
                  </div>
                </div>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      </div>
    </>
  );
}

export default Headerbar;
