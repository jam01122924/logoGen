import React from 'react';
import { Button } from 'react-bootstrap';
import './style.min.css';

const ThemeColor = ({color = [], selected, onSelect}) => (
  <div className="theme-color-container">
    <div className="theme-color-package">
      {
        color.map((c, i)=><div className="color-bar" key={'color-bar-'+i} style={{
          background: `${c}`
        }}></div>)
      }
    </div>
    <div className="theme-color-btns">
      <Button bsStyle="primary" bsSize="large" onClick={onSelect} className={selected?'picked-btn':''}>{selected?<i className="fa fa-check" aria-hidden="true"></i>:'Select'}</Button>
    </div>
  </div>
)

export default ThemeColor
