import React from 'react';
import { Form } from 'semantic-ui-react';

const options = [
  { key: 'hourly', value: 'hourly', text: 'Hourly' },
  { key: 'monthly', value: 'monthly', text: 'Monthly' },
  { key: 'yearly', value: 'yearly', text: 'Yearly' },
  { key: 'fixed', value: 'fixed', text: 'Fixed' }
];

const BudgetType = ({budgetType}) => {
  return (
    <Form>
      <Form.Select options={options} placeholder={budgetType}/>
    </Form>
  );
};

export default BudgetType;
