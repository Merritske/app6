
//import { useEffect, useState } from "react"

import { useRef, useState } from "react"
import "./day.css"




//bij een volgende dag enkel de nieuwe een nieuw menu geven 
//=>in week aanpassen??? met useState?




export default function Day({ menu, day, ingredi }) {

const [big, setBig] = useState(true)

const nameRef = useRef()
function handleClick(e){
  e.preventDefault()
setBig(!big)
console.log(big)

}
//ingredi werkt, is object met meat, vegetable en pata
console.log(ingredi.pata)//werkt niet?????!!!!! -> undefined???


  return (<div className="day" onClick={handleClick}>


    {big? <div className="dayComp" > 
          <h2 className="dayComp-day" >
           {day} </h2>

          <img src="" alt="eten" />
          <h1>{menu }</h1>
          <p className="dayComp-ingred">Some extra's, eventueel hoofdingrediënten of enkel als je erop klikt...</p>
        </div>
        : <div className="dayCompBig" > 
         <h2 className="dayComp-dayBig" >
           {day} </h2>

          <img src="" alt="eten" />
          <h1>{menu }</h1>
          <p className="dayComp-ingredBig">Some ingred</p>
        </div> } 
    
     

  </div>)
}
