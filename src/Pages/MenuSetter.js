import React from 'react'
import '../components/headerDynamic.css'

export default function MenuSetter({menuS}) {
 
let men = menuS[0]
  return (
 

<div className="menuSetter" > 
{/* 
          <img src="" alt="eten" /> */}
          <h1>{men.title }</h1>
          <div >
            <ul className="menuSetterList">
              <li>
                 {men.headIng.meat}
              </li>
              <li>
                 {men.headIng.vegetable.join(" ")}
              </li>
              <li>
                 {men.headIng.pata}
              </li>
              
               
            
            </ul> 
          
           </div>
           <p className="menuSetterRecipe">
               {men.recipe}
           </p> 
        </div>


  )
}
