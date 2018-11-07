import React from 'react';
import { Table } from 'semantic-ui-react';
import ReportsTableItem from './ReportsTableItem';

const ReportsTable = ({teamMembers}) => {
  return (
    <Table columns={5} color="purple">
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Team Member</Table.HeaderCell>
          <Table.HeaderCell>Labor Cost</Table.HeaderCell>
          <Table.HeaderCell>Expense Cost</Table.HeaderCell>
          <Table.HeaderCell>Gross Revenue</Table.HeaderCell>
          <Table.HeaderCell>Net Revenue</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {teamMembers &&
          teamMembers.map(teamMember => (
            <ReportsTableItem
              key={teamMember.id}
              id={teamMember.id}
              name={teamMember.name}
            />
          ))}
      </Table.Body>
      <Table.Footer>
        <Table.Row>
          <Table.HeaderCell />
          <Table.HeaderCell>Total: $something</Table.HeaderCell>
          <Table.HeaderCell>Total: $something</Table.HeaderCell>
          <Table.HeaderCell>Total: $something</Table.HeaderCell>
          <Table.HeaderCell>Total: $something</Table.HeaderCell>
        </Table.Row>
      </Table.Footer>
    </Table>
  );
};

export default ReportsTable;
