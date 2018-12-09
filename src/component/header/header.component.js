import React, { Component } from 'react';
import './header.css';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

class Header extends Component {
  render() {
    return (
      <div className="header-container">
        <Navbar inverse collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="/home">LOGO CREATOR</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight>
              <NavItem eventKey={1} href="/home">
                HOME
              </NavItem>
              <NavItem eventKey={2} href="/demo">
                HOW IT WORK
              </NavItem>
              <NavDropdown eventKey={3} title="PRICE" id="basic-nav-dropdown">
                <MenuItem eventKey={3.1}>Company Logo</MenuItem>
                <MenuItem eventKey={3.2}>Company Name</MenuItem>
                <MenuItem eventKey={3.3}>Company Card</MenuItem>
                <MenuItem divider />
                <MenuItem eventKey={3.3}>Package</MenuItem>
              </NavDropdown>
              <NavItem eventKey={4} href="/contactUs">
                CONTACT
              </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Header;
