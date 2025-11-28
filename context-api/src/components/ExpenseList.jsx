import React, { useContext } from "react";
import { expense } from "./ExpenseContext";

import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";

const ExpenseList = () => {
  const { list, update, deleteData } = useContext(expense);

  return (
    <>
      <Container>
        <h1 className="text-center text-white mb-3">Expense Data</h1>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Id</th>
              <th>Title</th>
              <th>Amount</th>
              <th>Type</th>
              <th>Category</th>
              <th colSpan={2} className="text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((l) => {
                return(
                  <tr key={l.id}>
                      <td>{l.title}</td>
                      <td>{l.amount}</td>
                      <td>{l.type}</td>
                      <td>{l.category}</td>
                      <td>
                        <button>Edit</button>
                      </td>
                      <td>
                        <button>Delete</button>
                      </td>
                  </tr>
                )
            })}
          </tbody>
        </Table>
      </Container>
    </>
  );
};

export default ExpenseList;
