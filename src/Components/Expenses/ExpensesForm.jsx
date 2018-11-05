import React from 'react';
import { Form } from 'semantic-ui-react';

const ExpensesForm = ({ handleCancel }) => {
  return (
    <Form>
      <Form.Group>
        <Form.Input placeholder="New Expense" type="text" width={4} />
        <Form.Input placeholder="Cost" type="number" width={4} />
        <Form.Button content="Submit" primary disabled />
        <Form.Button onClick={handleCancel} content="Cancel" />
      </Form.Group>
    </Form>
  );
};

export default ExpensesForm;
