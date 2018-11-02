import React from "react";
import { Grid, Button, Header, Icon } from "semantic-ui-react";
import ExpensesList from "./ExpensesList";

const ExpensesMain = () => {
  return (
    <Grid columns={2}>
      <Grid.Column width={10}>
        <Header size="huge">
          <Icon name="money bill alternate outline" />
          <Header.Content>Expenses</Header.Content>
        </Header>
        <ExpensesList />
        <Button content="Add Expense" icon="add" primary />
      </Grid.Column>
      <Grid.Column width={6}>
        add new expense form to display on click of add expense button
      </Grid.Column>
    </Grid>
  );
};

export default ExpensesMain;