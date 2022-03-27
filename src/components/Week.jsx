import Day from "./Day"
import { useEffect, useState } from "react"

export default function Week({menu, newDays}) {

 let  randomM = Math.floor(Math.random() * menu.length)
const [weekmenu, setWeekmenu] = useState([])
//  useEffect(()=>{

// setWeekmenu([...weekmenu, menu[randomM] ])




//  },[])
   console.log(weekmenu)
if (weekmenu.length < 7) {


  menu.map(()=>{

setWeekmenu([...weekmenu, menu[randomM] ])

})

}

//  //de menu titels
// //random recepten in de array zetten om toe te wijzen aan de dagen
// let dagM = []

// let complet = []
// //   //nakijken of recepte niet dubbel in de weekmenu is gezet
// function isInDagM(){
// return dagM = dagM.reduce((unique, item) => unique.includes(item) ? unique : [...unique, item], [])
// }
// // // //met push werkte het bijna om het weekmenu niet te laten veranderen
// // //   //random een gerect toewijzen aan een dag
// //   newDays.forEach(() => {

//     if (dagM.length < 7) {  
//     for(let x = 0 ; x<= menu.length ; x++){ 
//        complet =  dagM.push(menu[randomM])
//   }
//   isInDagM() 
//   dagM = complet
// }
// console.log(dagM)

// useEffect(()=>{
 
        
// /

// }
// ,[])
//  let dagm = weekmenu

//   function isInDagM(){
// return dagm = dagm.reduce((unique, item) => unique.includes(item) ? unique : [...unique, item], [])
// setWeekmenu([...dagm]) 
// }

//weekmenu maken dat enkel verandert als de dag verandert
//id recept koppelen aan dag
//dag weg, recept weg
//nieuw recept in array van weekrecepten steken


//useState maken met de menu en dan pas de title en de ingrediënten eruit filteren 
//om in de HTML te tonen zodat de basic menu niet veranderd elke keer als renders
//mag maar 1 ding veranderen = de nieuwe dag dus 
// [...weekmenu, nieuwdagmenu]
//herschrijven!!!!!!!!

let dagmenu = []
let ingredi = []
let recipe = []
for(let x = 0; x< weekmenu.length ; x++){
  dagmenu.push(weekmenu[x].title)
  ingredi.push(weekmenu[x].headIng)
  recipe.push(weekmenu[x].recipe)
}
 console.log(ingredi)

 //de menu titels
// //random recepten in de array zetten om toe te wijzen aan de dagen



//   //nakijken of recepte niet dubbel in de weekmenu is gezet

// // //met push werkte het bijna om het weekmenu niet te laten veranderen
// //   //random een gerect toewijzen aan een dag
//   newDays.forEach(() => {
 








//  // if(weekM.length <7){
//   //   setWeekM([...weekM, dagM])
//   // weekM.reduce((unique, item) => unique.includes(item) ? unique : [...unique, item], [])
//   //  }





     

 

  return (
    <div> 
      hello
    {/* {/* {
        days.map((day, id)=>{
            console.log("hello")
      return  <h2
      key={id}
      >
        day = {day}
        </h2> 
            //  <Day day = {day} />
        })
    
    } */}
      { newDays.map((day, index)=>   
    
    <Day 
menu = {dagmenu[index]}
key = {index}
day={day}
ingredi = {ingredi[index]}
recipe = {recipe[index]}
    />
     )}  

    </div>
  )
}
