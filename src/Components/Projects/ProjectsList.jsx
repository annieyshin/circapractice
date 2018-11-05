import React from 'react';
import { Segment, Item } from 'semantic-ui-react';
import ProjectListItem from './ProjectListItem';

const ProjectsList = () => {
  return (
    <Segment>
      <Item>
        <ProjectListItem />
      </Item>
    </Segment>
  );
};

export default ProjectsList;
