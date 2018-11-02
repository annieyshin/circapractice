import React, { Component } from "react";
import { Button, Header, Icon } from "semantic-ui-react";
import ExpensesList from "./ExpensesList";
import ExpensesForm from "./ExpensesForm";

class ExpensesMain extends Component {
  render() {
    return (
      <div>
        <Header size="huge">
          <Icon name="money bill alternate outline" />
          <Header.Content>Expenses</Header.Content>
        </Header>
        <ExpensesList />
        <Button
          content="Add Expense"
          icon="add"
          primary
          style={{ marginBottom: "2em" }}
        />
        <ExpensesForm />
      </div>
    );
  }
}

export default ExpensesMain;
