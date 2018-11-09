import React from 'react';
import { Table } from 'semantic-ui-react';

const TeamMembersListItem = ({ teamMember }) => {
  const { fullname, email } = teamMember;
  return (
    <Table.Row>
      <Table.Cell>{fullname}</Table.Cell>
      <Table.Cell>{email}</Table.Cell>
      <Table.Cell />
    </Table.Row>
  );
};

export default TeamMembersListItem;
