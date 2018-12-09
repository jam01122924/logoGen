import React from 'react';
import './style.css';

import Step1 from './steps/step1.component';
import Step2 from './steps/step2.component';
import Step3 from './steps/step3.component';

const iconList = [
  'far fa-address-book',
  'aaa'
]


class Demo extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      step: 'step3',
      name: 'Test Company',
      type: '',
      config: {
        size: 30,
        color: '#343434',
        bgColor: '#452354',
        positionX: 0,
        positionY: 0,
        border: 5,
        borderRadius: 10,

      }
    };

    this.changeName = this.changeName.bind(this);
    this.changeType = this.changeType.bind(this);
  }

  componentDidMount() {

  }

  changeName(v) {
    v&&this.setState({name: v, step: 'step2'});
  }
  changeType(v) {
    v&&this.setState({type: v, step: 'step3'});
  }

  render() {
    let content = '';
    switch(this.state.step) {
      case 'step1':
        content = <Step1 confirm={this.changeName} />;
      break;
      case 'step2':
        content = <Step2 confirm={this.changeType} />;
      break;
      case 'step3':
        content = <Step3 type={this.state.type} name={this.state.name} />;
      break;
      default:
      break;
    }
    return (
      <div className="demo-container">
        {content}
      </div>
    );
  }
}

export default Demo;
