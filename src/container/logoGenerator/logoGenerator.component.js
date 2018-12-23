import React from 'react';
import './style.css'

import { connect } from 'react-redux';
import * as actions from './actions';

import CompanyName from './companyName/companyName.component';
import Industry from './industry/industry.component';
import PickIdealLogo from './pickIdealLogo/pickIdealLogo.component';
import PickThemeColor from './pickThemeColor/pickThemeColor.component';
import WickedEditor from './wickedEditor/wickedEditor.component';


PickIdealLogo
class LogoGenerator extends React.Component {

  constructor(props, context) {
    super(props, context);
  }

  componentDidMount() {

  }

  render() {
    let content = '';
    switch(this.props.step) {
      case 'companyName':
        content = <CompanyName />
      break;
      case 'industry':
        content = <Industry />
      break;
      case 'pickIdealLogo':
        content = <PickIdealLogo />
      break;
      case 'pickThemeColor':
        content = <PickThemeColor />
      break;
      case 'logoEditor':
        content = <WickedEditor />
      break;

      default:
      break;
    }
    return (
      <div className="logo-generator-container">
        {content}
      </div>
    );
  }
}

function mapStoreToProps (store, ownProps) {
	const { logoGeneratorReducer } = store;
  const { step } = logoGeneratorReducer || { step: '' };
	return { step };
}
export default connect(mapStoreToProps)(LogoGenerator);
