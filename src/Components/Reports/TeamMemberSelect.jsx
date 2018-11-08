import React, { useState } from 'react';
import { Select, Menu } from 'semantic-ui-react';

const TeamMemberSelect = ({ teamMembers }) => {
  const getOptions = teamMembers => {
    let options = [];
    teamMembers.forEach(teamMember => {
      let option = {
        key: teamMember.id,
        value: teamMember.name,
        text: teamMember.name
      };
      options.push(option);
    });
    return options;
  };

  const options = getOptions(teamMembers);

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
        placeholder="Team Member"
        value={selection}
      />
    </Menu.Item>
  );
};

export default TeamMemberSelect;
