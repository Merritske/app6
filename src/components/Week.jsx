
import Day from "./Day"
import { useEffect, useState } from "react"
import Button from "./Button"

export default function Week({ menu, newDays }) {

const [print, setPrint] = useState(false)
  const [weekmenu, setWeekmenu] = useState([])

 
  console.log(menu)

 
    console.log(menu)

      console.log("hoal")
      let uniqueWeek = []

    let randomM = Math.floor(Math.random() * menu.length)
    
        if(weekmenu.length < 7){ 
           menu.map(()=>{
           setWeekmenu( weekmenu.push( menu[randomM])) 
            uniqueWeek = weekmenu.filter((c, index) => {
        return weekmenu.indexOf(c) === index
      })
      setWeekmenu(uniqueWeek)
       
      })
   }
   console.log(weekmenu)
     
  let dagmenu = []
  let ingredi = []
  let recipe = []
  for (let x = 0; x < weekmenu.length; x++) {
    dagmenu.push(weekmenu[x].title)
    ingredi.push(weekmenu[x].headIng)
    recipe.push(weekmenu[x].recipe)
  }
  
let list =[] 
 weekmenu.map((item)=>{
   
       list.push(item.title)
    
  })
function handleClick(){
  setPrint(!print)

}
function handlePrint (){
  setPrint(!print)
  window.print()
}

//printLijst nog layouten en button



  return (
    <div>
  
  {
    print && 

  
    <ul className="printLijst">
      {
        list.map((item, index)=>{
return (<li key={index} >{item} </li>)
        })
    }
   <button onClick={handlePrint}> Print </button>
    <Button text="Close" click={()=>{setPrint(false)}} color="" />
    </ul>

  }
  {!print && <div>
    <Button text="Print menu" click={handleClick} color="" />
   
      {newDays.map((day, index) =>

        <Day
          menu={dagmenu[index]}
          key={index}
          day={day}
          ingredi={ingredi[index]}
          recipe={recipe[index]}
        />
      )}
      </div>}

    </div>
  )
}
