import React from 'react';
import { Button, A } from 'react-bootstrap';
import domtoimage from 'dom-to-image';

import { SketchPicker } from 'react-color';

const iconList = [
  'fa fa-address-book',
  'fa fa-address-card',
  'fa fa-adjust',
  'fa fa-american-sign-language-interpreting',
  'fa fa-anchor',
  'fa fa-archive',
  'fa fa-asterisk',
  'fa fa-balance-scale',
  'fa fa-bath',
  'fa fa-bed',
  'fa fa-beer',
  'fa fa-bell',
  'fa fa-binoculars',
  'fa fa-birthday-cake',
  'fa fa-briefcase',
  'fa fa-bomb',
  'fa fa-building',
  'fa fa-cogs',
  'fa fa-compass',
  'fa fa-cubes',
  'fa fa-heartbeat',
  'fa fa-home',
  'fa fa-industry'
];

class Step3 extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      name: '',
      type: '',
      icon: 'fa fa-home',
      size: 400,
      iconSize: 200,
      nameSize: 36,
      color: '#EEA814',
      bgColor: '#E6FFFD',
      nameColor: '#4A90E2',
      positionX: 20,
      positionY: 15,
      namePositionX: 21,
      namePositionY: 73,
      borderSize: 15,
      borderColor: '#4A90E2',
      borderRadius: 200,
      showIconPicker: false,
      showColorPicker: false,
      showBgColorPicker: false,
      showNameColorPicker: false,
      showBorderColorPicker: false,
    }

    this.changeName = this.changeName.bind(this);
    this.toggleIconPicker = this.toggleIconPicker.bind(this);
    this.toggleColorPicker = this.toggleColorPicker.bind(this);
    this.toggleBgColorPicker = this.toggleBgColorPicker.bind(this);
    this.toggleNameColorPicker = this.toggleNameColorPicker.bind(this);
    this.toggleBorderColorPicker = this.toggleBorderColorPicker.bind(this);

    this.pickColor = this.pickColor.bind(this);
    this.changeValue = this.changeValue.bind(this);
    this.save = this.save.bind(this);


  }

  componentDidMount() {
    this.setState({
      name: this.props.name,
      type: this.props.type,
    })
  }

  changeName(e) {
    this.setState({name: e.target.value});
  }

  toggleIconPicker() {
    this.setState({showIconPicker: !this.state.showIconPicker});
  }
  toggleColorPicker() {
    this.setState({showColorPicker: !this.state.showColorPicker});
  }
  toggleBgColorPicker() {
    this.setState({showBgColorPicker: !this.state.showBgColorPicker});
  }
  toggleNameColorPicker() {
    this.setState({showNameColorPicker: !this.state.showNameColorPicker});
  }
  toggleBorderColorPicker() {
    this.setState({showBorderColorPicker: !this.state.showBorderColorPicker});
  }

  pickColor(field, color) {
    this.changeValue(field, color.hex);
  }

  changeValue(field, v) {
    let nextState = {};
    nextState[field] = v;
    this.setState(nextState);
  }

  save() {
    // let logo = this.refs.logo;
    // console.log(logo);
    // window.logo = logo
    // const {body} = document
    //
    // const canvas = document.createElement('canvas')
    // const ctx = canvas.getContext('2d')
    // canvas.width = canvas.height = this.state.size
    //
    // const tempImg = document.createElement('img')
    // tempImg.addEventListener('load', onTempImageLoad)
    // tempImg.src = 'data:image/svg+xml,' + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="' + this.state.size + '"  height="' + this.state.size + '"><foreignObject width="100%" height="100%"><div xmlns="http://www.w3.org/1999/xhtml"><style>em{color:red;}</style>' + logo.innerHTML + '</div></foreignObject></svg>')
    //
    // const targetImg = document.createElement('img')
    // body.appendChild(targetImg)
    // function onTempImageLoad(e){
    //   ctx.drawImage(e.target, 0, 0)
    //   targetImg.src = canvas.toDataURL()
    // }

    let node = document.getElementById('logoBox');
    domtoimage.toPng(node)
    .then(function (dataUrl) {
        var link = document.createElement('a');
        link.download = 'my-image-name.jpeg';
        link.href = dataUrl;
        link.click();
    });
  }


  render() {
    console.log(this.state)
    let logoContainerStyle = {
      width: this.state.size + 'px',
      height: this.state.size + 'px',
      position: 'relative',
      overflow: 'hidden',
      verticalAlign: 'top',
      background: this.state.bgColor,
      borderRadius: this.state.borderRadius + 'px',
      border: this.state.borderSize + 'px solid ' +  this.state.borderColor,
      boxShadow: '5px 5px 20px black'
    }
    let logoStyle = {
      position: 'absolute',
      color: this.state.color,
      fontSize: this.state.iconSize + 'px',
      top: this.state.positionY + '%',
      left: this.state.positionX + '%',
    };
    let textStyle = {
      position: 'absolute',
      width: '100%',
      textAlign: 'left',
      color: this.state.nameColor,
      fontSize: this.state.nameSize + 'px',
      top: this.state.namePositionY + '%',
      left: this.state.namePositionX + '%',
    }

    let iconGrid = [];
    for(let i=0; i<iconList.length; i++) {
      iconGrid.push(
        <span onClick={(e)=>{this.changeValue('icon', iconList[i]); this.toggleIconPicker();}}>
          <i className={iconList[i]}></i>
        </span>
      );
    }

    return (
      <div className="step3-container">
        <div>
          <div className="left-col">
            <div className="control-container">
              <h2>Customize logo</h2>

              <div className="input-field">
                <label>Name: </label>
                <input value={this.state.name} type="text" onChange={this.changeName}/>
              </div>

              <div className="input-field">
                <label>Icon: </label>
                <div class="icon-picker-container">
                  {this.state.showIconPicker?
                    <div>
                      {iconGrid}
                    </div>:
                    <div>
                      <span><i className={this.state.icon}></i></span>
                      <Button bsStyle="primary" onClick={this.toggleIconPicker}>Change</Button>
                    </div>
                  }

                </div>
              </div>

              <div className="input-field">
                <label>Logo Size: </label>
                 <input type="range" className="range-picker" value={this.state.size} min="10" max="800" onChange={(e)=>{this.changeValue('size', e.target.value)}}/>
              </div>

              <div className="input-field">
                <label>Icon Size: </label>
                 <input type="range" className="range-picker" value={this.state.iconSize} min="10" max="800" onChange={(e)=>{this.changeValue('iconSize', e.target.value)}}/>
              </div>

              <div className="input-field">
                <label>Icon X: </label>
                 <input type="range" className="range-picker" value={this.state.positionX} min="0" max="90" onChange={(e)=>{this.changeValue('positionX', e.target.value)}}/>
              </div>

              <div className="input-field">
                <label>Icon Y: </label>
                 <input type="range" className="range-picker" value={this.state.positionY} min="0" max="90" onChange={(e)=>{this.changeValue('positionY', e.target.value)}}/>
              </div>

              <div className="input-field">
                <label>Name X: </label>
                 <input type="range" className="range-picker" value={this.state.namePositionX} min="0" max="90" onChange={(e)=>{this.changeValue('namePositionX', e.target.value)}}/>
              </div>

              <div className="input-field">
                <label>Name Y: </label>
                 <input type="range" className="range-picker" value={this.state.namePositionY} min="0" max="90" onChange={(e)=>{this.changeValue('namePositionY', e.target.value)}}/>
              </div>

              <div className="input-field">
                <label>Border: </label>
                 <input type="range" className="range-picker" value={this.state.borderSize} min="0" max="200" onChange={(e)=>{this.changeValue('borderSize', e.target.value)}}/>
              </div>

              <div className="input-field">
                <label>Radius: </label>
                 <input type="range" className="range-picker" value={this.state.borderRadius} min="0" max="400" onChange={(e)=>{this.changeValue('borderRadius', e.target.value)}}/>
              </div>

              <div className="color-picker">
                <label>Icon: </label>
                {this.state.showColorPicker?
                  <div className="color-picker-container">
                    <SketchPicker
                      color={ this.state.color }
                      onChangeComplete={(v)=>{this.pickColor('color', v)}}
                    />
                    <Button bsStyle="primary" className="color-picker-confirm-btn" onClick={this.toggleColorPicker}>Apply</Button>
                  </div>:
                  <div className="color-sample" style={{background: this.state.color}} onClick={this.toggleColorPicker}></div>
                }
              </div>

              <div className="color-picker">
                <label>BG: </label>
                {this.state.showBgColorPicker?
                  <div className="color-picker-container">
                    <SketchPicker
                      color={ this.state.bgColor }
                      onChangeComplete={(v)=>{this.pickColor('bgColor', v)}}
                    />
                    <Button bsStyle="primary" className="color-picker-confirm-btn" onClick={this.toggleBgColorPicker}>Apply</Button>
                  </div>:
                  <div className="color-sample" style={{background: this.state.bgColor}} onClick={this.toggleBgColorPicker}></div>
                }
              </div>
              <div className="color-picker">
                <label>Font: </label>
                {this.state.showNameColorPicker?
                  <div className="color-picker-container">
                    <SketchPicker
                      color={ this.state.nameColor }
                      onChangeComplete={(v)=>{this.pickColor('nameColor', v)}}
                    />
                    <Button bsStyle="primary" className="color-picker-confirm-btn" onClick={this.toggleNameColorPicker}>Apply</Button>
                  </div>:
                  <div className="color-sample" style={{background: this.state.nameColor}} onClick={this.toggleNameColorPicker}></div>
                }
              </div>
              <div className="color-picker">
                <label>Border: </label>
                {this.state.showBorderColorPicker?
                  <div className="color-picker-container">
                    <SketchPicker
                      color={ this.state.borderColor }
                      onChangeComplete={(v)=>{this.pickColor('borderColor', v)}}
                    />
                    <Button bsStyle="primary" className="color-picker-confirm-btn" onClick={this.toggleBorderColorPicker}>Apply</Button>
                  </div>:
                  <div className="color-sample" style={{background: this.state.borderColor}} onClick={this.toggleBorderColorPicker}></div>
                }
              </div>
              <div>
                <Button bsStyle="primary" className="color-picker-confirm-btn" onClick={this.save}>Save</Button>
              </div>

            </div>

          </div>
          <div className="right-col" id="logoBox" >
            <div className="logo-box" ref="logo">
              <div className="logo-container" style={logoContainerStyle} on>
                <i className={this.state.icon} style={logoStyle}></i>
                <div className="logo-text" style={textStyle}>{this.state.name}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Step3;
