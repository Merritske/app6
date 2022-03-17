
//dropdownmenu met recepten
//kiezen op ingrediënten 
//zoekfunctie


export default function Header({day}) {
 
  return (
    <div className="header">
<div >
 <h2>Day of the week: {day}</h2>
</div>
<div>
    {/*dropdownmenu ?*/}
    
    <h2>Recipes list</h2>
   <h4>Ingredients list</h4>

</div>

    </div>
  )
}
