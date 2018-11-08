import React, { useState } from 'react';
import { Select, Menu } from 'semantic-ui-react';

const ClientSelect = ({ clients }) => {
  const getOptions = clients => {
    let options = [];
    clients.forEach(client => {
      let option = {
        key: client.id,
        value: client.name,
        text: client.name
      };
      options.push(option);
    });
    return options;
  };

  const options = getOptions(clients);

  const [selection, setSelection] = useState(null);

  const handleChange = (e, {value}) => {
    setSelection(value);
  };

  // console.log(`Current selection is: ${selection}`);

  return (
    <Menu.Item>
      <Select
        onChange={handleChange}
        options={options}
        placeholder="Client"
        value={selection}
      />
    </Menu.Item>
  );
};

export default ClientSelect;
