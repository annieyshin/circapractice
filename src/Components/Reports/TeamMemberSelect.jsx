import React from 'react';
import { Menu, Select } from 'semantic-ui-react';

const TeamMemberSelect = ({ mockTeamMembers }) => {
  const getOptions = mockTeamMembers => {
    let options = [];

    mockTeamMembers.forEach(teamMember => {
      let newTeamMember = {
        key: teamMember.id,
        value: teamMember.id,
        text: teamMember.name
      };
      options.push(newTeamMember);
    });

    return options;
  };

  const options = getOptions(mockTeamMembers);

  const handleChange = (e, selection) => {
    //selection.value is the ID of the selected item
    console.log(selection.value);
  };

  return (
    <Menu.Item>
      <Select
        onChange={handleChange}
        selection
        options={options}
        placeholder="Select Team Member"
      />
    </Menu.Item>
  );
};

export default TeamMemberSelect;
