import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const ProductForm = () => {
  const [product, setProduct] = useState({
    name: "",
    price: "",
    qty: "",
    category: "",
  });

  return (
    <>
      <Container className="border mt-5 p-5 rounded-4">
        <h1></h1>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Product Name"
              value={product.name}
              onChange={(e) => handleInputData(e, "name")}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Price</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter Product Price"
              value={product.price}
              onChange={(e) => handleInputData(e, "price")}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Quantity</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter Product Quantity"
              value={product.qty}
              onChange={(e) => handleInputData(e, "qty")}
            />
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Label>Category</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter Product Category"
              value={product.category}
              onChange={(e) => handleInputData(e, "category")}
            />
          </Form.Group>
          <div className="text-center">
            <Button className="w-25">Add</Button>
          </div>
        </Form>
      </Container>
    </>
  );
};

export default ProductForm;
