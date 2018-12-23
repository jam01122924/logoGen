import React from 'react';
import { Jumbotron, Button, A } from 'react-bootstrap';

import { connect } from 'react-redux';

import * as logoActions from '../actions';

class Industry extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.onChange = this.onChange.bind(this);
    this.confirm = this.confirm.bind(this);
  }

  componentDidMount() {

  }

  onChange(e) {
    this.props.dispatch(logoActions.changeLogo('industry', e.target.value));
  }

  confirm() {
    this.props.dispatch(logoActions.changeStep('pickIdealLogo'));
  }

  render() {
    return (
      <div className="industry-container">
        <Jumbotron className="jumbotron-container">
          <h2>What's your industry?</h2>
          <div className="sub-label">To get started on your logo, help us understand your brand and what you're about.</div>
          <div className="name-input-box">
            <input onChange={this.onChange} value={this.props.industry} type="text" />
          </div>
          <p>
            <Button bsStyle="primary" bsSize="large" disabled={!this.props.industry} onClick={this.confirm}>Continue</Button>
          </p>
        </Jumbotron>;
      </div>
    );
  }
}

function mapStoreToProps (store, ownProps) {
	const { logoGeneratorReducer } = store;
  const { logoData } = logoGeneratorReducer || { logoData: {} };
  const { industry } = logoData || { industry: '' };
	return { industry };
}

export default connect(mapStoreToProps)(Industry);
