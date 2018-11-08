import React, { useState } from 'react';
import { Form } from 'semantic-ui-react';

const options = [
  { key: 'hourly', value: 'Hourly', text: 'Hourly' },
  { key: 'monthly', value: 'Monthly', text: 'Monthly' },
  { key: 'yearly', value: 'Yearly', text: 'Yearly' },
  { key: 'fixed', value: 'Fixed', text: 'Fixed' }
];

const BillingTypeSelect = ({ budgetType }) => {
  const [state, setState] = useState('Hourly');

  const handleChange = (e, selection) => {
    setState(selection.value);
  };

  return (
    <Form>
      <Form.Select
        onChange={handleChange}
        options={options}
        selection
        value={state}
      />
    </Form>
  );
};

export default BillingTypeSelect;
