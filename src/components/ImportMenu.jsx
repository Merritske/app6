import React, { useState } from 'react'
import Button from './Button'


//welke data invoeren? 
//naam, hoofdingrediënten, recept, 
//type (gehakt, kip, rund, lam, kalf, andere), 
//moeilijkheidsgraad of tijdsbestek
//head ingrediënts nog aanpassen : meat, vegetable, pata

export default function ImportMenu({  menu, showInp }) {

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
//     const  = (e) => {
//         console.log("4")
//         e.preventDefault()
//         onAdd({ title, headIng, recipe })
 
//         // setTitle("")
//         // setHeadIng({
//         //     meat: "",
//         //     vegetable: "",
//         //     pata: ""
//         // })
//         // setRecipe("")
//         // setType("checked")
// console.log("5")
//     }

    const [obj, setObj] = useState({
        recept: {
          title : "",
          headIng : {
            meat: "",
            vegetable: "",
            pata: ""
          },
          recipe:"",
          type: "easy"
        }
      })
        //addMenu
        const handleSubmit =  (e) => {
          console.log("11")
         setObj({
            recept: {
                title : "",
                headIng : {
                  meat: "",
                  vegetable: "",
                  pata: ""
                },
                recipe:"",
                type: "easy"
         }})
        }
      // newDay.map((day)=>{
      //   setObj([...obj, day={day} ])
      // })
      

    return (
        <div   >
            <fieldset className='importMenu-field' >
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
