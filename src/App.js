
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './component/header/header.component';
import Main from './container/main.component';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Main />
      </div>
    );
  }
}

export default App;
