import React, { useState } from 'react';
import ExpensesListItem from './ExpensesListItem';
import { Table } from 'semantic-ui-react';
import { mockExpenses } from '../../Data/mockExpenses';

const ExpensesList = () => {
  const [expenses, setExpenses] = useState(mockExpenses);

  const handleDelete = expenseId => {
    const newExpenses = expenses.filter(e => e.id !== expenseId);
    setExpenses(newExpenses);
  };

  return (
    <Table columns={3}>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Title</Table.HeaderCell>
          <Table.HeaderCell>Cost</Table.HeaderCell>
          <Table.HeaderCell>Actions</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {expenses &&
          expenses.map(expense => (
            <ExpensesListItem
              key={expense.id}
              id={expense.id}
              title={expense.title}
              cost={expense.cost}
              handleDelete={handleDelete}
            />
          ))}
      </Table.Body>
      <Table.Footer>
        <Table.Row>
          <Table.HeaderCell />
          <Table.HeaderCell>Total: $500</Table.HeaderCell>
          <Table.HeaderCell />
        </Table.Row>
      </Table.Footer>
    </Table>
  );
};

export default ExpensesList;
