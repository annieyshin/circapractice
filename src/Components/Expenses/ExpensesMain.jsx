import React, { useState } from "react";
import { Button, Header, Icon } from "semantic-ui-react";
import ExpensesList from "./ExpensesList";
import ExpensesForm from "./ExpensesForm";

const ExpensesMain = () => {
  const [showForm, toggleForm] = useState(false);
  return (
    <div>
      <Header size="huge">
        <Icon name="money bill alternate outline" />
        <Header.Content>Expenses</Header.Content>
      </Header>
      <ExpensesList />
      <Button
        onClick={() => toggleForm(showForm ? false : true)}
        content="Add Expense"
        icon="add"
        primary
        style={{ marginBottom: "2em" }}
      />
      {showForm && <ExpensesForm />}
    </div>
  );
};

export default ExpensesMain;
