import React from 'react';
import { Header, Icon } from 'semantic-ui-react'
import ReportsNav from './ReportsNav';
import { mockTeamMembers } from '../../Data/mockData';

const ReportsMain = () => {
  return (
    <div>
      <Header size="huge">
        <Icon name="chart bar" />
        <Header.Content>Reports</Header.Content>
        <Header.Subheader style={{ marginTop: '0.5em' }}>
          View reports for your team members, clients, and projects.
        </Header.Subheader>
      </Header>
      <ReportsNav teamMembers={mockTeamMembers}/>
    </div>
  );
};

export default ReportsMain;