import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Navbar from './components/Navbar'
import Teams from './components/Teams'
import Tournaments from './components/Tournaments'
import Results from './components/Results'
import Team from './components/Team'

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Teams} />
            <Route path="/tournaments" component={Tournaments} />
            <Route path="/results" component={Results} />
            <Route path="/:team_id" component={Team} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
