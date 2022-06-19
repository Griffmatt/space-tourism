import React, {useState} from 'react'
import Data from '../../data.json'

function DestinationPage() {
  const navItems = ["MOON", "MARS", "EUROPA", "TITAN"]
  const [active, setActive] = useState(0)
  let destinations= Data.destinations

  return (
    <div className="destinationPage">
        <h5 className="pageTitle"><span>01</span>PICK YOUR DESTINATION</h5>
        <div className="destinationPageContent">
          <img src={destinations[active].images.png} alt={destinations[active].name}/>
          <div className="destinationPageContentInfo">
            <ul className="destinationPageNav">
              {navItems.map((item, index)=>{
                return(
                  <li className={`navText ${active===index? "active": ""}`} onClick={()=>setActive(index)} key={index}>{item}</li>
                )
              })}
            </ul>
            <h2>{destinations[active].name.toUpperCase()}</h2>
            <p>{destinations[active].description}</p>
            <div className="contentDivider"/>
            <div className="destinationPageInfo">
              <div>
                <p className="subHeading2">
                  AVG. DISTANCE
                </p>
                <p className="subHeading1">
                  {destinations[active].distance.toUpperCase()}
                </p>
              </div>
              <div>
                <p className="subHeading2">
                  EST. TRAVEL TIME
                </p>
                <p className="subHeading1">
                  {destinations[active].travel.toUpperCase()}
                </p>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default DestinationPage