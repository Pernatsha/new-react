import React, { Component } from "react";
import Slider from "react-slick";
import { Button,Card } from "react-bootstrap";
import './Carouselpage.css'
import {Link} from 'react-router-dom'


function Carouselpage() {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "0px",
    slidesToShow: 3,
    speed: 500,
  };
  const settting = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "0px",
    slidesToShow: 2,
    speed: 500,
  };
  const settt = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "0px",
    slidesToShow: 1,
    speed: 500,
  };
  return (
    <>
      <div className="bg-black mt-5">
        <div className="contant w-75 text-light text-xl-start text-center      container-md">
          <div>
            <img src="/kfc border.svg" alt="" />
          </div>
          <div className="row mt-5 gap-xl-0 gap-4 ">
            <span
              className="fs-3 fw-bold col-xl-6 col-12 "
              style={{ fontFamily: " Arial, Helvetica, sans-serif" }}
            >
              EXCLUSIVE OFFERS FOR YOU
            </span>
            <span className="text-center text-xl-end col-xl-6 col-12 ">
              View All Deals &rarr;
            </span>
          </div>
        </div>
      </div>
      <div className="d-xl-block d-none">
        <div className=" bg-black caro">
          <div className="slider-container w-75">
            <Slider {...settings}>
              <div>
                <Card style={{ width: "18rem" }} className="">
                  <Card.Img variant="top" src="/CHKZINGER.jpg" />
                  <Card.Body>
                    <Card.Title className="fs-4 fw-bold text-center  text-danger ">
                      FREE CHICKEN...
                    </Card.Title>
                    <Card.Text
                      className="text-center overflow-hidden "
                      style={{ height: "3rem" }}
                    >
                      1 Pc free Chicken Zinger on a cart value of 499 or above
                      on first order. Only for registered users.
                    </Card.Text>
                    <div className="d-flex justify-content-around  ">
                      <Link className="pt-1 text-dark ">View Details</Link>
                      <Button
                        variant="primary"
                        className="rounded-pill bg-light border border-dark text-dark ps-4 pe-4 "
                      >
                        Add to cart
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </div>
              <div>
                <Card style={{ width: "18rem" }} className="">
                  <Card.Img variant="top" src="/ADDCHK99.jpg" />
                  <Card.Body>
                    <Card.Title className="fs-4 fw-bold text-center  text-danger ">
                      ADD 2 PC HOT N...
                    </Card.Title>
                    <Card.Text
                      className="text-center overflow-hidden"
                      style={{ height: "3rem" }}
                    >
                      Add 2 Pc Hot n Crispy Chicken at just Rs 99 on min cart
                      value of Rs 499 or more. Applicable on 2nd & 3rd order for
                      signed in user.
                    </Card.Text>
                    <div className="d-flex justify-content-around  ">
                      <Link className="pt-1 text-dark ">View Details</Link>
                      <Button
                        variant="primary"
                        className="rounded-pill bg-light border border-dark text-dark ps-4 pe-4 "
                      >
                        Add to cart
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </div>
              <div>
                <Card style={{ width: "18rem" }} className="">
                  <Card.Img variant="top" src="/BIGSAVE.jpg" />
                  <Card.Body>
                    <Card.Title className="fs-4 fw-bold text-center  text-danger ">
                      UPTO RS 100 OFF O...
                    </Card.Title>
                    <Card.Text
                      className="text-center overflow-hidden"
                      style={{ height: "3rem" }}
                    >
                      Upto Rs 100 off on min cart value of Rs 699 or more .
                      Applicable on 4th order onwards for signed in user.
                    </Card.Text>
                    <div className="d-flex justify-content-around  ">
                      <Link className="pt-1 text-dark ">View Details</Link>
                      <Button
                        variant="primary"
                        className="rounded-pill bg-light border border-dark text-dark ps-4 pe-4 "
                      >
                        Add to cart
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </div>
              <div>
                <Card style={{ width: "18rem" }} className="">
                  <Card.Img variant="top" src="/PHP75.jpg" />
                  <Card.Body>
                    <Card.Title className="fs-4 fw-bold text-center  text-danger ">
                      GET FLAT RS.75 OF...
                    </Card.Title>
                    <Card.Text
                      className="text-center overflow-hidden"
                      style={{ height: "3rem" }}
                    >
                      Get flat Rs.75 off on a cart value of Rs.599 or above
                    </Card.Text>
                    <div className="d-flex justify-content-around  ">
                      <Link className="pt-1 text-dark ">View Details</Link>
                      <Button
                        variant="primary"
                        className="rounded-pill bg-light border border-dark text-dark ps-4 pe-4 "
                      >
                        Add to cart
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </div>
              <div>
                <Card style={{ width: "18rem" }} className="">
                  <Card.Img variant="top" src="/YAYPOP.jpg" />
                  <Card.Body>
                    <Card.Title className="fs-4 fw-bold text-center  text-danger ">
                      FREE POPCORN...
                    </Card.Title>
                    <Card.Text
                      className="text-center overflow-hidden"
                      style={{ height: "3rem" }}
                    >
                      Free Popcorn (Med) on a cart value of 499 or more. Friday
                      only.
                    </Card.Text>
                    <div className="d-flex justify-content-around  ">
                      <Link className="pt-1 text-dark ">View Details</Link>
                      <Button
                        variant="primary"
                        className="rounded-pill bg-light border border-dark text-dark ps-4 pe-4 "
                      >
                        Add to cart
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </div>
              <div>
                <Card style={{ width: "18rem" }} className="">
                  <Card.Img variant="top" src="/YAYCHKN.jpg" />
                  <Card.Body>
                    <Card.Title className="fs-4 fw-bold text-center  text-danger ">
                      FREE 1PC CHICKEN...
                    </Card.Title>
                    <Card.Text
                      className="text-center overflow-hidden"
                      style={{ height: "3rem" }}
                    >
                      Free 1pc Chicken on a cart value of 499 or more. Friday
                      only.
                    </Card.Text>
                    <div className="d-flex justify-content-around  ">
                      <Link className="pt-1 text-dark ">View Details</Link>
                      <Button
                        variant="primary"
                        className="rounded-pill bg-light border border-dark text-dark ps-4 pe-4 "
                      >
                        Add to cart
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </div>
            </Slider>
          </div>
        </div>
      </div>
      <div className=" d-none d-md-block d-xl-none">
        <div className=" bg-black caro">
          <div className="slider-container w-75">
            <Slider {...settting}>
              <div className="d-flex justify-content-center ">
                <Card style={{ width: "18rem" }} className="">
                  <Card.Img variant="top" src="/CAT158.jpg" />
                  <Card.Body>
                    <Card.Title className="fs-4 fw-bold text-center  text-danger ">
                      FREE 3PC STRIPS O...
                    </Card.Title>
                    <Card.Text
                      className="text-center overflow-hidden "
                      style={{ height: "4rem" }}
                    >
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                    <div className="d-flex justify-content-around  ">
                      <Link className="pt-1 text-dark ">View Details</Link>
                      <Button
                        variant="primary"
                        className="rounded-pill bg-light border border-dark text-dark ps-4 pe-4 "
                      >
                        Add to cart
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </div>
              <div className="d-flex justify-content-center ">
                <Card style={{ width: "18rem" }} className="">
                  <Card.Img variant="top" src="/CAT158.jpg" />
                  <Card.Body>
                    <Card.Title className="fs-4 fw-bold text-center  text-danger ">
                      FREE 3PC STRIPS O...
                    </Card.Title>
                    <Card.Text
                      className="text-center overflow-hidden"
                      style={{ height: "4rem" }}
                    >
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                    <div className="d-flex justify-content-around  ">
                      <Link className="pt-1 text-dark ">View Details</Link>
                      <Button
                        variant="primary"
                        className="rounded-pill bg-light border border-dark text-dark ps-4 pe-4 "
                      >
                        Add to cart
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </div>
              <div className="d-flex justify-content-center ">
                <Card style={{ width: "18rem" }} className="">
                  <Card.Img variant="top" src="/CAT158.jpg" />
                  <Card.Body>
                    <Card.Title className="fs-4 fw-bold text-center  text-danger ">
                      FREE 3PC STRIPS O...
                    </Card.Title>
                    <Card.Text
                      className="text-center overflow-hidden"
                      style={{ height: "4rem" }}
                    >
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                    <div className="d-flex justify-content-around  ">
                      <Link className="pt-1 text-dark ">View Details</Link>
                      <Button
                        variant="primary"
                        className="rounded-pill bg-light border border-dark text-dark ps-4 pe-4 "
                      >
                        Add to cart
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </div>
              <div className="d-flex justify-content-center ">
                <Card style={{ width: "18rem" }} className="">
                  <Card.Img variant="top" src="/CAT158.jpg" />
                  <Card.Body>
                    <Card.Title className="fs-4 fw-bold text-center  text-danger ">
                      FREE 3PC STRIPS O...
                    </Card.Title>
                    <Card.Text
                      className="text-center overflow-hidden"
                      style={{ height: "4rem" }}
                    >
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                    <div className="d-flex justify-content-around  ">
                      <Link className="pt-1 text-dark ">View Details</Link>
                      <Button
                        variant="primary"
                        className="rounded-pill bg-light border border-dark text-dark ps-4 pe-4 "
                      >
                        Add to cart
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </div>
              <div className="d-flex justify-content-center ">
                <Card style={{ width: "18rem" }} className="">
                  <Card.Img variant="top" src="/CAT158.jpg" />
                  <Card.Body>
                    <Card.Title className="fs-4 fw-bold text-center  text-danger ">
                      FREE 3PC STRIPS O...
                    </Card.Title>
                    <Card.Text
                      className="text-center overflow-hidden"
                      style={{ height: "4rem" }}
                    >
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                    <div className="d-flex justify-content-around  ">
                      <Link className="pt-1 text-dark ">View Details</Link>
                      <Button
                        variant="primary"
                        className="rounded-pill bg-light border border-dark text-dark ps-4 pe-4 "
                      >
                        Add to cart
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </div>
              <div className="d-flex justify-content-center ">
                <Card style={{ width: "18rem" }} className="">
                  <Card.Img variant="top" src="/CAT158.jpg" />
                  <Card.Body>
                    <Card.Title className="fs-4 fw-bold text-center  text-danger ">
                      FREE 3PC STRIPS O...
                    </Card.Title>
                    <Card.Text
                      className="text-center overflow-hidden"
                      style={{ height: "4rem" }}
                    >
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                    <div className="d-flex justify-content-around  ">
                      <Link className="pt-1 text-dark ">View Details</Link>
                      <Button
                        variant="primary"
                        className="rounded-pill bg-light border border-dark text-dark ps-4 pe-4 "
                      >
                        Add to cart
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </div>
            </Slider>
          </div>
        </div>
      </div>
      <div className=" d-md-none ">
        <div className=" bg-black caro">
          <div className="slider-container w-75">
            <Slider {...settt}>
              <div className="d-flex justify-content-center ">
                <Card style={{ width: "18rem" }} className="">
                  <Card.Img variant="top" src="/CAT158.jpg" />
                  <Card.Body>
                    <Card.Title className="fs-4 fw-bold text-center  text-danger ">
                      FREE 3PC STRIPS O...
                    </Card.Title>
                    <Card.Text
                      className="text-center overflow-hidden "
                      style={{ height: "4rem" }}
                    >
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                    <div className="d-flex justify-content-around  ">
                      <Link className="pt-1 text-dark ">View Details</Link>
                      <Button
                        variant="primary"
                        className="rounded-pill bg-light border border-dark text-dark ps-4 pe-4 "
                      >
                        Add to cart
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </div>
              <div className="d-flex justify-content-center ">
                <Card style={{ width: "18rem" }} className="">
                  <Card.Img variant="top" src="/CAT158.jpg" />
                  <Card.Body>
                    <Card.Title className="fs-4 fw-bold text-center  text-danger ">
                      FREE 3PC STRIPS O...
                    </Card.Title>
                    <Card.Text
                      className="text-center overflow-hidden"
                      style={{ height: "4rem" }}
                    >
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                    <div className="d-flex justify-content-around  ">
                      <Link className="pt-1 text-dark ">View Details</Link>
                      <Button
                        variant="primary"
                        className="rounded-pill bg-light border border-dark text-dark ps-4 pe-4 "
                      >
                        Add to cart
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </div>
              <div className="d-flex justify-content-center ">
                <Card style={{ width: "18rem" }} className="">
                  <Card.Img variant="top" src="/CAT158.jpg" />
                  <Card.Body>
                    <Card.Title className="fs-4 fw-bold text-center  text-danger ">
                      FREE 3PC STRIPS O...
                    </Card.Title>
                    <Card.Text
                      className="text-center overflow-hidden"
                      style={{ height: "4rem" }}
                    >
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                    <div className="d-flex justify-content-around  ">
                      <Link className="pt-1 text-dark ">View Details</Link>
                      <Button
                        variant="primary"
                        className="rounded-pill bg-light border border-dark text-dark ps-4 pe-4 "
                      >
                        Add to cart
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </div>
              <div className="d-flex justify-content-center ">
                <Card style={{ width: "18rem" }} className="">
                  <Card.Img variant="top" src="/CAT158.jpg" />
                  <Card.Body>
                    <Card.Title className="fs-4 fw-bold text-center  text-danger ">
                      FREE 3PC STRIPS O...
                    </Card.Title>
                    <Card.Text
                      className="text-center overflow-hidden"
                      style={{ height: "4rem" }}
                    >
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                    <div className="d-flex justify-content-around  ">
                      <Link className="pt-1 text-dark ">View Details</Link>
                      <Button
                        variant="primary"
                        className="rounded-pill bg-light border border-dark text-dark ps-4 pe-4 "
                      >
                        Add to cart
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </div>
              <div className="d-flex justify-content-center ">
                <Card style={{ width: "18rem" }} className="">
                  <Card.Img variant="top" src="/CAT158.jpg" />
                  <Card.Body>
                    <Card.Title className="fs-4 fw-bold text-center  text-danger ">
                      FREE 3PC STRIPS O...
                    </Card.Title>
                    <Card.Text
                      className="text-center overflow-hidden"
                      style={{ height: "4rem" }}
                    >
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                    <div className="d-flex justify-content-around  ">
                      <Link className="pt-1 text-dark ">View Details</Link>
                      <Button
                        variant="primary"
                        className="rounded-pill bg-light border border-dark text-dark ps-4 pe-4 "
                      >
                        Add to cart
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </div>
              <div className="d-flex justify-content-center ">
                <Card style={{ width: "18rem" }} className="">
                  <Card.Img variant="top" src="/CAT158.jpg" />
                  <Card.Body>
                    <Card.Title className="fs-4 fw-bold text-center  text-danger ">
                      FREE 3PC STRIPS O...
                    </Card.Title>
                    <Card.Text
                      className="text-center overflow-hidden"
                      style={{ height: "4rem" }}
                    >
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                    <div className="d-flex justify-content-around  ">
                      <Link className="pt-1 text-dark ">View Details</Link>
                      <Button
                        variant="primary"
                        className="rounded-pill bg-light border border-dark text-dark ps-4 pe-4 "
                      >
                        Add to cart
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
}

export default Carouselpage;
