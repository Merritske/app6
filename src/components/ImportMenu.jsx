import React, { useState } from 'react'
import Button from './Button'

//button moet "add recipe" zeggen en dan wordt importMenu zichtbaar 
//en de button moet veranderen in een submit
//welke data invoeren? 
    //naam, hoofdingrediënten, recept, 
    //type (gehakt, kip, rund, lam, kalf, andere), 
    //moeilijkheidsgraad of tijdsbestek
//head ingrediënts nog aanpassen : meat, vegetable, pata

export default function ImportMenu({ onAdd, menu }) {
    console.log(menu)
   let [title, setTitle] = useState("")
    let [headIng, setHeadIng] = useState({
        meat: "",
        vegetable: "",
        pata : ""
    })
  let [recipe, setRecipe] = useState("")
  let [type, setType] = useState()

const handleSubmit = (e) =>{
e.preventDefault()

for(let x=0; x< menu.length; x++){
     if( menu[x].title == {title}){
    console.log ("recipe already exists")
 
    }else {
    onAdd({title, headIng, recipe})
    console.log("piep")
    
    }
      }
setTitle("")
setHeadIng({
    meat: "",
        vegetable: "",
        pata : ""
})
setRecipe("")
setType("checked")
}

  return (
    <div  >
<fieldset>
<legend>Fill in your favorite recipe </legend>
<form className='importMenu' onSubmit={handleSubmit}>
    <label >
        Recipe name
    </label>
    <input 
   
    type="text"
    placeholder= "recipe name"
    value= {title}
    onChange= {(e)=> setTitle(e.target.value)} />

    <label>
     Head Ingredients
    </label>
    <input 
    type="text"
    placeholder= "meat/fish"
    value= {headIng.meat}
    onChange={(e)=> setHeadIng(e.target.value)} /> 
    <input 
    type="text"
    placeholder= "vegetables"
    value= {headIng.vegetable}
    onChange={(e)=> setHeadIng(e.target.value)} /> 
        <input 
    type="text"
    placeholder= "pasta/patatoes/rice/couscous"
    value= {headIng.pata}
    onChange={(e)=> setHeadIng(e.target.value)} /> 

<label >
        How to make the recipe? 
    </label>
    <input 
    type="text"
    placeholder= "recipe"
    value= {recipe}
    onChange={(e)=> setRecipe(e.target.value)} />

   
    <span> <label>
        easy to make?
    </label><input type="checkbox" name="easy" id="easy" /> </span>

<Button text="Submit" color=""/>
</form>

</fieldset>

{title}

    </div>
  )
}
