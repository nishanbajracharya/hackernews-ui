import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import List from './views/list';
import Story from './views/story';

class App extends Component {
  render() {
    return (
      <Router basename="/hackernews-ui">
        <div className="App">
          <Route path="/" component={List} />
          <Route path="/story/:storyId" component={Story} />
        </div>
      </Router>
    );
  }
}

export default App;
