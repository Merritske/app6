import { useEffect, useState } from "react"



export default function Day({key, day}) {
    let days = ["Sunday","Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    let date = new Date().getDay()
   console.log(days)

return ( <div className="day">

         <h2> Day of the week: {day} </h2>
<img src="" alt="eten"/>
<h1>menu name</h1>
<p>Some extra's, eventueel hoofdingrediënten</p>

    </div>)

}
