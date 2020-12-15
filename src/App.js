import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

// Header Component
import Header from './components/header/header.component';
// Pages
import About from './pages/about/about.component';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route path="/" exact component={About} />
          <Route path="/about" component={About} />
        </Switch>
      </div>
    );
  }
}

export default App;

