import React from 'react'




//tekst laten bewegen van links naar rechts
//met foto's 
//ook mogelijkheid om zelf door te klikken = menu (db.json)
//als je op foto klikt kan je die aan een dag toevoegen


export default function MenuSelector({menu}) {

let titleM = []
for(let i=0 ; i< menu.length; i++){
  titleM.push(menu[i].title)
}

  return (
    <div> 
    
<h1 className='menuselector-title'>
    Title : {titleM.join("**") }
</h1>


    </div>
  )
}
