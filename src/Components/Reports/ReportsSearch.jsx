import React from 'react';
import { Search, Menu } from 'semantic-ui-react';

const ReportsSearch = () => {
  return (
    <Menu.Menu position="right">
      <Menu.Item>
        <Search />
      </Menu.Item>
    </Menu.Menu>
  );
};

export default ReportsSearch;
