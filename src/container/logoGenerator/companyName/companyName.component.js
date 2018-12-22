import React from 'react';
import { Jumbotron, Button, A } from 'react-bootstrap';
import './style.min.css'

import { connect } from 'react-redux';

import * as logoActions from '../actions';

class Step1CompanyName extends React.Component {

  constructor(props, context) {
    super(props, context);

    this.onChange = this.onChange.bind(this);
    this.confirm = this.confirm.bind(this);
  }

  componentDidMount() {

  }

  onChange(e) {
    this.dispatch(logoActions.changeLogo('companyName', e.target.value));
  }

  confirm() {
    this.dispatch(logoActions.changeStep('industry'));
  }

  render() {
    return (
      <div className="company-name-container">
        <Jumbotron className="jumbotron-container">
          <h2>Make a logo within 10 minutes.</h2>
          <div className="sub-label">Use our AI-powered logo maker to instantly create stunning logo designs for your business.</div>
          <div>
            <input onChange={this.onChange} type="text" placeholder="Let's start with your company name" />
          </div>
          <p>
            <Button bsStyle="primary" onClick={this.confirm}>Get started</Button>
          </p>
        </Jumbotron>;
      </div>
    );
  }
}

export default connect()(Step1CompanyName);
