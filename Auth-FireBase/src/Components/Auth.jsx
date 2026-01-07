import React, { useState } from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const Auth = () => {

  const [isLogin, setIsLogin] = useState("");

  

  return (
    <>
      <Container className="mt-5">
        <Row className="d-flex justify-content-center">
          <Col md={6}>
            <Form className="border p-3">
              <h2 className="text-center">Login</h2>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="name@example.com" />
              </Form.Group>
              <Form.Group
                className="mb-4"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <div className="d-flex flex-column justify-content-center align-items-center">
                <Button className="w-50 mb-3">Login</Button>
                <Button className="w-50">Create Account ?</Button>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Auth;
