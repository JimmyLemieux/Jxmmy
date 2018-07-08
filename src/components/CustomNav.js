import React, {Component} from 'react';
import {Navbar, Nav, NavItem, NavDropdown,Grid,Row,Col} from 'react-bootstrap';
import './CustomNav.css';

export default class CustomNav extends Component {
  render() {
    return(

            <Navbar inverse collapseOnSelect>
              <Navbar.Header>
                <Navbar.Brand>
                  Jxmmy
                </Navbar.Brand>
              </Navbar.Header>
              <Nav pull right>
                <NavItem eventKey={1}>
                  Instagram
                </NavItem>
                <NavItem eventKey={2}>
                  Facebook
                </NavItem>
                <NavItem eventKey={2}>
                  LinkedIn
                </NavItem>
                <NavItem eventKey={2}>
                  GitHub
                </NavItem>
                <NavItem eventKey={2}>
                  Soundcloud
                </NavItem>
              </Nav>
            </Navbar>
    );
  }
}
