import "./day.css"




//bij een volgende dag enkel de nieuwe een nieuw menu geven 
//=>in week aanpassen??? met useState?


export default function Day({ menu, newDays }) {


  console.log(menu) //de menu titels
//random recepten in de array zetten om toe te wijzen aan de dagen
  let dagM = []
  let randomM
  //nakijken of recepte niet dubbel in de weekmenu is gezet
function isInDagM(){
 return dagM = dagM.reduce((unique, item) => unique.includes(item) ? unique : [...unique, item], [])
}
  console.log(dagM)
  //random een gerect toewijzen aan een dag
  newDays.forEach(() => {
    randomM = Math.ceil(Math.random() * 12)
    dagM.push(menu[randomM])
    isInDagM()
    menu.map((extra) => {
          if (dagM.length <= 7) {
        return dagM.push(extra)
      }
    })
  })



  return (<div className="day">
    {
      newDays.map((day, index) => {

        return <div className="dayComp" key={index}>
          <h2 >
            Day of the week: {day} </h2>

          <img src="" alt="eten" />
          <h1>{dagM[index]}</h1>
          <p>Some extra's, eventueel hoofdingrediënten of enkel als je erop klikt...</p>
        </div>
      })
    }

  </div>)
}
