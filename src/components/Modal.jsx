
import { useEffect, useState } from "react"
import "../styles/modal.css"



export default function Modal( ) {

    const [showModal, setShowModal] = useState(false)

useEffect(()=>{
    setShowModal(true)
},[])


  return (
    <div className="modal"   >
{showModal && <div className="styleModal">
<h1  className="modalTitle" >WAARSCHUWING!</h1>
<p className="modalP" >
Dit is geen website waar je leert hoe je een gerecht klaarmaakt. <br/> 
Het is gewoon een ideeënapp voor mensen die elke dag weer de stress ervaren:

</p>
<h2  className="modalTitle"  >Wat eten we vandaag? </h2> 
<button className="modalB" onClick={(e)=>{
    e.preventDefault()
    setShowModal(false)}} >
    Ok, ik heb het begrepen...
</button>

    </div>}







    </div>
  )
}
