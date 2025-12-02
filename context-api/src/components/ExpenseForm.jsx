import React, { useContext, useState, useEffect } from "react";
import { expense } from "./ExpenseContext";
import ExpenseData from "./ExpenseData";

import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const ExpenseForm = () => {
  const [input, setInput] = useState({
    title: "",
    amount: "",
    type: "",
    category: "",
  });

  const { add, editValue } = useContext(expense);

  useEffect(() => {
    editValue ? setInput(editValue) : "";
  }, [editValue]);

  const handleInput = (field, e) => {
    setInput((prev) => {
      return {
        ...prev,
        [field]: e.target.value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    add(input);
    setInput({ title: "", amount: "", type: "", category: "" });
  };

  console.log(input);

  return (
    <>
      <h1 className="text-center text-white mb-4 mt-4">Expense Tracker</h1>
      <Container className="mt-3 border p-5 mb-5 rounded-5">
        <Form onSubmit={handleSubmit}>
          <Row className="justify-content-center align-items-center">
            <Col md={6}>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label className="text-white">Title</Form.Label>
                <Form.Control
                  name="title"
                  type="text"
                  placeholder="Enter Title"
                  className="w-75"
                  onChange={(e) => handleInput("title", e)}
                  value={input.title}
                />
              </Form.Group>
              <Form.Group
                className="mb-4"
                controlId="exampleForm.ControlInput2"
              >
                <Form.Label className="text-white">Amount</Form.Label>
                <Form.Control
                  name="amount"
                  type="number"
                  placeholder="Enter Amount"
                  className="w-75"
                  onChange={(e) => handleInput("amount", e)}
                  value={input.amount}
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput3"
              >
                <span className="text-white me-2">Credit</span>
                <input
                  id="credit"
                  type="radio"
                  onChange={(e) => handleInput("type", e)}
                  value="credit"
                  name="type"
                  checked={input.type === "credit"}
                />
              </Form.Group>
              <Form.Group
                className="mb-4"
                controlId="exampleForm.ControlInput4"
              >
                <span className="text-white me-2">Debit</span>
                <input
                  type="radio"
                  id="debit"
                  onChange={(e) => handleInput("type", e)}
                  value="debit"
                  name="type"
                  checked={input.type === "debit"}
                />
              </Form.Group>
              <Form.Group
                className="mb-4"
                controlId="exampleForm.ControlInput5"
              >
                <span className="text-white me-2">Category</span>
                <select
                  name="category"
                  id="category"
                  className="p-1 rounded text-center"
                  onChange={(e) => handleInput("category", e)}
                  value={input.category}
                >
                  <option value="">Select Category</option>
                  <option value="general">General</option>
                  <option value="travel">Travel</option>
                  <option value="food">Food</option>
                  <option value="shopping">Shopping</option>
                </select>
              </Form.Group>
              <button className="px-5 rounded py-2 btn btn-success w-75" variant="light" type="submit">{editValue ? "Update" : "Add"}</button>
            </Col>
            <Col md={6}>
              <ExpenseData/>
            </Col>
          </Row>
        </Form>
      </Container>
    </>
  );
};

export default ExpenseForm;
