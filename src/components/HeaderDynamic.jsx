import Button from './Button';
import ImportMenu from './ImportMenu';
import { useState } from 'react';
import "./headerDynamic.css"
import  "./db.json"
//dropdownmenu met recepten
//kiezen op ingrediënten 
//zoekfunctie


export default function HeaderDynamic({ menu, day }) {

  //show/hide menu input

  let [showInp, setShowInp] = useState(false)
  let [meatShow, setMeatShow] = useState(false)
  let [vegetableShow, setVegetableShow] = useState(false)
   let [pataShow, setPataShow] = useState(false)
  let [displayDrop, setDisplayDrop] = useState(false)

  let [show, setShow] = useState(false)
 let [showIng, setShowIng] = useState(false)
  function handleClick(e) {
    e.preventDefault()
    console.log("pie")
    setShow(true)
  }

  function handleClickIng(e) {
    e.preventDefault()
    console.log("pie")
    setDisplayDrop(!displayDrop) 
      setShowIng(false)
    if(displayDrop){
      setShowIng(true) 
    } else{
  setMeatShow(false)
  setVegetableShow(false)
  setPataShow(false)
}
  }



  //nog juiste zoek recept tonen maar vindt al wel het recept als je een zoekterm ingeeft
  //uitgeschakeld 
  let titleStr = []

  let ingred = []
  menu.map((items) =>  {
 
  titleStr.push(items.title.toString())
    ingred.push(items.headIng)

  })
  let itemM =[]
  ingred.map((item)=>{
 return  itemM.push(item.meat)

  })
  let meat = itemM.filter((c, index) => {
    return itemM.indexOf(c) === index;
});

let itemV =[]
ingred.map((item)=>{
return itemV.push(item.vegetable)
})
let vegetable = itemV.filter((c, index) => {
  return itemV.indexOf(c) === index;
});

let itemP =[]
ingred.map((item)=>{
 return itemP.push(item.pata)

})
let pata = itemP.filter((c, index) => {
  return itemP.indexOf(c) === index;
});

//searchfunction

let titleStrArr = []
let searchItem = []
let searchItemNew = []
let li = document.getElementsByClassName("livalue")
   function filterFunction(e) {
     for(let x=0 ; x< li.length; x++){
      // console.log(li.item(x).innerHTML)
 
       //  console.log(i) //elke letter apart
            if(li.item(x).innerHTML.indexOf(e.target.value) >-1){
         console.log("hoera")
             console.log(li.item(x).innerHTML)
         // searchItem.push(li.item(x).innerHTML)
       }

    
     }
//console.log(searchItem)
   }



  //meat, vegetable en pata dan daaronder zetten LAYOUTEN
  //zorgen dat het terug verdwijnt als ergens anders geklikt wordt
  //als op een ingredient geklikt wordt, al de recepten tonen die dit ingredient hebben IDEM voor recepten
  //zoekfunctie op ingredienten


  return (
    <div   >


      {!show && !showIng && <div className='app-header' >
        <h2 className="header-title">Day of the week: {day}</h2>
        <ul className="menu-header" >

          <li key="droplist1" className='droplist'> <h2  onClick={handleClick}>Recipe List</h2>

          </li>

          <li key="droplist2" className='droplist' onClick={handleClickIng}>
            <h2 >Ingredients list</h2>
            {displayDrop && <div className='dropdownMenu-ingred' >

              <ul className='droplistIng'>
            
                <li className='dropListIngL' key="droplist2.1" onClick={(e) => setMeatShow(true)}><span className='spanDrop'> Meat</span> </li>
                <li className='dropListIngL' key="droplist2.2" onClick={(e) => setVegetableShow(true)}><span className='spanDrop'> Vegetable</span> </li>
                <li className='dropListIngL' key="droplist2.3" onClick={(e) => setPataShow(true)}><span className='spanDrop'> Pata </span></li>
              </ul>    </div>}
          </li>

        </ul>

        <Button text={showInp ? "Cancel" : "Add recipe"} click={() => setShowInp(!showInp)} color="" />
      </div>
      }

      {show && <div className='dropdownMenu-recipe' >

   <button className='dropmenuCloseBtn' onClick={() => show = true ? setShow(false) : setShow(true)}>Close</button> 



        {/* <li className='livalue'>{searchItemNew}</li> */}
        <ul > 
           <input type="text" placeholder='search...' onChange={filterFunction} />

          {menu.map((item, index) => (

            <li className='livalue' value={item.title} key={index}  > {item.title}
            </li>

          ))}
        </ul>
      </div>}

     
     {showIng && <div className='dropdownMenu-recipe' >
   <button className='dropmenuCloseBtn' onClick={() => showIng = true ? setShowIng(false)  : setShowIng(true)}>Close</button>  
      
     

          
            {meatShow &&  <ul> 
              {meat.map((item, index)=>(
                <li value={meat} key={index} >
                {item}
              </li>
              ))}  
              </ul>
            }

            {vegetableShow && <ul> 
              {vegetable.map((item, index)=>(
            <li value={vegetable} key={index}  >
              {item}
            </li>))}
</ul>}
            {pataShow && <ul> 
              {pata.map((item, index)=>(
              <li value={pata} key={index}>
              {item}
            </li>))}
       </ul>}
   


      </div>}








      {/* {
                      show &&    
<select value={value} >
          
                { menu.map((item)=>(
   
     <option key={item.id}  value={item.title} >  {item.title}   
     </option>
                      
                  ))  } 
               </select>} */}



      {showInp && <ImportMenu  showInp={() => setShowInp(!showInp)} menu={menu} />}


    </div>


  )
}
