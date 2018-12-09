import React from 'react';
import { Jumbotron, Button, A } from 'react-bootstrap';

class Step1 extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      name: ''
    };

    this.onChange = this.onChange.bind(this);
    this.confirm = this.confirm.bind(this);
  }

  componentDidMount() {

  }

  onChange(e) {
    if(e.target.value) {
      this.setState({
        name: e.target.value
      })
    }
  }
  confirm() {
    this.props.confirm(this.state.name);
  }

  render() {
    return (
      <div className="step1-container">
        <Jumbotron className="jumbotron-container">
          <h1>What is your company name?</h1>
          <p>
            Pick up a good name is extremely important for your business.   <a href="/nameDemo">Need Help</a>?
          </p>
          <div className="name-input-box">
            <input onChange={this.onChange} type="text" />
          </div>
          <p>
            <Button bsStyle="primary" onClick={this.confirm}>CONFIRM</Button>
          </p>
        </Jumbotron>;
      </div>
    );
  }
}

export default Step1;
