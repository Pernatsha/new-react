import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Row, Col, Card } from "react-bootstrap";

function Snacks() {
  const [item, setitem] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:1101/menu/one/52").then((res) => {
      console.log(res.data.item);
      setitem(res.data.item);
    });
  }, []);
  return (
    <>
      <div className="container-sm mt-3">
        <p
          className="fs-3 ms-3 pt-3  fw-bolder "
          style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
        >
          SNACKS
        </p>
        <Row xs={1} lg={3} md={2} className="w-100  g-4 mt-4">
          {item.map((v) => (
            <Col key={v.itemid}>
              <Card
                className="borderhead shadow  bg-body rounded  ms-3"
                style={{ width: "15rem" }}
              >
                <Card.Img variant="top" src={v.itemImg} />
                <Card.Body className="cardbg" style={{ height: "15rem" }}>
                  <Card.Title className="hometitle">{v.itemName}</Card.Title>
                  <Card.Text>
                    <img src={v.catImg} alt="" />
                    <span className="ps-2" style={{ fontSize: "12px" }}>
                      {v.itemCat}
                    </span>
                    <h6 className="fw-bold mt-2">&#8377;{v.price}</h6>
                    <p style={{ fontSize: "13px" }}>{v.description}</p>
                    <div className="">
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

export default Snacks;
