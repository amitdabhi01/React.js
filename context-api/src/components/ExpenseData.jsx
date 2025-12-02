import React from "react";
import { expense } from "./ExpenseContext";
import { useContext } from "react";

const ExpenseData = () => {
  const { credit, debit, balance } = useContext(expense);

  return (
    <>
      <div className="d-flex text-white w-75 mb-4 align-items-center justify-content-center py-4 rounded-5 border">
        <h1 className="me-2">Credit:</h1>
        <h1>{credit}</h1>
      </div>

      <div className="d-flex text-white w-75 border mb-4 align-items-center justify-content-center py-4 rounded-5">
        <h1 className="me-2">Debit:</h1>
        <h1>{debit}</h1>
      </div>

      <div className="d-flex text-white w-75 border mb-4 align-items-center justify-content-center py-4 rounded-5">
        <h1 className="me-2">Total Balance:</h1>
        <h1>{balance}</h1>
      </div>
    </>
  );
};

export default ExpenseData;
