
import './App.css';
import Header from './components/Header';
import ImportMenu from './components/ImportMenu';
import MenuSelector from './components/MenuSelector';

import { useState, useEffect } from 'react';
import Day from './components/Day';

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



const [menu, setMenu] = useState([])
const [day, setDay] = useState(days)
const [newDay, setNewDay] = useState([day.slice(date)])
console.log(day)
useEffect(()=>{
  setDay(day[date])
  setNewDay(newDays )
},[])

 //fetch menu's
useEffect(async()=>{
  const res = await fetch("http://localhost:5000/menu")
  const data = await res.json()
   setMenu(data)
  },[])

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
 
}

// useEffect(()=>{
//    fetch("http://localhost:5000/menu")
//   .then(res => res.json())
//   .then(data => console.log(data))
// },[])

let dagmenu = []
for(let x = 0; x< menu.length ; x++){
  dagmenu.push(menu[x].title)
}
console.log(dagmenu)

  return (
    <div className="App">
     <h1 className='title'>What's on the menu?</h1>
     <Header day={day} />
     <MenuSelector menu={menu} />
     <ImportMenu onAdd={addMenu} menu={menu}/>

<br/>
<br/>
<br/>
<br/>n
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>

     <Day menu={dagmenu} newDays={newDays} />


    </div>
  );
}

export default App;
