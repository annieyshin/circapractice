import React from 'react';
import { Menu } from 'semantic-ui-react';
import { mockTeamMembers } from '../../Data/mockData';
import TeamMemberSelect from './TeamMemberSelect';

const ReportsNav = () => {
  return (
    <Menu>
      <TeamMemberSelect mockTeamMembers={mockTeamMembers} />
    </Menu>
  );
};

export default ReportsNav;
