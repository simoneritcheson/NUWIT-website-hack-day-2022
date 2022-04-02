import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from './NavbarElements';

export default function NavbarComponent() {
  return (
    <div>
      <Nav>
        <Bars />
  
        <NavMenu>
          <NavLink to='/' activeStyle>
            Home
          </NavLink>
          <NavLink to='/projects' activeStyle>
            Projects
          </NavLink>
          <NavLink to='/resume' activeStyle>
            Resume
          </NavLink>
        </NavMenu>
      </Nav>
    </div>
  )
}
