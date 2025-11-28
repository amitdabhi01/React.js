import React from 'react';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import ExpenseContext from './components/ExpenseContext';

const App = () => {
  return (
    <>
      <ExpenseForm/>
      <ExpenseList/>
      <ExpenseContext/>
    </>
  )
}

export default App;
