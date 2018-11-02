import React from 'react';
import ExpensesListItem from './ExpensesListItem';
import { Segment } from 'semantic-ui-react';

const ExpensesList = () => {
  return (
    <Segment.Group vertical compact>
      <ExpensesListItem />
    </Segment.Group>
  )
}

export default ExpensesList
