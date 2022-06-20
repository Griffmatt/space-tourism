import React from 'react'
import {Link} from 'react-router-dom'

function HomePage() {
  return (
    <div className="homePage">
      <div className="homePageInfoWrapper">
        <div className="homePageInfo">
          <h5>SO, YOU WANT TO TRAVEL TO</h5>
          <h1>SPACE</h1>
          <p>Let’s face it; if you want to go to space, you might as well genuinely go to 
            outer space and not hover kind of on the edge of it. Well sit back, and relax 
            because we’ll give you a truly out of this world experience!
          </p>
        </div>
        <div className="homePageButton">
          <Link to="/Destination"><button><h4>EXPLORE</h4></button></Link>
        </div>
      </div>
    </div>
  )
}

export default HomePage