import React from 'react';
import { Menu } from 'semantic-ui-react';
import TeamMemberSelect from './TeamMemberSelect';
import ClientSelect from './ClientSelect';
import ProjectsSelect from './ProjectsSelect';


const ReportsNav = ({teamMembers, clients, projects}) => {
  return (
    <Menu borderless>
      <TeamMemberSelect teamMembers={teamMembers} />
      <ClientSelect clients={clients} />
      <ProjectsSelect projects={projects} />
    </Menu>


  );
};

export default ReportsNav;
