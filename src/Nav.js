import React from 'react'
import { NavLink } from 'react-router-dom';
const Nav = () => {
  return (
    <nav>
        <NavLink to='/mission'>Our Mission</NavLink>
        <NavLink to='/collection'>Goals</NavLink>
        <NavLink to='/izvoshra' >The Team</NavLink>
    </nav>
  )
}

export default Nav;