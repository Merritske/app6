
import './App.css';
import Header from './components/Header';
import ImportMenu from './components/ImportMenu';
import MenuSelector from './components/MenuSelector';
import Week from './components/Week';
import { useState, useEffect } from 'react';

//random week menu kiezen
//menu's importeren via json file
//loopen over de menu's
//import menu's
//array maken van de geselcteerde menu's? 
  //elke dag nieuw menu toevoegen aan de vorige dag
  //in een week geen twee keer hetzelfde gerecht

function App() {
 //fetch menu's
const [menu, setMenu] = useState("")

useEffect(async()=>{
  const res = await fetch("http://localhost:5000/menu")
  const data = await res.json()
   setMenu(data)
  },[])

// useEffect(()=>{
//    fetch("http://localhost:5000/menu")
//   .then(res => res.json())
//   .then(data => console.log(data))
// },[])
let dagmenu = []
for(let x = 0; x< menu.length ; x++){
  dagmenu.push(menu[x].title)
}

  return (
    <div className="App">
     <h1 className='title'>What's on the menu?</h1>
     <Header />
     <MenuSelector menu={menu}/>
     <ImportMenu />
     <Week menu={dagmenu} />


    </div>
  );
}

export default App;
