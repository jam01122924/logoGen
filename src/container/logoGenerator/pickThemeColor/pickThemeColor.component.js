import React from 'react';
import { Jumbotron, Button, A } from 'react-bootstrap';
import './style.min.css';

import { connect } from 'react-redux';
import * as logoActions from '../actions';

import ThemeColor from '../../../component/themeColor/themeColor.component';

class PickThemeColor extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.onSelect = this.onSelect.bind(this);
    this.confirm = this.confirm.bind(this);
  }

  componentDidMount() {

  }

  onSelect(index) {
    this.props.dispatch(logoActions.pickIdealColor(index));
  }

  confirm() {
    this.props.dispatch(logoActions.changeStep('logoEditor'));
  }

  render() {
    let sampleColor = [];
    for(let i=0; i<this.props.idealColor.length; i++){
      sampleColor.push(
        <div key={"sample-color-container-" + i} className="sample-color-container">
          <ThemeColor color={this.props.idealColor[i].data} selected={this.props.idealColor[i].selected}  onSelect={()=>{this.onSelect(i)}}/>
        </div>
      )
    }
    console.log(this.props.idealLogo)
    return (
      <div className="pick-ideal-logo-container">
        <Jumbotron className="jumbotron-container">
          <h2>Pick some colors you like</h2>
          <div className="sub-label">We will use these to craft your logo.</div>
          <div className="logo-picker-container">
            {sampleColor}
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
  const { idealColor } = logoGeneratorReducer || { idealColor: [] };
	return { idealColor };
}

export default connect(mapStoreToProps)(PickThemeColor);
