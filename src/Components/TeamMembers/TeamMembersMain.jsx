import React from 'react';
import { Header, Icon } from 'semantic-ui-react';

const ProjectsMain = () => {
  return (
    <div>
      <Header size="huge">
        <Icon name="desktop" />
        <Header.Content>Team Members</Header.Content>
        <Header.Subheader style={{ marginTop: '0.5em' }}>
          View all team members and edit their hourly rate.
        </Header.Subheader>
      </Header>
    </div>
  );
};

export default ProjectsMain;
