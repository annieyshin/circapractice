import React from 'react';
import { Table } from 'semantic-ui-react';
import BudgetType from './BudgetType';

const ProjectListItem = ({ project }) => {
  const { name, billable, budgetType, cid } = project;
  return (
    <Table.Row>
      <Table.Cell>{name}</Table.Cell>
      <Table.Cell>{billable ? 'Yes' : 'No'}</Table.Cell>
      <Table.Cell><BudgetType budgetType={budgetType} /></Table.Cell>
      <Table.Cell>{cid}</Table.Cell>
    </Table.Row>
  );
};

export default ProjectListItem;
