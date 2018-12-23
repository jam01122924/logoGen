import React, { Component } from 'react';




const Logo = ({ config:
  {
    name='test',
    industry='test',
    icon='fa fa-home',
    width=200,
    height=200,
    iconSize=90,
    nameSize=20,
    color='#EEA814',
    bgColor='#E6FFFD',
    nameColor='#4A90E2',
    fontFamily="PokemonHollow",
    positionX=20,
    positionY=15,
    namePositionX=41,
    namePositionY=68,
    borderSize=15,
    borderColor='#4A90E2',
    borderRadius=200,
  }
}) =>
  <div className="logo-component-container" style={{display: 'inline-block'}}>
    <div className="logo-box" style={{display: 'inline-block'}}>
      <div className="logo-container" style={{
        display: 'inline-block',
        width: width + 'px',
        height: height + 'px',
        position: 'relative',
        overflow: 'hidden',
        verticalAlign: 'top',
        background: bgColor,
        borderRadius: borderRadius + 'px',
        border: borderSize + 'px solid ' +  borderColor,
        boxShadow: '1px 1px 20px black'
      }} >
        <i className={icon} style={{
          position: 'absolute',
          color: color,
          fontSize: iconSize + 'px',
          top: positionY + '%',
          left: positionX + '%',
        }}></i>
        <div className="logo-text" style={{
          position: 'absolute',
          width: '100%',
          textAlign: 'left',
          color: nameColor,
          fontSize: nameSize + 'px',
          fontFamily: fontFamily,
          top: namePositionY + '%',
          left: namePositionX + '%',
        }}>{name}</div>
      </div>
    </div>
  </div>

export default Logo;
