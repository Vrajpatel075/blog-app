import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
      <div>

    <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand to="/">Navbar</Navbar.Brand>
          <Nav style={{ width:"100%", gap:"20px"}} className="me-auto">
            <NavLink style={{color:"white", textDecoration:"none"}} to="/">Blog</NavLink>
            <NavLink style={{color:"white", textDecoration:"none"}} to="/html">HTML</NavLink>
            <NavLink style={{color:"white", textDecoration:"none"}} to="/css">CSS</NavLink>
            <NavLink style={{color:"white", textDecoration:"none"}} to="/javascript">JAVASCRIPT</NavLink>
            <NavLink style={{color:"white", textDecoration:"none"}} to="/react">REACT</NavLink>
          </Nav>
        </Container>
      </Navbar>      
      </div>
  )
}

export default Header