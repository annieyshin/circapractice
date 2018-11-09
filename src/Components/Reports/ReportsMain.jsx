import React from 'react';
import { Header, Icon } from 'semantic-ui-react';
import ReportsNav from './ReportsNav';
import ReportsTable from './ReportsTable';

const ReportsMain = ({ data }) => {
  return (
    <div>
      <Header size="huge">
        <Icon name="chart bar" />
        <Header.Content>Reports</Header.Content>
        <Header.Subheader style={{ marginTop: '0.5em' }}>
          View reports for your team members, clients, and projects.
        </Header.Subheader>
      </Header>
      <ReportsNav data={data} />
      <ReportsTable teamMembers={data.users} />
    </div>
  );
};

export default ReportsMain;
