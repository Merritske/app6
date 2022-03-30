
import Day from "./Day"
import { useEffect, useState } from "react"

export default function Week({ menu, newDays }) {


  const [weekmenu, setWeekmenu] = useState([])
  //let weekmenu=[]
 
  console.log(menu)

 
 // useEffect(() => {
    console.log(menu)

      console.log("hoal")
      let uniqueWeek = []

    let randomM = Math.floor(Math.random() * menu.length)
    
        if(weekmenu.length < 7){ 
           menu.map(()=>{
           setWeekmenu( weekmenu.push( menu[randomM])) 
            uniqueWeek = weekmenu.filter((c, index) => {
        return weekmenu.indexOf(c) === index
      })
      setWeekmenu(uniqueWeek)
       
      })
   }
   console.log(weekmenu)
     
   
 
  // }, [])



  // let uniqueWeek
  // for(let x = 0; x < menus.length; x++){
  //  setWeekmenu(menus[randomM]) 
  //  
  //   if(weekmenu.length <7){
  //   menus.map(()=>{
  //      setWeekmenu([...weekmenu, menus[randomM]])
  //   })

  // console.log(uniqueWeek)
  // setWeekmenu(uniqueWeek)
  // }
  //    console.log(weekmenu) 

  // }

  // 

  //dag verbinden aan het menu

  // const [objCard, setObjCard] = useState({
  //   day: "",
  //   recept: ""
  // })
  // // console.log(newDays)
  //  // setWeekmenu(menu[randomM]) 
  // // 
  // console.log(menu)
  // console.log(newDays)
  // let day = newDays[0]
  // console.log(day)
  // let recept = menu[0]
  // console.log(recept)
  //  // let uniqueWeek;
  // useEffect(()=>{
  // //  newDays.map((day)=>{

  //      setObjCard({
  //     day: day,
  //   recept: recept
  //  // })
  // })
  // //  for(let x = 0 ;x <=weekmenu.length ; x++){
  // //    setObjCard({
  // //      ...objCard, recept : weekmenu[x]
  // //    })
  // //      }


  //  },[])

  //  console.log(recept.title)

  let dagmenu = []
  let ingredi = []
  let recipe = []
  for (let x = 0; x < weekmenu.length; x++) {
    dagmenu.push(weekmenu[x].title)
    ingredi.push(weekmenu[x].headIng)
    recipe.push(weekmenu[x].recipe)
  }
  //   console.log(ingredi)
  //  //de menu titels
  // //random recepten in de array zetten om toe te wijzen aan de dagen
  // let dagM = []

  // let complet = []
  // //   //nakijken of recepte niet dubbel in de weekmenu is gezet
  // function isInDagM(){
  // return dagM = dagM.reduce((unique, item) => unique.includes(item) ? unique : [...unique, item], [])
  // }
  // // // //met push werkte het bijna om het weekmenu niet te laten veranderen
  // // //   //random een gerect toewijzen aan een dag
  // //   newDays.forEach(() => {

  //     if (dagM.length < 7) {  
  //     for(let x = 0 ; x<= menu.length ; x++){ 
  //        complet =  dagM.push(menu[randomM])
  //   }
  //   isInDagM() 
  //   dagM = complet
  // }
  // console.log(dagM)

  // useEffect(()=>{


  // /

  // }
  // ,[])
  //  let dagm = weekmenu

  //   function isInDagM(){
  // return dagm = dagm.reduce((unique, item) => unique.includes(item) ? unique : [...unique, item], [])
  // setWeekmenu([...dagm]) 
  // }

  //weekmenu maken dat enkel verandert als de dag verandert
  //id recept koppelen aan dag
  //dag weg, recept weg
  //nieuw recept in array van weekrecepten steken


  //useState maken met de menu en dan pas de title en de ingrediënten eruit filteren 
  //om in de HTML te tonen zodat de basic menu niet veranderd elke keer als renders
  //mag maar 1 ding veranderen = de nieuwe dag dus 
  // [...weekmenu, nieuwdagmenu]
  //herschrijven!!!!!!!!



  //de menu titels
  // //random recepten in de array zetten om toe te wijzen aan de dagen



  //   //nakijken of recepte niet dubbel in de weekmenu is gezet

  // // //met push werkte het bijna om het weekmenu niet te laten veranderen
  // //   //random een gerect toewijzen aan een dag
  //   newDays.forEach(() => {









  //  // if(weekM.length <7){
  //   //   setWeekM([...weekM, dagM])
  //   // weekM.reduce((unique, item) => unique.includes(item) ? unique : [...unique, item], [])
  //   //  }









  return (
    <div>
      hello
      {/* <h1>
         {
day
 }
      </h1>
<p>
  {
   recept.title
  }
</p>
   */}

      {/* {/* {
        days.map((day, id)=>{
            console.log("hello")
      return  <h2
      key={id}
      >
        day = {day}
        </h2> 
            //  <Day day = {day} />
        })
    
    } */}
      {newDays.map((day, index) =>

        <Day
          menu={dagmenu[index]}
          key={index}
          day={day}
          ingredi={ingredi[index]}
          recipe={recipe[index]}
        />
      )}

    </div>
  )
}
