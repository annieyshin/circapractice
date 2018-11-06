import React from 'react';
import { Header, Icon } from 'semantic-ui-react';
import ProjectsList from './ProjectsList';

const ProjectsMain = () => {
  return (
    <div>
      <Header size="huge">
        <Icon name="desktop" />
        <Header.Content>Projects</Header.Content>
        <Header.Subheader style={{ marginTop: '0.5em' }}>
          Browse projects and change their billing type.
        </Header.Subheader>
      </Header>
      <ProjectsList />
    </div>
  );
};

export default ProjectsMain;
