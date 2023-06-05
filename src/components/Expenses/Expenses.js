import React, { useState } from "react";
import ExpensesList from "./ExpensesList";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
  const [dateFilter, setDateFilter] = useState("2020");
  const filterDate = (selectedYear) => {
    setDateFilter(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === dateFilter;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={dateFilter} onChangeFilter={filterDate} />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
}

export default Expenses;
