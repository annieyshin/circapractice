import React, { Component } from "react";
import { Menu } from "semantic-ui-react";
import { NavLink, withRouter, Link } from "react-router-dom";

class NavBar extends Component {
  render() {
    return (
      <div>
        <Menu fixed="top">
          <Menu.Item as={Link} to="/" name="Circa">
            <img
              src="./logo.png"
              alt="logo"
              style={{ height: "100px", width: "100%" }}
            />
          </Menu.Item>
          <Menu.Item as={NavLink} to="/reports" name="Reports" />
          <Menu.Item as={NavLink} to="/expenses" name="Expenses" />
          <Menu.Item as={NavLink} to="/projects" name="Projects" />
        </Menu>
      </div>
    );
  }
}

export default withRouter(NavBar);
