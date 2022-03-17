import React, { useState } from 'react'

//button moet "add recipe" zeggen en dan wordt importMenu zichtbaar 
//en de button moet veranderen in een submit
//welke data invoeren? 
    //naam, hoofdingrediënten, recept, 
    //type (gehakt, kip, rund, lam, kalf, andere), 
    //moeilijkheidsgraad of tijdsbestek
//head ingrediënts nog aanpassen : meat, vegetable, pata

export default function ImportMenu({ onAdd }) {
   let [title, setTitle] = useState("")
    let [headIng, setHeadIng] = useState({
        meat: "",
        vegetable: "",
        pata : ""
    })
  let [recipe, setRecipe] = useState("")

const handleSubmit = (e) =>{
e.preventDefault()
onAdd({title})
setTitle("")


}

  return (
    <div className='importMenu' onSubmit={handleSubmit}>
<fieldset>
<legend>Fill in your favorite recipe </legend>
<form>
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
    placeholder= "most important ingredients"
    value= {headIng.meat}
    onChange={(e)=> setHeadIng(e.target.value)} /> 
    <input 
    type="text"
    placeholder= "most important ingredients"
    value= {headIng.vegetable}
    onChange={(e)=> setHeadIng(e.target.value)} /> 
        <input 
    type="text"
    placeholder= "most important ingredients"
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

<button type="submit">Add recipe</button>
</form>

</fieldset>



    </div>
  )
}
