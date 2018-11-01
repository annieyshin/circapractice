import React, { Component } from "react";
import { Menu } from "semantic-ui-react";

class NavBar extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeLink: name })

  render() {
    const { activeLink } = this.state;
    
    return (
      <div>
        <Menu>
          <Menu.Item>
            <img src="https://via.placeholder.com/200" alt="logo" />
          </Menu.Item>

          <Menu.Item
            name="reports"
            active={activeLink === "reports"}
            onClick={this.handleItemClick}
          >
            Reports
          </Menu.Item>

          <Menu.Item
            name="expenses"
            active={activeLink === "expenses"}
            onClick={this.handleItemClick}
          >
            Expenses
          </Menu.Item>

          <Menu.Item
            name="projects"
            active={activeLink === "projects"}
            onClick={this.handleItemClick}
          >
            Projects
          </Menu.Item>
        </Menu>
      </div>
    );
  }
}

export default NavBar;
