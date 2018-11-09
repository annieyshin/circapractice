import React, { useState, useEffect } from 'react';
import { Form, Button, Divider } from 'semantic-ui-react';
import { fire } from './fire';

const FireBaseTest = (messageId, message) => {
  fire.ref('messages').set({
    id: messageId,
    message: message
  });

  const handleChange = e => {
    console.log(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group style={{ marginBottom: '0' }}>
          <Form.Input
            placeholder="Message"
            name="rate"
            onChange={handleChange}
          />
          <Button type="submit" color="teal" icon="save" content="Submit" />
        </Form.Group>
      </Form>
      <Divider />
    </div>
  );
};

export default FireBaseTest;
