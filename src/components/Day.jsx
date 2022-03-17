




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
   return dagM =  dagM.reduce((unique, item) => unique.includes(item)? unique: [...unique, item],[])
  }

  newDays.forEach(() => {
    randomM = Math.ceil(Math.random() * 12)
    dagM.push(menu[randomM])
    console.log(dagM)

      isInDagM() 
 console.log(isInDagM())

  
  console.log("hello")
 menu.map((extra)=>{
   console.log("piep")
 
 if(dagM.length <= 8 ){

  dagM.push(extra)
} })
  })

 

 console.log(dagM)


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
