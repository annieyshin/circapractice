import React from 'react';
import { Button } from 'semantic-ui-react';

const HomePage = ({ history }) => {
  return (
    <div style={{ margin: '50px 50px' }}>
      <h1>Homepage with maybe a login screen for sure.</h1>
      <Button size="massive" primary onClick={() => history.push('/reports')}>
        Go to reports!
      </Button>
      <Button size="massive" primary onClick={() => history.push('/expenses')}>
        Go to expenses!
      </Button>
      <Button size="massive" primary onClick={() => history.push('/projects')}>
        Go to projects!
      </Button>
    </div>
  );
};

export default HomePage;
