import React from 'react'
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

export default (props) => (
  <div>
  <Navbar color="light" light expand="md">
    <div className="container">
      <NavbarBrand href="/">Priorize</NavbarBrand>
      <span className="badge badge-danger">{props.counter}</span>
      <NavbarToggler onClick={props.toggle} />
      <Collapse isOpen={props.isOpen} navbar>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink href="/home/">Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="https://github.com/makinox">GitHub</NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </div>
  </Navbar>
</div>
)