
import './App.css';
import HeaderDynamic from './components/HeaderDynamic';

//import MenuSelector from './components/MenuSelector';
import { useState, useEffect } from 'react';
import Week from './components/Week';
import DB from  "./components/db.json"
import Modal from './components/Modal';



//random week menu kiezen
//menu's importeren via json file
//loopen over de menu's
//import menu's
//array maken van de geselcteerde menu's? 
  //elke dag nieuw menu toevoegen aan de vorige dag
  //in een week geen twee keer hetzelfde gerecht

//MenuSelector in de plaats van Receptenlijst
//ingredientenlijst useParam gebruiken en extra page maken om menu's te tonen  

function App() {
 
let days = ["Zondag", "Maandag", "Dinsdag", "Woensdag", "Donderdag", "Vrijdag", "Zaterdag"]
let date = new Date().getDay()
//push gebruiken of via useState de value of newDays veranderen?
//[...newDays, en dan de rest van de days arrray invoegen
let newDays = days.slice(date)
for (let i = 0; i < date; i++) {
 newDays.push(days[i])
}
const [menus, setMenus] = useState([])
const [day, setDay] = useState(days)
const [newDay, setNewDay] = useState([day.slice(date)])

let  randomM = Math.floor(Math.random() * menus.length)

 console.log(day)
 console.log(newDay)

//fetch menu's

useEffect(()=>{
 
const data =  DB.menu
setMenus(data)
setDay(day[date])
setNewDay(newDays )
},[])




console.log(menus)
 


  return (
    <div className="App">


 <HeaderDynamic menu={menus} day={day} />
    
<Modal  />
   
<br/>
<br/>
<br/>
  {/* <MenuSelector menu={menus} /> */}
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>

  
 <Week menu={menus} newDays={newDay} /> 

    </div>
  );
}

export default App;
