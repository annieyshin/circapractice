import React from 'react';
import { Button } from 'semantic-ui-react';

const HomePage = ({ history }) => {
  return (
    <div style={{ margin: '50px 50px' }}>
      <h1>Homepage with maybe a login screen</h1>
      <Button size="massive" primary onClick={() => history.push('/reports')}>
        Go to reports!
      </Button>
      <Button size="massive" primary onClick={() => history.push('/test')}>
        Go to test area!
      </Button>
    </div>
  );
};

export default HomePage;
