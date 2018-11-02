import React from "react";
import { Container, Button, Header, Icon } from "semantic-ui-react";
import ExpensesList from "./ExpensesList";

const ExpensesMain = () => {
  return (
    <Container>
      <Header size="huge">
        <Icon name="money bill alternate outline" />
        <Header.Content>Expenses</Header.Content>
      </Header>
      <ExpensesList />
      <br/>
      <Button content="Add Expense" icon="add" primary/>
    </Container>
  );
};

export default ExpensesMain;
