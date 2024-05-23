import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Badge, Row, Col } from "react-bootstrap";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link } from "react-router-dom";
import "./Menupage.css";
import Periperi from "./Periperi";
import { useState,useEffect } from "react";
import axios from "axios";
import Valuesnacker from "./Valuesnacker";
import Chickenroll from "./Chickenroll";
import ChickenBuckets from "./ChickenBuckets";
import BiriyaniBuckets from "./BiriyaniBuckets";
import Boxmeals from "./Boxmeals";
import Burger from "./Burger";
import Snacks from "./Snacks";
import Beverages from "./Beverages";
import Footerbar from './Footerbar'



function Menupage() {
  const [menudata, setmenudata] = useState([]);
  

  
  useEffect(() => {
    axios.get("http://localhost:1101/menu/show").then((res) => {
      // console.log(res.data);
      setmenudata(res.data);
    });
  }, []);
 
  return (
    <>
      <div className="fixed-top bg-light ">
        <Navbar expand="md" className="">
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
                  <img src="/KFC-Logo-PNG.png" alt="" width={90} />
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
      <div className=" mb-5 mt-5">.</div>
      <div className="text-center bg-black pt-2 pb-2 mt-5  ">
        <span className="fw-bolder homehead ">
          LET'S ORDER FOR DELIVERY, PICK UP, OR DINE-IN
        </span>
        <Button
          variant="danger"
          type="submit"
          className="rounded-pill pt-2 ps-4 pe-4 pb-2 ms-3 "
        >
          Start Order
        </Button>
      </div>
      

      <div className="container-md">
        <Row className=" position-relative  " >
          <Col lg={3} className=" d-none d-lg-block  " style={{minHeight: "100vh"}}>
            <div className="ms-5 ps-3 mb-3">
              <img src="/kfc border.svg" alt="" width={50} />
            </div>

            <div className="ms-5 ps-3 ">
              <p className="fs-3 fw-bolder  menute">KFC MENU</p>
              {/* {menudata.map((v) => (
                <div key={v.menuid}>
                  <p className="menute">{v.menuName}</p>
                </div>
              ))} */}
              <p>
                <a className="menute" href="#peri">
                  {" "}
                  PERI PERI CHICKEN
                </a>
              </p>
              <p>
                <a className="menute" href="#value">
                  VALUE SNACKERS
                </a>
              </p>
              <p>
                <a className="menute" href="#chicken_roll">
                  CHICKEN ROLLS
                </a>
              </p>
              <p>
                <a className="menute" href="#chicken_buckets">
                  CHICKEN BUCKETS
                </a>
              </p>
              <p>
                <a className="menute" href="#biriyani_buckets">
                  BIRYANI BUCKETS
                </a>
              </p>
              <p>
                <a className="menute" href="#boxmeal">
                  BOX MEALS
                </a>
              </p>
              <p>
                <a className="menute" href="#burgers">
                  BURGERS
                </a>
              </p>
              <p>
                <a className="menute" href="#snacks">
                  SNACKS
                </a>
              </p>
              <p>
                <a className="menute" href="#beverages">
                  BEVERAGES
                </a>
              </p>
            </div>
          </Col>
          <Col
            className="overflow-y-scroll target-scroll w-100 "
            style={{ height: "32rem" }}
          >
            <div className="ms-3 p-2 mt-5 border rounded-pill menu-container w-25">
              <div className="ms-2">
                <span>
                  <img src="/magnifying-glass-solid.svg" alt="" width={15} />
                </span>
                <input
                  type="text"
                  className=" w-75  ps-2 input-search "
                  placeholder="search our menu"
                />
              </div>
            </div>

            <hr />

            <div className=" ">
              <div className="mt-5  d-flex justify-content-center" id="peri">
                <Periperi />
              </div>
              <div className="mt-5 " id="value">
                <Valuesnacker />
              </div>
              <div className="mt-5 " id="chicken_roll">
                <Chickenroll />
              </div>
              <div className="mt-5 " id="chicken_buckets">
                <ChickenBuckets />
              </div>
              <div className="mt-5 " id="biriyani_buckets">
                <BiriyaniBuckets />
              </div>
              <div className="mt-5 " id="boxmeal">
                <Boxmeals />
              </div>
              <div className="mt-5 " id="burgers">
                <Burger />
              </div>
              <div className="mt-5 " id="snacks">
                <Snacks />
              </div>
              <div className="mt-5 " id="beverages">
                <Beverages />
                <div>

                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
                 <Footerbar/>
      
      
    </>
  );
}

export default Menupage;
