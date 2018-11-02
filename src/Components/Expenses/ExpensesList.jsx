import React, { Component } from "react";
import ExpensesListItem from "./ExpensesListItem";
import { Table } from "semantic-ui-react";
import { mockExpenses } from "../../Data/mockExpenses";

class ExpensesList extends Component {
  render() {
    return (
      <Table columns={3} collapsing>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Title</Table.HeaderCell>
            <Table.HeaderCell>Cost</Table.HeaderCell>
            <Table.HeaderCell>Actions</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {mockExpenses.map(expense => (
            <ExpensesListItem
              key={expense.id}
              title={expense.title}
              cost={expense.cost}
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
  }
}

export default ExpensesList;
