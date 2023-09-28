import React from 'react'

const NavBar = () => {
  return (
    <nav>
    <div className="nav-link">
      <a href="">Home</a>
      <a href="#about">About</a>
      <a id='unshow' href="#services">Services</a>
      <a id='unshow' href="#work">Portfolio</a>
      <div className="lets-work">
        <a href="#contact">Let's Work</a>
      </div>
    </div>
  </nav>
  )
}

export default NavBar

