
import './App.css';
import HeaderDynamic from './components/HeaderDynamic';

//import MenuSelector from './components/MenuSelector';
import { useState, useEffect } from 'react';
import Week from './components/Week';
import DB from  "./components/db.json"



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

// weekmenu blijft niet meer staan enkel de dag van vandaag verandert


console.log(menus)
 


  return (
    <div className="App">
 
 <HeaderDynamic menu={menus} day={day} />
   
   
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
