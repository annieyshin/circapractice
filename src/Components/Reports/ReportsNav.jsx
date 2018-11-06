import React from 'react';
import { Menu, Dropdown } from 'semantic-ui-react';
import { mockTeamMembers } from '../../Data/mockData';

const ReportsNav = () => {
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

  return (
    <Menu>
      <Dropdown selection options={options} placeholder="Select Team Member"/>
    </Menu>
  );
};

export default ReportsNav;
