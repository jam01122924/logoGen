import React from 'react';
import { Jumbotron, Button, A } from 'react-bootstrap';
import './style.min.css';

import { connect } from 'react-redux';
import * as logoActions from '../actions';

import Logo from '../../../component/logo/logo.component';

class PickIdealLogo extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.onPick = this.onPick.bind(this);
    this.confirm = this.confirm.bind(this);
  }

  componentDidMount() {

  }

  onPick(index) {
    this.props.dispatch(logoActions.pickIdealLogo(index));
  }

  confirm() {
    this.props.dispatch(logoActions.changeStep('pickThemeColor'));
  }

  render() {
    let sampleLogo = [];
    for(let i=0; i<this.props.idealLogo.length; i++){
      sampleLogo.push(
        <div key={"sample-logo-container-" + i} className={"sample-logo-container" + (this.props.idealLogo[i].selected?' sample-logo-selected':'') } onClick={()=>{this.onPick(i)}}>
          <Logo config={this.props.idealLogo[i]} />
        </div>
      )
    }
    console.log(this.props.idealLogo)
    return (
      <div className="pick-ideal-logo-container">
        <Jumbotron className="jumbotron-container">
          <h2>Pick some logos you like</h2>
          <div className="sub-label">We will use these as inspiration. These were all made with Logojoy.</div>
          <div className="logo-picker-container">
            {sampleLogo}
          </div>
          <p className="step-bar">
            <Button bsStyle="primary" bsSize="large" onClick={this.confirm}>Next</Button>
          </p>
        </Jumbotron>;
      </div>
    );
  }
}

function mapStoreToProps (store, ownProps) {
	const { logoGeneratorReducer } = store;
  const { idealLogo } = logoGeneratorReducer || { idealLogo: [] };
	return { idealLogo };
}

export default connect(mapStoreToProps)(PickIdealLogo);
