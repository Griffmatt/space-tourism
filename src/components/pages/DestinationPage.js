import React, {useState} from 'react'
import Destinations from '../../data.json'

function DestinationPage() {
  
  const [active, setActive] = useState(0)

  return (
    <div className="destinationPage">
        <h5 className="pageTitle"><span>01</span>PICK YOUR DESTINATION</h5>
        <div className="destinationPageContent">
          <img src={Destinations.destinations[active].images.png} alt={Destinations.destinations[active].name}/>
          <div className="destinationPageContentInfo">
            <ul className="destinationPageNav">
              <li className="navText active">MOON</li>
              <li className="navText">MARS</li>
              <li className="navText">EUROPA</li>
              <li className="navText">TITAN</li>
            </ul>
            <h2>{Destinations.destinations[active].name.toUpperCase()}</h2>
            <p>{Destinations.destinations[active].description}</p>
            <div className="contentDivider"/>
            <div className="destinationPageInfo">
              <div>
                <p className="subHeading2">
                  AVG. DISTANCE
                </p>
                <p className="subHeading1">
                  {Destinations.destinations[active].distance.toUpperCase()}
                </p>
              </div>
              <div>
                <p className="subHeading2">
                  EST. TRAVEL TIME
                </p>
                <p className="subHeading1">
                  {Destinations.destinations[active].travel.toUpperCase()}
                </p>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default DestinationPage