
import './App.css';
import HeaderDynamic from './components/HeaderDynamic';

import MenuSelector from './components/MenuSelector';
import { useState, useEffect } from 'react';
import Week from './components/Week';



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
console.log("12")
},[])


const [menu, setMenu] = useState([])
//fetch menu's
useEffect(async()=>{
const res = await fetch(process.env.REACT_APP_API_URL)
const data = await res.json()
setMenu(data)
console.log("10")
},[])
// weekmenu blijft niet meer staan enkel de dag van vandaag verandert

// const [obj, setObj] = useState({
//   day : "",
//   recept: {
//     title : "",
//     headIng : {
//       meat: "",
//       vegetable: "",
//       pata: ""
//     },
//     recipe:"",
//     type: "easy"
//   }
// })
// newDay.map((day)=>{
//   setObj([...obj, day={day} ])
// })

// console.log(obj)
 


  return (
    <div className="App">
 
 <HeaderDynamic menu={menu} day={day} />
   
   
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

  
<Week menu={menu} newDays={newDay} />

    </div>
  );
}

export default App;
