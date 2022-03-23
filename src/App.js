
import './App.css';
import Header from './components/Header';
import ImportMenu from './components/ImportMenu';
import MenuSelector from './components/MenuSelector';
import { useState, useEffect } from 'react';
import Button from './components/Button';
import Week from './components/Week';
import Footer from './components/Footer';


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
  const res = await fetch("http://localhost:5000/menu")
  const data = await res.json()
   setMenu(data)
   console.log("10")
  },[])
// weekmenu blijft niet meer staan enkel de dag van vandaag verandert



//show/hide menu input
const [showInp, setShowInp] = useState(false)
 console.log(showInp)

 //addMenu
const addMenu = async(men)=>{
  console.log("11")
const res = await fetch("http://localhost:5000/menu", {
  method: "POST",
headers: {
  "Content-type": "application/json"
},
body: JSON.stringify(men)
})
console.log("13")
   const data = await res.json()
setMenu([...menu, data])
 setShowInp(false)

}






 


  return (
    <div className="App">
  <div>
           <h1 className='title'>What's on the menu?</h1> 
 </div>
           <div className='app-header'>
     <Header day={day} />

 {showInp && <ImportMenu onAdd={addMenu} showInp={()=>setShowInp(!showInp)} menu={menu} /> }
   
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

  
<Week menu={menu} newDays={newDay} />
<Footer />
    </div>
  );
}

export default App;
