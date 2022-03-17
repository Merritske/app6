




//bij een volgende dag enkel de nieuwe een nieuw menu geven 
//=>in week aanpassen??? met useState?


export default function Day({ menu }) {
  let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
  let date = new Date().getDay()

  let newDays = days.slice(date)

  for (let i = 0; i < date; i++) {
    newDays.push(days[i])
  }

  console.log(menu) //de menu titels

  let dagM = []
  let randomM
function isInDagM(){
 return dagM = dagM.reduce((unique, item) => unique.includes(item) ? unique : [...unique, item], [])
}
  console.log(dagM)
  newDays.forEach(() => {
    randomM = Math.ceil(Math.random() * 11)
    dagM.push(menu[randomM])
    isInDagM()
    menu.map((extra) => {
      if (dagM.length <= 7) {
        console.log(dagM.length)
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
