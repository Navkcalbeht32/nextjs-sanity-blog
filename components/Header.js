import React from 'react'
import { render } from 'react-dom'
import { ReactSVG } from 'react-svg'
import { Navbar, Nav } from 'react-bootstrap'
import Link from 'next/link'
import StickyMenu from 'components/StickyMenu'

const Header = () => {
  return (
    <Navbar
      className="fj-navbar fj-nav-base"
      bg="transparent"
      expand="lg" >
      <Navbar.Brand className="fj-navbar-brand">
        <Link href="/">
          <a className="logo-text">
              <span className="firstname">ALEX </span> 
              <span className="lastname">SUMOSKI</span> <br/>
              <span className="jobtitle">DEVELOPER</span> 
          </a>
        </Link>
        
      </Navbar.Brand>
      <StickyMenu />
    </Navbar>
  )
}

export default Header;