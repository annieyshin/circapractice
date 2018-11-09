import React from 'react';
import { Header, Icon } from 'semantic-ui-react';
import TeamMembersList from './TeamMembersList';

const TeamMembersMain = ({ data }) => {
  const teamMembers = data.users;
  return (
    <div>
      <Header size="huge">
        <Icon name="desktop" />
        <Header.Content>Team Members</Header.Content>
        <Header.Subheader style={{ marginTop: '0.5em' }}>
          View all team members and edit their hourly rate.
        </Header.Subheader>
      </Header>
      <TeamMembersList teamMembers={teamMembers} />
    </div>
  );
};

export default TeamMembersMain;
