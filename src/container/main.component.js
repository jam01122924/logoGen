import React from 'react';
import { Switch, Route } from 'react-router-dom'

import Home from './home/home.component';
import Demo from './demo/demo.component';

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
        <Switch>
          <Route path='/home' component={Home}/>
          <Route path='/demo' component={Demo}/>

          <Route path="*" component={Home} />
        </Switch>
      </div>
    );
  }
}

export default Main;
