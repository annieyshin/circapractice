import React from 'react';
import { Table, Icon } from 'semantic-ui-react';
import BillingTypeSelect from './BillingTypeSelect';

const ProjectListItem = ({ project, clients }) => {
  const { name, billable, budgetType, cid } = project;
  let clientName = 'None';

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
      <Table.Cell>{clientName ? clientName : 'None ya'}</Table.Cell>
      <Table.Cell>
        <BillingTypeSelect budgetType={budgetType} />
      </Table.Cell>
    </Table.Row>
  );
};

export default ProjectListItem;
