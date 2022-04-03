
//import { useEffect, useState } from "react"

import { useState } from "react"
import "../styles/day.css"




//bij een volgende dag enkel de nieuwe een nieuw menu geven 
//=>in week aanpassen??? met useState?




export default function Day({ menu, day, ingredi, recipe }) {

  const [big, setBig] = useState(true)


  function handleClick(e) {
    e.preventDefault()
    setBig(!big)
    console.log(big)

  }
  let dayCompBig = document.getElementsByClassName("dayCompBig")
  function toggleNav(e) {
    dayCompBig.add.classList("open")
    //dayCompBig.fadeOut()
    dayCompBig.delay(300).animate({
      scrollTop: e.target.offset().top
    }, 500);
  }
 

  //ingredi werkt, is object met meat, vegetable en pata
  //console.log(ingredi.pata)//werkt niet?????!!!!! -> undefined???


  return (<div className="day" onClick={handleClick}>


    {big ? <div className="dayComp" onClick={toggleNav} >
      <h2 className="dayComp-day" >
        {day} </h2>
      {/* 
          <img src="" alt="eten" /> */}
      <h1>{menu}</h1>
      <p className="dayComp-ingred">Toont hoofdingrediënten en recept als je erop klikt...</p>
    </div>
      : <div className="dayCompBig" >
        <h2 className="dayComp-dayBig" >
          {day} </h2>
        {/* 
          <img src="" alt="eten" /> */}
        <h1>{menu}</h1>
        <div className="dayComp-ingredBig">
          <ul>
            <li>
              {ingredi.meat}
            </li>
            <li>

              { ingredi.vegetable.join(" ") }
            </li>
            <li>
              {ingredi.pata}
            </li>



          </ul>

        </div>
        <p className="recipe">
          {recipe}
        </p>
      </div>}



  </div>)
}
