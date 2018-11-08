import React from 'react';
import { Header, Icon } from 'semantic-ui-react';
import ProjectsList from './ProjectsList';

const ProjectsMain = ({data}) => {
  return (
    <div>
      <Header size="huge">
        <Icon name="desktop" />
        <Header.Content>Projects</Header.Content>
        <Header.Subheader style={{ marginTop: '0.5em' }}>
          Browse projects and change their billing type.
        </Header.Subheader>
      </Header>
      <ProjectsList data={data}/>
    </div>
  );
};

export default ProjectsMain;
