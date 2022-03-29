import Button from './Button';
import ImportMenu from './ImportMenu';
import { useState, useEffect } from 'react';
import "./headerDynamic.css"
import  "./db.json"
//dropdownmenu met recepten
//kiezen op ingrediënten 
//zoekfunctie


export default function HeaderDynamic({ menu, day }) {

  //show/hide menu input
  let [showInp, setShowInp] = useState(false)


  //addMenu
  const addMenu = async (men) => {
    console.log("11")
    const res = await fetch("menu", {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(men)
    })
    console.log("13")

    setShowInp(false)

  }
  let [show, setShow] = useState(false)
 let [showIng, setShowIng] = useState(false)
  function handleClick(e) {
    e.preventDefault()
    console.log("pie")
    setShow(true)
  }
  let [displayDrop, setDisplayDrop] = useState(false)
  function handleClickIng(e) {
    e.preventDefault()
    console.log("pie")
    setDisplayDrop(!displayDrop)
    if(displayDrop){
      setShowIng(true)
    } else{
  setMeatShow(false)
  setVegetableShow(false)
  setPataShow(false)
}
  }
  //   window.onclick = function (event) {
  //     if (!event.target.matches('.droplistIng')) {
  // setDisplayDrop(!displayDrop)
  //     }
  //   }
  console.log(displayDrop)

  //nog juiste zoek recept tonen maar vindt al wel het recept als je een zoekterm ingeeft
  //uitgeschakeld 
  let titleStr = []
  let titleStrArr = []
  let searchItem = []
  let searchItemNew = []

  let ingred = []
  menu.map((items) => {
    titleStr.push(items.title.toString())
    ingred.push(items.headIng)
  })
  console.log(ingred)

  function filterFunction(e) {
    e.preventDefault()
    console.log(titleStr)

    titleStr.map((item) => {
      titleStrArr = item.toString()
      console.log(item)
      if (titleStrArr.includes(e.target.value)) {
        console.log("nog maar eens proberen")

        searchItem = [...searchItem, item]
        //  
        // searchItem.push(item)
        console.log(searchItem)
        searchItem.forEach((element) => {
          if (!searchItem.includes(element)) {
            searchItem = [...searchItem, element]
          } else {
            searchItem = [...searchItem]
            console.log(searchItem)
            console.log(element)
          }
          // 

          //         if (!searchItemNew.includes(element)) {
          //           searchItemNew.push(element) //werkt niet
          //         } 
          //           console.log(element)

        })

        //  searchItem.filter((value, index)=> searchItem.indexOf(value) !== index) //werkt niet
        // searchItemNew = searchItem.filter((c, index)=>{ //werkt niet
        //   return searchItem.indexOf(c) !== index;
        //})
      }



    })
    console.log(searchItem)

    // const menuSel  = (e)=>{
    // e.preventDefault()
    // menu.map((item)=>{
    //   if(item.title === e.target.value){
    //     console.log("plop")
    //     // return (<div>
    //     //   <h1> {item.title}</h1> 
    //     //   <h2>{item.headIng.meat} </h2>
    //     //   </div>)
    //   }
    // })

    // }

  }

  //meat, vegetable en pata dan daaronder zetten LAYOUTEN
  //zorgen dat het terug verdwijnt als ergens anders geklikt wordt
  //als op een ingredient geklikt wordt, al de recepten tonen die dit ingredient hebben IDEM voor recepten
  //zoekfunctie op ingredienten

 let [meatShow, setMeatShow] = useState(false)
let [vegetableShow, setVegetableShow] = useState(false)
 let [pataShow, setPataShow] = useState(false)
  return (
    <div   >

      {!show && !showIng && <div className='app-header' >
        <h2 className="header-title">Day of the week: {day}</h2>
        <ul className="menu-header" >

          <li key="droplist1" > <h2 className='droplist' onClick={handleClick}>Recipe List</h2>

          </li>

          <li key="droplist2" className='droplist' onClick={handleClickIng}>
            <h2 >  Ingredients list</h2>
            {displayDrop && <div className='dropdownMenu-ingred' >

              <ul className='droplistIng'>
            
                <li key="droplist2.1" onClick={(e) => setMeatShow(true)}>Meat</li>
                <li key="droplist2.2" onClick={(e) => setVegetableShow(true)}>Vegetable</li>
                <li key="droplist2.3" onClick={(e) => setPataShow(true)}>Pata</li>
              </ul>    </div>}
          </li>

        </ul>

        <Button text={showInp ? "Cancel" : "Add recipe"} click={() => setShowInp(!showInp)} color="" />
      </div>
      }

      {show && <div className='dropdownMenu-recipe' >

        <button className='dropmenuCloseBtn' onClick={() => show = true ? setShow(false) : setShow(true)}>Close</button>
        {/* <input type="text" placeholder='search...' onChange={filterFunction} /> */}
        {/* <li className='livalue'>{searchItemNew}</li> */}
        <ul >
          {menu.map((item, index) => (

            <li value={item.title} key={index}  > {item.title}
            </li>

          ))}
        </ul>
      </div>}

     
     {showIng && <ul className='livalue' >
  <button className='dropmenuCloseBtn' onClick={() => showIng = true ? setShowIng(false)  : setShowIng(true)}>Close</button> 
       
        {ingred.map((item, index) => (

          <div key={index}>
            {meatShow &&
              <li value={item.meat} key={item.index} >
                {item.meat}
              </li>}

            {vegetableShow && <li value={item.vegetable} key={item.index}  >
              {item.vegetable}
            </li>}

            {pataShow && <li value={item.pata} key={item.index}>
              {item.pata}
            </li>}
          </div>
        ))}

      </ul>}








      {/* {
                      show &&    
<select value={value} >
          
                { menu.map((item)=>(
   
     <option key={item.id}  value={item.title} >  {item.title}   
     </option>
                      
                  ))  } 
               </select>} */}



      {showInp && <ImportMenu onAdd={addMenu} showInp={() => setShowInp(!showInp)} menu={menu} />}


    </div>


  )
}
