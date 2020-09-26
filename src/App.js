import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Teams from './components/Teams'
import Tournaments from './components/Tournaments'
import Results from './components/Results'


class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Route exact path="/" component={Teams} />
          <Route path="/tournaments" component={Tournaments} />
          <Route path="/results" component={Results} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
