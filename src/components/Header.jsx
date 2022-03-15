
//dropdownmenu met recepten
//kiezen op ingrediënten 
//zoekfunctie


export default function Header() {
    let days = ["Sunday","Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    let date = new Date().getDay()



  return (
    <div className="header">
<div >
 <h2>Day of the week: {days[date]}</h2>
</div>
<div>
    {/*dropdownmenu ?*/}
    
    <h2>Recipes list</h2>
   <h4>Ingredients list</h4>

</div>

    </div>
  )
}
