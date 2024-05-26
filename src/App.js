import React, { useState } from 'react';
import Expenses from "./components/Expenses";
import ExpenseForm from "./components/ExpenseForm";
import Clock from './components/Clock';
import './App.css';

function App() {
  const [showForm, setShowForm] = useState(false);

  const expense = [
    { title: 'mazda', amount: 3000, date: new Date(2020, 2, 28) },
    { title: 'ford', amount: 2000, date: new Date(2021, 3, 28) },
    { title: 'nisan', amount: 1000, date: new Date(2022, 4, 28) },
    { title: 'honda', amount: 500, date: new Date(2023, 5, 28) },
  ];

  const showFormHandler = () => {
    setShowForm(true);
  };

  const hideFormHandler = () => {
    setShowForm(false);
  };

  return (
    <div className="app">
      <Clock />
      {!showForm && <button onClick={showFormHandler}>Add New Expense</button>}
      {showForm && <ExpenseForm onCancel={hideFormHandler} />}
      <Expenses items={expense} />
    </div>
  );
}

export default App;
