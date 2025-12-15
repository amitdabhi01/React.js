import React, { use, useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import axios from "axios";
import Loading from "./Loading";

const Product = () => {
  const [product, setProduct] = useState([]);

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");

  // useEffect(() => {
  //   const productData = async () => {
  //     try {
  //       const res = await fetch("http://localhost:5000/products");

  //       const data = await res.json();

  //       setProduct(data);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   productData();
  // }, []);

  useEffect(() => {
    const productData = async () => {
      try {
        setLoading(true);

        const res = await axios("http://localhost:5000/products");

        const data = res.data;

        if (data.length <= 0) {
          setError("no data found");
        }

        setProduct(data);
      } catch (error) {
        console.log(error);

        if (error.status === 404) {
          setError("invalid url");
        } else {
          setError(error.message);
        }
      } finally {
        setLoading(false);
      }
    };

    productData();
  }, []);

  if (loading) {
    <Loading />;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <>
      <Container className="py-4">
        <h1 className="text-center pb-3">Product</h1>
        <Row className="g-4">
          {product.map((prod) => (
            <>
              <Col md={3} className="text-center">
                <Card>
                  <Card.Img
                    variant="top"
                    src={prod.image}
                    style={{ height: "300px", objectFit: "cover" }}
                  />
                  <Card.Body>
                    <Card.Title>{prod.name}</Card.Title>
                    <Card.Text>{prod.description}</Card.Text>
                    <Card.Text>₹ {prod.price}</Card.Text>
                    <Button variant="primary">Add To Cart</Button>
                  </Card.Body>
                </Card>
              </Col>
            </>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Product;
