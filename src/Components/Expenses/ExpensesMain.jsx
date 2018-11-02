import React from 'react';
import { Grid } from 'semantic-ui-react';

const ExpensesMain = () => {
  return (
    <Grid columns={2} divided>
      <Grid.Row>
        <Grid.Column>
          <h1>Add Expenses</h1>
        </Grid.Column>
        <Grid.Column>
          <h1>Current Expenses</h1>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  )
}

export default ExpensesMain
