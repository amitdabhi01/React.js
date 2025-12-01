import React from "react";
import { expense } from "./ExpenseContext";
import { useContext } from "react";

const ExpenseData = () => {
  const { credit, debit, balance } = useContext(expense);

  return (
    <>
      <div className="d-flex text-white">
        <h1 className="me-3 mb-5">Credit:</h1>
        <h1>{credit}</h1>
      </div>

      <div className="d-flex text-white">
        <h1 className="me-3 mb-5">Debit:</h1>
        <h1>{debit}</h1>
      </div>

      <div className="d-flex text-white">
        <h1 className="me-3">Total Balance:</h1>
        <h1>{balance}</h1>
      </div>
    </>
  );
};

export default ExpenseData;
