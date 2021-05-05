import React, { useState } from "react";

import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";

const dummyExpenses = [
  {id: 'e1', title: 'Books', amount: '34.99', date: new Date(2020, 7, 14)},
  {id: 'e2', title: 'Car Insurence', amount: '454', date: new Date(2021, 1, 6)},
  {id: 'e3', title: 'Movies', amount: '24.99', date: new Date(2019, 8, 28)},
]

const App = () => {
  const [expenses, setExpenses] = useState(dummyExpenses);

  const addExpenseHandler = expense => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
    console.log(expense);
  }

  return (
    <div>
        <NewExpense onAddExpense={addExpenseHandler}/>
        <Expenses items={expenses}/>
    </div>
  );
}

export default App;
