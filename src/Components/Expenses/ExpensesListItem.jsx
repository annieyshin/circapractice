import React from "react";
import { Icon, Table, Button, Popup } from "semantic-ui-react";

const iconButtons = {
  boxShadow: "none",
  marginRight: "0.5em"
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
              <Icon name="edit" />
            </Button>
          }
          content="Edit Expense"
        />

        <Popup
          basic
          trigger={
            <Button icon basic style={iconButtons}>
              <Icon name="delete" color="red" />
            </Button>
          }
          content={
            <Button
              color="red"
              content="Confirm"
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
