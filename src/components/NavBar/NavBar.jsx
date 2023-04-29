import React from 'react'
import "./navbar.css"
import {Link} from 'react-router-dom'


function NavBar() {
  return (
    <nav>
      <p><Link to= "home" className="mainpage">Tulasa Chitrakar</Link></p>
      <ul>
            <li><Link to="about" className="menu">About Me</Link></li>
            <li><a href = "https://drive.google.com/file/d/1Zgm0MXF9l5UwicRuM1czH10YHRo0Cg97/view?usp=share_link" target="_blank" className="menu">Resume</a></li>
            <li><Link to="portfolio" className="menu">Portfolio</Link></li>
            <li><Link to="contact" className="menu">Contact Me</Link></li>
        </ul>
    </nav>
  )
}

export default NavBar
