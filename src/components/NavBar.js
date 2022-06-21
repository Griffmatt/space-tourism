import React, {useState} from 'react'
import {NavLink, Link} from 'react-router-dom'

function NavBar() {

  const [navHidden, setNavHidden] = useState({})

  const handleNavOpen = ()=>{
    setNavHidden({right:0})
  }

  const handleNavClose = ()=>{
    setNavHidden({})
  }

  return (
    <div className="navBar">
        <Link to="/"><img src="/images/shared/logo.svg" alt="Logo" className="navBarLogo"/></Link>
        <img src="/images/shared/icon-hamburger.svg" className="navBarHamburger" alt="Hamburger Icon" onClick={handleNavOpen}/>
        <div className="navBarLine"/>
        <div className="navBarListWrapper" style={navHidden}>
          <img src="/images/shared/icon-close.svg" className="navBarClose" alt="Hamburger Icon" onClick={handleNavClose}/>
            <div className="navBarList">
                <ul>
                    <li className="navText"><NavLink to="/"><span>00</span>  HOME</NavLink></li>
                    <li className="navText"><NavLink to="/Destination"><span>01</span> DESTINATION</NavLink></li>
                    <li className="navText"><NavLink to="/Crew"><span>02</span>  CREW</NavLink></li>
                    <li className="navText"><NavLink to="/Technology"><span>03</span>  TECHNOLOGY</NavLink></li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default NavBar