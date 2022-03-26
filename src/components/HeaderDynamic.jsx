import Button from './Button';
import ImportMenu from './ImportMenu';
import { useState, useEffect } from 'react';

//dropdownmenu met recepten
//kiezen op ingrediënten 
//zoekfunctie


export default function HeaderDynamic({menu, day}) {
  
//show/hide menu input
const [showInp, setShowInp] = useState(false)


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

setShowInp(false)

}
const [show, setShow] = useState(false)
function handleClick(e){
     e.preventDefault()
console.log("pie")
setShow(!show) 

}
console.log(show)

//nog juiste zoek recept tonen maar vindt al wel het recept als je een zoekterm ingeeft

  let titleStr = []
  let titleStrArr = []
  menu.map((item)=>{
  titleStr.push(item.title.toString() ) 
 })
  
 function filterFunction(e){
   e.preventDefault() 
   console.log(titleStr)

   titleStr.map((item)=>{
  titleStrArr =  item.toString()
  console.log(titleStrArr)
  if(titleStrArr.includes(e.target.value)){
  console.log("nog maar eens proberen")

           
    }
   
   })

  }

    return (
    <div className='app-header'>
   
    <h2 className="header-title">Day of the week: {day}</h2>
   
   
       {/*dropdownmenu ?
       search/filter dropdown -> w3schools how to
       */}
       <ul className="menu-header">
      
            <h2 className='droplist' onClick={handleClick}>Recipe List</h2> 
           {show && <div className='dropdownMenu'>
              <input type="text" placeholder='search...' onChange={filterFunction}  />
          { menu.map((item)=>(
   
   <li className='livalue' value={item.title} key={item.id} > {item.title}   
    </li>
                    
                ))  }  
            </div>
} 






                {/* {
                      show &&    
<select value={value} >
          
                { menu.map((item)=>(
   
     <option key={item.id}  value={item.title} >  {item.title}   
     </option>
                      
                  ))  } 
               </select>} */}
              
     
         <li>
          <h2 className='droplist'>  Ingredients list</h2>
         </li>
       </ul>
               
    
    {showInp && <ImportMenu onAdd={addMenu} showInp={()=>setShowInp(!showInp)} menu={menu} /> }
      
        <Button text=  {showInp ?  "Cancel" :"Add recipe"   } click={()=>setShowInp(!showInp)}  color=""/>
         </div>
   
   
  )
}
