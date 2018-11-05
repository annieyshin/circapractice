import React, { Component } from "react";
import { Icon, Table } from "semantic-ui-react";

const listIcons = {
  marginLeft: "1em",
};

export class ExpensesListItem extends Component {
  render() {
    const { title, cost } = this.props;
    return (
      <Table.Row>
        <Table.Cell>{title}</Table.Cell>
        <Table.Cell>${cost}</Table.Cell>
        <Table.Cell>
          <Icon name="edit" color="grey" style={listIcons} />
          <Icon name="delete" color="red" style={listIcons} />
        </Table.Cell>
      </Table.Row>
    );
  }
}

export default ExpensesListItem;
