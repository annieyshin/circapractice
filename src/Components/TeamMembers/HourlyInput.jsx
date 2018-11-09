import React, { useState } from 'react';
import { Input } from 'semantic-ui-react';

const HourlyInput = () => {
  const [hourlyRate, setHourlyRate] = useState();

  const handleChange = e => {
    setHourlyRate(e.target.value);
  };

  const handleClick = e => {
    console.log(hourlyRate);
  };

  return (
    <Input
      action={{
        color: 'teal',
        labelPosition: 'right',
        icon: 'save',
        content: 'Submit',
        onClick: handleClick
      }}
      value={hourlyRate}
      onChange={handleChange}
    />
  );
};

export default HourlyInput;
