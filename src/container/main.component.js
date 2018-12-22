import React from 'react';
import { Switch, Route } from 'react-router-dom'

import { Provider } from 'react-redux';
import store from '../redux/store';

import Home from './home/home.component';
import Demo from './demo/demo.component';
import LogoGenerator from './logoGenerator/logoGenerator.component';

class Main extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.state = {};
  }

  componentDidMount() {

  }

  render() {
    return (
      <div className="main-container">
        <Provider store={store}>
          <Switch>
            <Route path='/home' component={Home}/>
            <Route path='/demo' component={Demo}/>
            <Route path='/logo-maker' component={LogoGenerator}/>

            <Route path="*" component={Home} />
          </Switch>
        </Provider>
      </div>
    );
  }
}

export default Main;
