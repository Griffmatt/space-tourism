import React from 'react'
import {NavLink, Link} from 'react-router-dom'

function NavBar() {
  return (
    <div className="navBar">
        <Link to="/"><img src="/images/shared/logo.svg"/></Link>
        <div className="navBarLine"/>
        <div className="navBarListWrapper">
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