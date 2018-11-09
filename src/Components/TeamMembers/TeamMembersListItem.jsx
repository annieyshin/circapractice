import React from 'react';
import { Table } from 'semantic-ui-react';
import HourlyInput from './HourlyInput';

const TeamMembersListItem = ({ teamMember }) => {
  const { fullname, email } = teamMember;
  return (
    <Table.Row>
      <Table.Cell>{fullname}</Table.Cell>
      <Table.Cell>{email}</Table.Cell>
      <Table.Cell><HourlyInput /></Table.Cell>
    </Table.Row>
  );
};

export default TeamMembersListItem;
