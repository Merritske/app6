import Day from "./Day"
import { useState, useEffect } from "react"

export default function Week({menu, newDays}) {
//  // if(weekM.length <7){
//   //   setWeekM([...weekM, dagM])
//   // weekM.reduce((unique, item) => unique.includes(item) ? unique : [...unique, item], [])
//   //  }





     

 
//  //de menu titels
// // //random recepten in de array zetten om toe te wijzen aan de dagen
// let dagM = []
// let randomM =[]
// let complet = []
// //   //nakijken of recepte niet dubbel in de weekmenu is gezet
// function isInDagM(){
// return dagM = dagM.reduce((unique, item) => unique.includes(item) ? unique : [...unique, item], [])
// }
// // // //met push werkte het bijna om het weekmenu niet te laten veranderen
// // //   //random een gerect toewijzen aan een dag
// //   newDays.forEach(() => {
// for(let x = 0 ; x<= menu.length ; x++){
//     if (dagM.length < 7) {  
//      randomM = Math.floor(Math.random() * 12)
//        complet =  dagM.push(menu[randomM])
// isInDagM() 
//   }
// }

// //     
// //     menu.map((extra) => {
       
// //         return setWeekM = [...weekM, extra ]
// //            })
// // isInDagM()
// //  }
// //   })

// const [weekM, setWeekM]= useState(dagM)
//  console.log(dagM)
// useEffect(()=>{
// setWeekM([...dagM, complet])
// },[newDays])
// console.log(weekM)


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
menu = {menu[index]}
key = {index}
day={day}
    />
     )}  

    </div>
  )
}
