
//dropdownmenu met recepten
//kiezen op ingrediënten 
//zoekfunctie


export default function Header({day}) {
 
  return (
    <div className="header">

 <h2 className="header-title">Day of the week: {day}</h2>


    {/*dropdownmenu ?*/}
    <ul className="menu-header">
      <li>
        Recipes list
      </li>
      <li>
        Ingredients list
      </li>
    </ul>
  



    </div>
  )
}
