import React from 'react';
import ExpensesListItem from './ExpensesListItem';
import { Table } from 'semantic-ui-react';

const ExpensesList = ({expenses, handleDelete}) => {
  
  const getTotal = () => {
    let total = 0;
    expenses.forEach(expense => {
      total += parseInt(expense.cost)
    })
    return total;
  }


  return (
    <Table columns={3} color="red">
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
          <Table.HeaderCell>Total: ${getTotal()}</Table.HeaderCell>
          <Table.HeaderCell />
        </Table.Row>
      </Table.Footer>
    </Table>
  );
};

export default ExpensesList;
