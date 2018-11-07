import React from 'react';
import { Menu } from 'semantic-ui-react';
import TeamMemberSelect from './TeamMemberSelect';
import ReportsSearch from './ReportsSearch';


const ReportsNav = ({teamMembers}) => {
  return (
    <Menu borderless>
      <TeamMemberSelect teamMembers={teamMembers} />
      <ReportsSearch />
    </Menu>


  );
};

export default ReportsNav;
