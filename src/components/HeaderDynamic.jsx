import Button from './Button';
import ImportMenu from './ImportMenu';
import { useState, useEffect } from 'react';

//dropdownmenu met recepten
//kiezen op ingrediënten 
//zoekfunctie


export default function HeaderDynamic({ menu, day }) {

  //show/hide menu input
  const [showInp, setShowInp] = useState(false)


  //addMenu
  const addMenu = async (men) => {
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
  function handleClick(e) {
    e.preventDefault()
    console.log("pie")
    setShow(true)
  }
  console.log(show)

  //nog juiste zoek recept tonen maar vindt al wel het recept als je een zoekterm ingeeft
//uitgeschakeld 
  let titleStr = []
  let titleStrArr = []
  let searchItem = []
  let searchItemNew = []
  menu.map((items) => {
    titleStr.push(items.title.toString())
  })

  function filterFunction(e) {
    e.preventDefault()
    console.log(titleStr)

    titleStr.map((item) => {
      titleStrArr = item.toString()
      console.log(item)
      if (titleStrArr.includes(e.target.value)) {
        console.log("nog maar eens proberen")
    
     searchItem =   [...searchItem, item]
  //  
       // searchItem.push(item)
        console.log(searchItem)
 searchItem.forEach((element) => {
if(!searchItem.includes(element)){
  searchItem = [...searchItem, element]
}else {
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

const menuSel  = (e)=>{
e.preventDefault()
menu.map((item)=>{
  if(item.title === e.target.value){
    return (<div>
      <h1> {item.title}</h1> 
      <h2>{item.headIng.meat} </h2>
      </div>)
  }
})
 
}

  }

  return (
    <div   >

     {!show && <div className='app-header' >
            <h2 className="header-title">Day of the week: {day}</h2>
      <ul className="menu-header" >

<li>  <h2 className='droplist' onClick={handleClick}>Recipe List</h2></li> 

        <li>
          <h2 className='droplist'>  Ingredients list</h2>
        </li>
      </ul>

 <Button text={showInp ? "Cancel" : "Add recipe"} click={() => setShowInp(!showInp)} color="" />
 </div>
}
       
        {show && <div className='dropdownMenu' >

          <button className='dropmenuCloseBtn' onClick={()=>show = true ? setShow(false): setShow(true)}>Close</button>
          {/* <input type="text" placeholder='search...' onChange={filterFunction} /> */}
          {/* <li className='livalue'>{searchItemNew}</li> */}
         <ul onClick={menuSel}>
                 { menu.map((item, index)=>(
   
   <li className='livalue' value={item.title} key={index}  > {item.title}   
    </li>
                    
                ))  } 
         </ul>
     
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



      {showInp && <ImportMenu onAdd={addMenu} showInp={() => setShowInp(!showInp)} menu={menu} />}

     
    </div>


  )
}
