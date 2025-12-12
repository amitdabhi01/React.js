import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from 'react-bootstrap/Image';

const Product = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const productData = async () => {
      try {
        const res = await fetch("http://localhost:5000/products");

        const data = await res.json();

        setProduct(data);
      } catch (error) {
        console.log(error);
      }
    };
    productData();
  }, []);
  return (
    <>
      <Container className="py-4">
        <h1 className="text-center">Product</h1>
        <Row className="g-4">
            {product.map((prod) => (
                <>
                    <Col md={3} className="text-center">
                        <Image src={prod.image} className="w-100" style={{height:"300px", objectFit:"cover"}}></Image>
                        <p>Product Name: {prod.name}</p>
                        <p>Product Category: {prod.category}</p>
                        <p>Product Price: {prod.price} $</p>
                        <p>Product Description: {prod.description}</p>
                    </Col>
                </>
            ))}
        </Row>
      </Container>
    </>
  );
};

export default Product;
