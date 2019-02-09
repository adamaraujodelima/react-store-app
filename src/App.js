import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import MainTemplate from './template/Main';
import { router } from './pages';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <MainTemplate>{ router }</MainTemplate>
        </Router>
      </div>
    );
  }
}

export default App;
