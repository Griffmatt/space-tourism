import React, {useState} from 'react';
import Data from '../../data.json'

function CrewPage() {
  let crew = Data.crew
  const [active, setActive] = useState(0)
  let navDots = [0, 1, 2, 3]

  return (
    <div className="crewPage">
        <h5 className="pageTitle"><span>02</span>MEET YOUR CREW</h5>
        <div className="crewInfo">
          <h4>{crew[active].role.toUpperCase()}</h4>
          <h3>{crew[active].name.toUpperCase()}</h3>
          <p>{crew[active].bio}</p>
        </div>
        <div className="navDots">
          {navDots.map(dot=>{
            return(
              <div className={`navDot ${active===dot?"active":""}`} onClick={()=>setActive(dot)}/>
            )
          })}
        </div>
        <div className="crewImage">
          <img src={crew[active].images.png} alt={crew[active].name}/>
        </div>
    </div>
  )
}

export default CrewPage