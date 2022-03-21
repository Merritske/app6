
import './App.css';
import Header from './components/Header';
import ImportMenu from './components/ImportMenu';
import MenuSelector from './components/MenuSelector';

import { useState, useEffect } from 'react';
import Day from './components/Day';
import Button from './components/Button';
import Week from './components/Week';
import Footer from './components/Footer';
//import Week from './components/Week';

//random week menu kiezen
//menu's importeren via json file
//loopen over de menu's
//import menu's
//array maken van de geselcteerde menu's? 
  //elke dag nieuw menu toevoegen aan de vorige dag
  //in een week geen twee keer hetzelfde gerecht

function App() {
  let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
   let date = new Date().getDay()
//push gebruiken of via useState de value of newDays veranderen?
   //[...newDays, en dan de rest van de days arrray invoegen
  let newDays = days.slice(date)
  for (let i = 0; i < date; i++) {
    newDays.push(days[i])
  }

const [day, setDay] = useState(days)
const [newDay, setNewDay] = useState([day.slice(date)])

useEffect(()=>{
  setDay(day[date])
  setNewDay(newDays )

},[])


const [menu, setMenu] = useState([])
 //fetch menu's
useEffect(async()=>{
  const res = await fetch("http://localhost:5000/menu")
  const data = await res.json()
   setMenu(data)
  },[])
// weekmenu blijft niet meer staan enkel de dag van vandaag verandert

console.log(menu)

//addMenu
const addMenu = async(men)=>{

const res = await fetch("http://localhost:5000/menu", {
  method: "POST",
headers: {
  "content-type": "application/json"
},
body: JSON.stringify(men)
})

   const data = await res.json()
setMenu([...menu, data])
 setShowInp(false)
}

//show add recipe
const [showInp, setShowInp] = useState(false)



//useState maken met de menu en dan pas de title en de ingrediënten eruit filteren 
//om in de HTML te tonen zodat de basic menu niet veranderd elke keer als renders
//mag maar 1 ding veranderen = de nieuwe dag dus 
// [...weekmenu, nieuwdagmenu]
//herschrijven!!!!!!!!

let dagmenu = []
let ingredi = []
for(let x = 0; x< menu.length ; x++){
  dagmenu.push(menu[x].title)
  ingredi.push(menu[x].headIng)
}
console.log(ingredi)

 
 //de menu titels
// //random recepten in de array zetten om toe te wijzen aan de dagen
let dagM = []
let randomM

//   //nakijken of recepte niet dubbel in de weekmenu is gezet
function isInDagM(){
return dagM = dagM.reduce((unique, item) => unique.includes(item) ? unique : [...unique, item], [])
}
// // //met push werkte het bijna om het weekmenu niet te laten veranderen
// //   //random een gerect toewijzen aan een dag
//   newDays.forEach(() => {
  for(let x = 0 ; x<= menu.length ; x++){
        if (dagM.length < 7) {  
 
     randomM = Math.floor(Math.random() * 12)
        dagM.push(dagmenu[randomM])
isInDagM() 

}
  }


// useEffect((randomM, menu)=>{
//     let newRecipe = menu[randomM]
//   setAlle([...alle, newRecipe ] )

// },[])

//bij een nieuwe dag 

//     
//     menu.map((extra) => {
       
//         return setWeekM = [...weekM, extra ]
//            })
// isInDagM()
//  }
//   })



  return (
    <div className="App">
  <div>
           <h1 className='title'>What's on the menu?</h1> 
 </div>
           <div className='app-header'>
     <Header day={day} />

 {showInp && <ImportMenu onAdd={addMenu} showInp={showInp} menu={menu} /> }
   
     <Button text=  {showInp ?  "Cancel" :"Add recipe"   } click={()=>setShowInp(!showInp)}  color=""/>
      </div>
 
   
   
<br/>
<br/>
<br/>
  {/* <MenuSelector menu={menu} /> */}
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>

  
<Week menu={dagM} newDays={newDay} />
<Footer />
    </div>
  );
}

export default App;
