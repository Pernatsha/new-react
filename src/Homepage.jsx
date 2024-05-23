import React, { useEffect,useState } from 'react'
import Headerbar from './Headerbar'
import { Button, Container } from 'react-bootstrap';
import './Homepage.css'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Carouselpage from './Carouselpage';
import Footerbar from './Footerbar';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Homepage() {
  const [menudata, setmenudata] = useState([]);
  const five= menudata.slice(0,7)
  
  

  useEffect(() => {
    axios.get("http://localhost:1101/menu/show").then((res) => {
      console.log(res.data);
      setmenudata(res.data);
      
      // menuchange()
      
    });
  }, []);

  
  return (
    <>
      <Headerbar />

      <div className="text-center bg-black pt-3 pb-3">
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
      <div>
        <img src="/asset 5.webp" alt="" className="w-100" />
      </div>
      <div>
        {/* <div className="container-sm mt-5 mb-5 pt-sm-5  ">
          <Row>
            <Col></Col>
            <Col xs={11}>
              <Row>
                <Col xs={8} lg={5} md={6} sm={7} xl={4}>
                  <span className="fs-3 fw-bolder browse ">
                    BROWSE CATEGORIES
                  </span>
                </Col>
                <Col className="d-none d-md-block ">
                  <hr />
                </Col>
              </Row>
            </Col>
            <Col></Col>
          </Row>
        </div> */}

        <div className=" ps-3 pe-3">
          <Row>
            <Col></Col>
            <Col xs={10} xl={9}>
              {" "}
              <Row className="container-sm mt-5 mb-5 pt-sm-5 pb-sm-3">
                <Col xs={8} lg={5} md={6} sm={7} xl={4}>
                  <span className="fs-3  browse ">BROWSE CATEGORIES</span>
                </Col>
                <Col className="d-none d-md-block ">
                  <hr />
                </Col>
              </Row>
              <div>
                <Row xs={1} lg={4} md={3} className="  g-4">
                  {five.map((v) => (
                    <Col key={v.menuid}>
                      <Card className="borderhead container-sm">
                        <Card.Img variant="top" src={v.imgName} />
                        <Card.Body className="cardbg">
                          <Card.Title className="hometitle text-center">
                            {v.menuName}
                          </Card.Title>
                          <Card.Text></Card.Text>
                        </Card.Body>
                      </Card>
                    </Col>
                  ))}
                  <Col>
                    <Link to="/menu" className='text-decoration-none '>
                      <Card className="borderhead container-sm ">
                        <Card.Img
                          variant="top"
                          src="/finger_lickin.fc21c805.svg"
                          className="finger p-4 "
                        />
                        <Card.Body className="cardbg">
                          <Card.Title className="hometitle fw-bold   text-center">
                            View All Menu <span className=" ">&#10230;</span>
                          </Card.Title>
                          <Card.Text></Card.Text>
                        </Card.Body>
                      </Card>
                    </Link>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col></Col>
          </Row>
        </div>
      </div>
      <div>
        <Carouselpage />

        <Footerbar />
      </div>
    </>
  );
}

export default Homepage