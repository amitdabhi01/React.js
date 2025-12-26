import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

const ReviewForm = ({addData}) => {
  const [input, setInput] = useState({
    name: "",
    description: "",
    rate: "",
  });

  const handleInputData = (identifier, e) => {
    setInput((prev) => {
      return {
        ...prev,
        [identifier]: e.target.value,
      };
    });
  };

  const handleSubmitData = (e) => {
    e.preventDefault();
    addData(input)
    setInput({ name: "", description: "", rate: "" });
  };

  return (
    <>
      <Container className="border mt-5 p-5">
        <Form onClick={handleSubmitData}>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Your Name</Form.Label>
            <Form.Control
              className="w-50"
              type="text"
              placeholder="Enter Your Name"
              onChange={(i) => handleInputData(e, "name")}
              value={input.name}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              className="w-50"
              rows={3}
              onChange={(i) => handleInputData(e, "description")}
              value={input.description}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Rating</Form.Label>
            <Form.Control
              className="w-50"
              type="number"
              placeholder="Give Rating"
              onChange={(i) => handleInputData(e, "rate")}
              value={input.rate}
            />
          </Form.Group>
          <Button type="submit">Submit</Button>
        </Form>
      </Container>
    </>
  );
};

export default ReviewForm;
