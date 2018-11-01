import React from 'react'
import { Menu } from 'semantic-ui-react'

const NavBar = () => {
  return (
    <div>
      <Menu>
        <Menu.Item>
          Projects
        </Menu.Item>

        <Menu.Item>
          Expenses
        </Menu.Item>

        <Menu.Item>
          Reports
        </Menu.Item>
      </Menu>
    </div>
  )
}

export default NavBar
