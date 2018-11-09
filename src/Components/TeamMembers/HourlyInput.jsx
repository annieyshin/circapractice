import React, { useState } from 'react';
import { Form, Button } from 'semantic-ui-react';

const HourlyInput = () => {
  const [hourlyRate, setHourlyRate] = useState();

  const handleSubmit = () => {
    console.log(`Submitting ${hourlyRate}`);
  };

  const handleChange = e => {
    setHourlyRate(e.target.value);
  };

  console.log(hourlyRate);

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group inline style={{ marginBottom: '0' }}>
        <Form.Input
          placeholder="Hourly Pay Rate"
          name="rate"
          type="number"
          onChange={handleChange}
        />
        <Button type="submit" color="teal" icon="save" content="Save" />
      </Form.Group>
    </Form>
  );
};

export default HourlyInput;
