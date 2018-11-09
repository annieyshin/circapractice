import React, { useState } from 'react';
import { Form, Button } from 'semantic-ui-react';

const options = [
  { key: 'hourly', value: 'Hourly', text: 'Hourly' },
  { key: 'monthly', value: 'Monthly', text: 'Monthly' },
  { key: 'yearly', value: 'Yearly', text: 'Yearly' },
  { key: 'fixed', value: 'Fixed', text: 'Fixed' }
];

const BillingTypeSelect = () => {
  const [billingType, setBillingType] = useState('Hourly');

  const handleChange = (e, {value}) => {
    console.log(value);
    
    setBillingType(value);
  };

  const handleSubmit = () => {
    console.log('Submitting ' + billingType);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group inline style={{ marginBottom: '0' }}>
        <Form.Select
          onChange={handleChange}
          options={options}
          selection
          value={billingType}
          style={{ minWidth: '8em' }}
        />
        <Button type="submit" color="teal" icon="save" content="Save" />
      </Form.Group>
    </Form>
  );
};

export default BillingTypeSelect;
