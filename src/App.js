import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Counter from './components/Counter';
import NavBar from './components/NavBar';
import Settings from './components/Settings';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Counter} />
          <Route path="/settings" component={Settings} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
