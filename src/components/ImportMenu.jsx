import React, { useState } from 'react'
import Button from './Button'
import DB from  "./db.json"

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
console.log("2")
    let [recipe, setRecipe] = useState("")
    //let [type, setType] = useState( )
    
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

        //addMenu
        const handleSubmit =  (e) => {
        e.preventDefault()
          console.log("11")
         setObj({
            recept: {
                title : title,
                headIng :headIng ,
                recipe: recipe,
                type: "easy"
         }})
     
              console.log(obj)
        console.log(menu)
    
   
        } 
//           JSON.stringify(obj)
//   DB.menu = [...menu, obj]
//        console.log(DB.menu)
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
      // newDay.map((day)=>{
      //   setObj([...obj, day={day} ])
      // })
      

    return (
        <div  className='importMenu-field-tijdelijk' >
            <h1>
                Het spijt me maar u kan geen recepten invoegen.
                Indien u een leuk recept heeft kan u mij dit altijd mailen.
             
            </h1>
   <a href='mailto:merritske@gmail.com'>Mail recept</a>

            {/* <fieldset className='importMenu-field' >
                <legend>Fill in your favorite recipe </legend>
                <form className='importMenu' onSubmit={handleSubmit} >
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

                 <Button text="Send Recipe" color="" click={showInp} />

                </form>

            </fieldset> */}


            {title}

        </div>
    )
}
