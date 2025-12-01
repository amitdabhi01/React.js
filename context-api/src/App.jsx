import React from 'react';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import ExpenseContext from './components/ExpenseContext';
import ExpenseData from './components/ExpenseData';

const App = () => {
  return (
    <>
      <ExpenseContext>
        <ExpenseForm/>
        <ExpenseList/>
      </ExpenseContext>
    </>
  )
}

export default App;
