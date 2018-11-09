import React from 'react';
import { Table, Icon } from 'semantic-ui-react';
import BillingTypeSelect from './BillingTypeSelect';

const ProjectListItem = ({ project, clients }) => {
  const { name, billable, cid } = project;
  let clientName = 'None Assigned';

  clients.forEach(client => {
    if (client.id === cid) {
      clientName = client.name;
    }
  });

  return (
    <Table.Row>
      <Table.Cell>{name}</Table.Cell>
      <Table.Cell textAlign="center">
        {billable ? (
          <Icon color="green" name="checkmark" size="large" />
        ) : (
          <Icon color="red" name="x" size="large" />
        )}
      </Table.Cell>
      <Table.Cell>{clientName}</Table.Cell>
      <Table.Cell>
        <BillingTypeSelect />
      </Table.Cell>
    </Table.Row>
  );
};

export default ProjectListItem;
