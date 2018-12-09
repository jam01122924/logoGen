import React from 'react';
import { Jumbotron, Button, A, DropdownButton, MenuItem } from 'react-bootstrap';

class Step2 extends React.Component {

  constructor(props, context) {
    super(props, context);

    this.onSelect = this.onSelect.bind(this);
  }

  componentDidMount() {

  }

  onSelect(e) {
    e && this.props.confirm(e);
  }

  render() {
    return (
      <div className="step2-container">
        <Jumbotron className="jumbotron-container">
          <h1>What is your company type?</h1>
          <p>
            Different industry would require different design and fashion. Our AI powered logo generator would pick the most suitable combinations for you, including icons, colors, styles, and fonts!
          </p>
          <div className="type-selection">
            <DropdownButton bsStyle='info' title='Select a type' bsSize="large" id="company-type-select">
              <MenuItem eventKey="IT" onSelect={this.onSelect} id="selection-it">IT</MenuItem>
              <MenuItem eventKey="FASHION" onSelect={this.onSelect} id="selection-fashion">FASHION</MenuItem>
              <MenuItem eventKey="FOOD" onSelect={this.onSelect} id="selection-food">FOOD</MenuItem>
              <MenuItem eventKey="PET" onSelect={this.onSelect} id="selection-pet">PET</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey="OTHERS" onSelect={this.onSelect}>Others</MenuItem>
            </DropdownButton>
          </div>
        </Jumbotron>;
      </div>
    );
  }
}

export default Step2;
