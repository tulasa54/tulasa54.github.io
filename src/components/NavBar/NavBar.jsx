import React from 'react'
import "./navbar.css"


function NavBar() {
  return (
    <nav>
      <p><a href = "#" className="mainpage">Tulasa Chitrakar</a></p>
      {/* <p>Tulasa Chitrakar</p> */}
      <ul>
          {/* <li><a href = "#">Home</a></li> */}
            <li><a href = "#" className="menu">About Me</a></li>
            <li><a href = "https://drive.google.com/file/d/1Zgm0MXF9l5UwicRuM1czH10YHRo0Cg97/view?usp=share_link" target="_blank" className="menu">Resume</a></li>
            <li><a href = "#" className="menu">Portfolio</a></li>
            <li><a href = "contact" className="menu">Contact Me</a></li>
        </ul>
    </nav>
  )
}

export default NavBar
