import Day from "./Day"


export default function Week({menu}) {
console.log(menu)

  return (
    <div>
    {/* {
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
          
    <Day 
 menu = {menu}
    />

    </div>
  )
}
