import React, { useState } from 'react'
import Button from './Button'


//welke data invoeren? 
//naam, hoofdingrediënten, recept, 
//type (gehakt, kip, rund, lam, kalf, andere), 
//moeilijkheidsgraad of tijdsbestek
//head ingrediënts nog aanpassen : meat, vegetable, pata

export default function ImportMenu({ onAdd, menu, showInp }) {

    console.log("1")
    let [title, setTitle] = useState("")
    let [headIng, setHeadIng] = useState({
        meat: "",
        vegetable: "",
        pata: ""
    })

console.log("2")
    let [recipe, setRecipe] = useState("")
    //let [type, setType] = useState( )
    const handleChange = (e, input) => {
        switch (input) {
            case "meat":
                setHeadIng({ ...headIng, meat: e.target.value })
                break;
            case "vegetable":
                setHeadIng({ ...headIng, vegetable: e.target.value })
                break;
            case "pata":
                setHeadIng({ ...headIng, pata: e.target.value })
                break;
                default:
                    console.log("oeps")
        }
    }
    console.log("3")
    const handleSubmit = (e) => {
        console.log("4")
        e.preventDefault()
        onAdd({ title, headIng, recipe })
        // for (let x = 0; x < menu.length; x++) {
        //     if (title === menu[x].title) {
        //         console.log("recipe already exists")

        //     } else if (title !== menu[x].title) {
        //         onAdd({ title, headIng, recipe })
        //         console.log("piep")

        //     }
        // }
        // setTitle("")
        // setHeadIng({
        //     meat: "",
        //     vegetable: "",
        //     pata: ""
        // })
        // setRecipe("")
        // setType("checked")
console.log("5")
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
                        placeholder="recipe name"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)} />

                    <label>
                        Head Ingredients
                    </label>
                    <input
                        type="text"
                        placeholder="meat/fish"
                        value={headIng.meat}
                        onChange={(e) => handleChange(e, "meat")} />
                    <input
                        type="text"
                        placeholder="vegetables"
                        value={headIng.vegetable}
                        onChange={(e) => handleChange(e, "vegetable")} />
                    <input
                        type="text"
                        placeholder="pasta/patatoes/rice/couscous"
                        value={headIng.pata}
                        onChange={(e) => handleChange(e, "pata")} />

                    <label >
                        How to make the recipe?
                    </label>
                    <input
                        type="text"
                        placeholder="recipe"
                        value={recipe}
                        onChange={(e) => setRecipe(e.target.value)} />


                    <span> <label>
                        easy to make?
                    </label><input type="checkbox" name="easy" id="easy"   /> </span>

                    <Button text="Save recipe" color="" onClick={showInp} />

                </form>

            </fieldset>


            {title}

        </div>
    )
}
