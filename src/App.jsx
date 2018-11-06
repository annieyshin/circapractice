import React, { Component } from "react";
import { Container } from "semantic-ui-react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./Components/HomePage";
import NavBar from "./Components/NavBar";
import ReportsMain from "./Components//Reports/ReportsMain";
import ExpensesMain from './Components/Expenses/ExpensesMain'
import ProjectsMain from "./Components/Projects/ProjectsMain";

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={HomePage} />
        </Switch>

        <Route
          path="/(.+)"
          render={() => (
            <div>
              <NavBar />
              <Container className="main">
                <Switch>
                  <Route path="/reports" component={ReportsMain} />
                  <Route path="/expenses" component={ExpensesMain} />
                  <Route path="/projects" component={ProjectsMain} />
                </Switch>
              </Container>
            </div>
          )}
        />
      </div>
    );
  }
}

export default App;
