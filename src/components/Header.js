import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
  Container
} from 'reactstrap';

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    
    <div>
      <Navbar color="white" light expand="md">
      <Container>
        <NavbarBrand href="/">Logo</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="" navbar>
            <NavItem>
              <NavLink href="/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/my-portfolio/">My Portfolio</NavLink>
             
            </NavItem>
            <NavItem>
              <NavLink href="/clients/">Clients</NavLink>
             
            </NavItem>
            
          </Nav>
          <NavbarText>Get in Touch</NavbarText>
        </Collapse>
        </Container>
      </Navbar>

  
    </div>
  );
}

export default Header;