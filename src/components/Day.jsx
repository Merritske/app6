
//import { useEffect, useState } from "react"

import "./day.css"




//bij een volgende dag enkel de nieuwe een nieuw menu geven 
//=>in week aanpassen??? met useState?


export default function Day({ menu, day }) {



  return (<div className="day">


       <div className="dayComp" >
          <h2 >
            Day of the week: {day} </h2>

          <img src="" alt="eten" />
          <h1>{menu }</h1>
          <p>Some extra's, eventueel hoofdingrediënten of enkel als je erop klikt...</p>
        </div>
    
     

  </div>)
}
