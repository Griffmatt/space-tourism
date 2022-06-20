import React, {useState, useEffect} from 'react'
import Data from '../../data.json'

function TechnologyPage() {
  let tech = Data.technology
  const [active, setActive] = useState(0)
  const [image, setImage] = useState()
  const navDots = [1, 2, 3]

  useEffect(()=>{
    if(window.innerWidth < 1023){
      setImage(tech[active].images.landscape)
      return
    }
    setImage(tech[active].images.portrait)

  }, [active, tech])


  return (
    <div className="technologyPage">
      <h5 className="pageTitle"><span>03</span>SPACE LAUNCH 101</h5>
      <div className="techNav">
        {navDots.map(dot=>{
          return(
            <h4 key={dot} className={`techDot ${active===dot-1?"active":""}`} onClick={()=>setActive(dot-1)}>{dot}</h4>
          )
        })}
      </div>
      <div className="technologyPageInfo">
        <div className="navText">THE TERMINOLOGY ...</div>
        <h3>{tech[active].name}</h3>
        <p>{tech[active].description}</p>
      </div>
      <img src={image} alt={tech[active].name}/>
    </div>
  )
}

export default TechnologyPage