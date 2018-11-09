import React, { useState } from 'react';
import { Form } from 'semantic-ui-react';

const HourlyInput = () => {
  const [hourlyRate, setHourlyRate] = useState();

  const handleChange = e => {
    setHourlyRate(e.target.value);
  };

  return (
    <Form>
      <Form.Input
        name="rate"
        type="number"
        value={hourlyRate}
        onChange={handleChange}
      />
    </Form>
  );
};

export default HourlyInput;
