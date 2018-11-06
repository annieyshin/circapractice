import React from 'react';
import { Icon, Table, Button, Popup } from 'semantic-ui-react';

const iconButtons = {
  boxShadow: 'none',
  margin: '0 1em 0em 0',
  padding: "0 0 0.2em 0"
};

const ExpensesListItem = ({ id, title, cost, handleDelete }) => {
  return (
    <Table.Row>
      <Table.Cell>{title}</Table.Cell>
      <Table.Cell>${cost}</Table.Cell>
      <Table.Cell>
        <Popup
          trigger={
            <Button icon basic style={iconButtons}>
              <Icon name="edit" size="large" />
            </Button>
          }
          content="Edit Expense"
        />

        <Popup
          basic
          trigger={
            <Button icon basic style={iconButtons}>
              <Icon name="delete" color="red" size="large" />
            </Button>
          }
          content={
            <Button
              color="red"
              content="Confirm Delete"
              onClick={() => handleDelete(id)}
            />
          }
          on="click"
          position="right center"
        />
      </Table.Cell>
    </Table.Row>
  );
};

export default ExpensesListItem;
