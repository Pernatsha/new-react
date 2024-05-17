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
      <Row xs={1} lg={2} md={1} className="w-75  g-4">
        {item.map((v) => (
          <Col key={v.itemid}>
            <Card className="borderhead container-sm">
              <Card.Img variant="top" src={v.itemImg} />
              <Card.Body className="cardbg">
                <Card.Title className="hometitle">{v.itemName}</Card.Title>
                <Card.Text>
                  <img src={v.catImg} alt="" />
                  <span>{v.itemCat}</span>
                  <h3>{v.price}</h3>
                  <p>{v.description}</p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
}

export default Periperi