import React from 'react';
import { Form } from 'semantic-ui-react';
import { v4 } from 'uuid';

const ExpensesForm = ({ handleCancel, handleCreate }) => {

  const handleSubmit = e => {
    e.preventDefault();
    let submittedTitle = e.target.title.value;
    let submittedCost = e.target.cost.value;

    let newExpense = { id: v4(), title: submittedTitle, cost: submittedCost }

    if (newExpense) {
      handleCreate(newExpense);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Input
          placeholder="New Expense"
          name="title"
          type="text"
          width={4}
        />
        <Form.Input placeholder="Cost" name="cost" type="number" width={4} />
        <Form.Button content="Submit" positive />
        <Form.Button onClick={handleCancel} content="Cancel" />
      </Form.Group>
    </Form>
  );
};

export default ExpensesForm;
