import React, { useState } from 'react';
import { Form, Button } from 'semantic-ui-react';

const HourlyInput = () => {
  const [hourlyRate, setHourlyRate] = useState();

  const handleSubmit = e => {
    e.preventDefault();
    let submittedRate = e.target.rate.value;
    setHourlyRate(submittedRate);
  };

  console.log(hourlyRate);

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group inline>
        <Form.Input placeholder="Rate" name="rate" type="number" />
        <Button type="submit">Save</Button>
      </Form.Group>
    </Form>
  );
};

export default HourlyInput;
