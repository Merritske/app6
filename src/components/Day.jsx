




export default function Day({menu}) {
    let days = ["Sunday","Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    let date = new Date().getDay()
   console.log(days)
 let newDays = days.slice(date )

for(let i=0 ; i< date ; i++){
 
newDays.push(days[i])
    
}

console.log(newDays)
let dagmenu = menu[date]

return ( <div className="day">
 {
        newDays.map((day, index)=>{
   
      return   <div className="dayComp" key={index}>
      <h2 >
     Day of the week: {day} </h2>
<img src="" alt="eten"/>
<h1>{dagmenu}</h1>
<p>Some extra's, eventueel hoofdingrediënten</p>
        
      </div> 

          })

    
    }
         

    </div>)

}
