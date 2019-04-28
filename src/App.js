import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';
import Counter from './components/Counter';
import Settings from './components/Settings';
import './App.css';

class App extends React.Component {
  state = {
    changeAmount: 1,
    resetAmount: 0,
  }

  handleChange = (changeType, value) => {
    const numberValue = parseInt(value);
    switch (changeType) {
      case 'changeAmount':
        this.setState(() => ({
          changeAmount: numberValue
        }))
        break;
      case 'resetAmount':
        this.setState(() => ({
          resetAmount: numberValue
        }))
        break;
      default:
        return undefined
    }
  }

  render() {
    return (
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path="/" render={(routeProps) => <Counter {...routeProps} {...this.state} />}></Route>
          <Route path="/settings" render={(routeProps) => <Settings {...routeProps} {...this.state} handleChange={this.handleChange} />}></Route>
        </Switch>
      </BrowserRouter>

    );
  }
}

export default App;