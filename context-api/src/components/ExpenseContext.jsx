import React from "react";
import { createContext, useState } from "react";

export const expense = createContext({
  add: () => {},
  list: [],
  update: () => {},
  deleteData: () => {},
  editValue: null,
});

const ExpenseContext = ({ children }) => {
  const initialState = [
    {
      id: 1,
      title: "Salary",
      amount: "10000",
      category: "general",
      type: "credit",
    },
  ];

  const [data, setData] = useState(initialState);

  console.log("data", data);

  const add = (input) => {
    if (!input.title || input.amount || input.type || input.category) {
      alert("please fill all the data required");
    } else if (editValue) {
      setData((prev) =>
        prev.map((d) =>
          d.id === editValue.id
            ? {
                ...d,
                title: input.title,
                amount: input.amount,
                type: input.type,
                category: input.category,
              }
            : d
        )
      );
      setEditValue(null);
    } else {
      const newData = {
        id: new Date().getTime(),
        title: input.title,
        amount: input.amount,
        type: input.type,
        category: input.category,
      };
      setData((prev) => [...prev, newData]);
    }
  };
  console.log("data", data);

  return <></>;
};

export default ExpenseContext;
