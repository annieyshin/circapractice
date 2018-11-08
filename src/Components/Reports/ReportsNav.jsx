import React from 'react';
import { Menu } from 'semantic-ui-react';
import TeamMemberSelect from './TeamMemberSelect';
import ClientSelect from './ClientSelect';
import ProjectsSelect from './ProjectsSelect';

const ReportsNav = ({ data }) => {
  const { clients, projects, users } = data;

  return (
    <Menu borderless>
      {users && <TeamMemberSelect teamMembers={users} />}
      {clients && <ClientSelect clients={clients} />}
      {projects && <ProjectsSelect projects={projects} />}
    </Menu>
  );
};

export default ReportsNav;
