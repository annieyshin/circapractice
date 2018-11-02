import React from "react";
import { Segment, Icon } from "semantic-ui-react";

const ExpensesListItem = () => {
  return (
    <Segment.Group horizontal>
      <Segment>Example Expense</Segment>
      <Segment>Amount in $$</Segment>
      <Segment>
        <Icon name="edit" />
      </Segment>
      <Segment>
        <Icon name="delete" />
      </Segment>
    </Segment.Group>
  );
};

export default ExpensesListItem;
