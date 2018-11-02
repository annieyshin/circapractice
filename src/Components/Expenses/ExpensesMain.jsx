import React from "react";
import { Container, Button, Header, Icon } from "semantic-ui-react";
import ExpensesList from "./ExpensesList";

const ExpensesMain = () => {
  return (
    <Container>
      <Header size="huge" icon="clock">
        <Icon name="money bill alternate outline" />
        <Header.Content>Expenses</Header.Content>
      </Header>
      <ExpensesList />
      <Button content="Add Expense" icon="add" primary/>
    </Container>
  );
};

export default ExpensesMain;
