import React, { useState } from 'react';
import { Table } from 'semantic-ui-react';
import ProjectListItem from './ProjectListItem';
import { mockProjects } from '../../Data/mockData';

const ProjectsList = () => {
  const [projects] = useState(mockProjects);

  return (
    <Table columns={4}>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Name</Table.HeaderCell>
          <Table.HeaderCell>Billable</Table.HeaderCell>
          <Table.HeaderCell>Budget Type</Table.HeaderCell>
          <Table.HeaderCell>Client</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {projects &&
          projects.map(project => (
            <ProjectListItem key={project.id} project={project} />
          ))}
      </Table.Body>
    </Table>
  );
};

export default ProjectsList;
