import React from 'react';
import LogoGenerator from '../logoGenerator/logoGenerator.component';

class Home extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.state = {};
  }

  componentDidMount() {

  }

  render() {
    return (
      <div className="home-container">
        <LogoGenerator />
      </div>
    );
  }
}

export default Home;
