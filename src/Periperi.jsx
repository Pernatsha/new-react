import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Card,Row,Col } from 'react-bootstrap'

function Periperi() {

  const [item,setitem]=useState([])
  useEffect(()=>{
    axios.get("http://localhost:1101/menu/one/1")
    .then((res)=>{
      console.log(res.data.item);
      setitem(res.data.item);
    })
  },[])
  return (
    <>
      <div className="container-sm " style={{ backgroundColor: "#f8f7f5" }}>
        <p
          className="fs-3 fw-bolder  ms-3 pt-3 "
          style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
        >
          PERI PERI CHICKEN
        </p>
        <Row
          xs={1}
          lg={2}
          md={2}
          className="w-100 mt-4 g-4"
          style={{ backgroundColor: "#f8f7f5" }}
        >
          {item.map((v) => (
            <Col key={v.itemid}>
              <Card className="borderhead ms-3" style={{ width: "20rem" }}>
                <Card.Img variant="top" src={v.itemImg} />
                <Card.Body className="cardbg">
                  <Card.Title className="hometitle">{v.itemName}</Card.Title>
                  <Card.Text>
                    <img src={v.catImg} alt="" />
                    <span className="ps-2" style={{ fontSize: "12px" }}>
                      {v.itemCat}
                    </span>
                    <h6 className="fw-bold mt-2">&#8377;{v.price}</h6>
                    <p style={{ fontSize: "13px" }}>{v.description}</p>
                    <div>
                      <button
                        type="button"
                        className="btn btn-danger rounded-pill ps-4 pe-4 "
                      >
                        Add to cart{" "}
                        <img
                          src="/Icon_Add_to_Cart.58b87a9b.svg"
                          alt=""
                          className="ps-2"
                        />
                      </button>
                    </div>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </>
  );
}

export default Periperi