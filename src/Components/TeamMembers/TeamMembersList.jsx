import React from 'react';
import { Table } from 'semantic-ui-react';
import TeamMembersListItem from './TeamMembersListItem';

const TeamMembersList = ({teamMembers}) => {
  return (
    <div>
      <Table columns={3} color="orange">
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Name</Table.HeaderCell>
            <Table.HeaderCell>Email</Table.HeaderCell>
            <Table.HeaderCell>Hourly Rate</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {teamMembers &&
            teamMembers.map(teamMember => (
              <TeamMembersListItem
                key={teamMember.id}
                teamMember={teamMember}
              />
            ))}
        </Table.Body>
      </Table>
    </div>
  );
};

export default TeamMembersList;
