import Button from './Button';
import ImportMenu from './ImportMenu';
import { useEffect, useState } from 'react';
import "./headerDynamic.css"
import DB from "./db.json"
import MenuSetter from '../Pages/MenuSetter';
import { Link } from 'react-router-dom';
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
    if (displayDrop) {
      setShowIng(true)
    } else {
      setMeatShow(false)
      setVegetableShow(false)
      setPataShow(false)
    }
  }



  //nog juiste zoek recept tonen maar vindt al wel het recept als je een zoekterm ingeeft
  //uitgeschakeld 
  let titleStr = []

  let ingred = []
  menu.map((items) => {

    titleStr.push(items.title.toString())
    ingred.push(items.headIng)

  })
  let itemM = []
  ingred.map((item) => {
    return itemM.push(item.meat)

  })
  let meat = itemM.filter((c, index) => {
    return itemM.indexOf(c) === index;
  });

  let itemVa = []
  ingred.map((item) => {
    return itemVa.push(item.vegetable)
  })
  let itemV = []
  itemVa.map((i)=>{
    for(let e of i){
      if(e.length > 2){
       itemV.push(e)
      }else{
        itemV.push(i)
      }
    }
    return itemV
  })

  let vegetable = itemV.filter((c, index) => {
    return itemV.indexOf(c) === index;
  });
console.log(vegetable)

  let itemP = []
  ingred.map((item) => {
    return itemP.push(item.pata)

  })
  let pata = itemP.filter((c, index) => {
    return itemP.indexOf(c) === index;
  });

  //searchfunction

  // 
  const [filteredMenu, setFilteredMenu] = useState([])

  useEffect(() => {
    setFilteredMenu(menu)
  }, [])
  function filterFunction(e) {
    const newItem = menu.filter((item) => {
      return item.title.toLowerCase().includes(e.target.value.toLowerCase())

    })
    setFilteredMenu(newItem)

  }



  //meat, vegetable en pata dan daaronder zetten LAYOUTEN
  //zorgen dat het terug verdwijnt als ergens anders geklikt wordt
  //als op een ingredient geklikt wordt, al de recepten tonen die dit ingredient hebben IDEM voor recepten
  //zoekfunctie op ingredienten
 const [menuSet, setMenuSet] = useState({}) 
  const [menuGetM, setMenuGetM] = useState([])

  function menuGetterM(e) {
    const newR = menu.filter((item) => {
      return item.headIng.meat.includes(e.target.innerText)
    })
    setMenuGetM(newR)
    //andere methode
    //     menu.map((item)=>{
       // if(item.headIng.meat === e.target.innerText){
    // setMenuGetM([...menuGetM, item.title])
    // }
    // return menuGetM
    //     })
  
  }
  const [menuGetV, setMenuGetV] = useState([])

  function menuGetterV(e) {
    const newR = menu.filter((item) => {
      return item.headIng.vegetable.includes(e.target.innerText)
    })
    setMenuGetV(newR)
 
  }
  const [menuGetP, setMenuGetP] = useState([])

  function menuGetterP(e) {
    const newR = menu.filter((item) => {
      return item.headIng.pata.includes(e.target.innerText)
    })
    setMenuGetP(newR)
  }


 const [menuSetMenuSetter, setMenuSetMenusetter] = useState(false)
 
  function menuShow(e){
let newR = menu.filter((item) => {
  return item.title.includes(e.target.innerText)
})

setMenuSet(newR) 
setMenuSetMenusetter(!menuSetMenuSetter)
  }
console.log(menuSet)

function closeBtn(){
  setShowIng(!showIng)
  setMenuGetM([])
  setMenuGetV([])
  setMenuGetP([])

}
function closeBtnR(){
   setShow(!show)
  setFilteredMenu([])
}
 
  return (
    <div   >
      
{menuSetMenuSetter && 
<div onClick={()=>setMenuSetMenusetter(false)}>
 <MenuSetter menuS={menuSet}  /> 

</div>
}

      {!show && !showIng && <div className='app-header' >
        <h2 className="header-title">Day of the week: {day}</h2>
        <ul className="menu-header" >

          <li key="droplist1" className='droplist'> <h2 onClick={handleClick}>Recipe List</h2>

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

        <button className='dropmenuCloseBtn' onClick={closeBtnR}>Close</button>


       
        {<ul >


        <input type="text" placeholder='search...' onChange={filterFunction} />
          {filteredMenu.length !== 0 ?
            filteredMenu.map((item, index) => (

              <li className='ing' value={item.title} key={index} onClick={menuShow} > {item.title}
              </li>

            ))
            :
            menu.map((item, index) => (
              <li className='ing' value={item.title} key={index} onClick={menuShow} > {item.title}
              </li>
            ))
          }

        </ul>}
      </div>}



      {showIng && <div className='dropdownMenu-recipe' >
        <button className='dropmenuCloseBtn' onClick={closeBtn}>Close</button>



        {meatShow && 
           <ul>
              {
            menuGetM.length !== 0 ?
         
                 menuGetM.map((item, index) => (
                <li className='ing' value={item} key={index} onClick={menuShow} >
                  {item.title}
                </li> 
              
              )) 
              :
              meat.map((item, index) => (
                <li className='ing' value={item} key={index} onClick={menuGetterM} >
                  {item}
                </li>
              ))
          }

        </ul>
  
        }

        {vegetableShow && <ul>
          {menuGetV.length !==0 ?
            menuGetV.map((item, index) => (
              <li className='ing' value={item} key={index} onClick={menuShow} >
                {item.title}
              </li> ))
        :
          vegetable.map((item, index) => (
            <li className='ing' value={vegetable} key={index} onClick={menuGetterV}  >
              {item}
            </li>))}
        </ul>}




        {pataShow && <ul>
          {menuGetP.length !==0 ?
            menuGetP.map((item, index) => (
              <li className='ing' value={item} key={index} onClick={menuShow} >
                {item.title}
              </li> ))
        :
          pata.map((item, index) => (
            <li className='ing' value={pata} key={index} onClick={menuGetterP} >
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



      {showInp && <ImportMenu showInp={() => setShowInp(!showInp)} menu={menu} />}


    </div>


  )
}
