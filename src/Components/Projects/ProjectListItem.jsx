import React from 'react';
import { Table } from 'semantic-ui-react';
import BudgetTypeSelection from './BudgetTypeSelection';

const ProjectListItem = ({ project }) => {
  const { name, billable, budgetType, cid } = project;
  return (
    <Table.Row>
      <Table.Cell>{name}</Table.Cell>
      <Table.Cell>{billable ? 'Yes' : 'No'}</Table.Cell>
      <Table.Cell>{`Angel's Envy ${cid}`}</Table.Cell>
      <Table.Cell><BudgetTypeSelection budgetType={budgetType} /></Table.Cell>
    </Table.Row>
  );
};

export default ProjectListItem;
