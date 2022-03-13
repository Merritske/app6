import Day from "./Day"
import { useEffect, useState } from "react"

export default function Week() {
    let days = ["Sunday","Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    let date = new Date().getDay()


    



  return (
    <div>
    {
        days.map((day)=>{
            console.log("hello")
      return  <h2>day = {day}</h2> 
            //  <Day day = {day} />
        })
    
    }
          
      
    <Day 
    key = "1"
    day = {days[1]}
    />




    </div>
  )
}
