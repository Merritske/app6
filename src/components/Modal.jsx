
import { useEffect, useState } from "react"

const modal={
   
     position: "absolute",
   top: 230,
  zIndex: 150,
  width:"100%"
}

const styleModal={
    color: "rgb(37, 180, 199)",
    backgroundColor: "rgb(6, 6, 124)",
   display: "blok",  
marginLeft: "auto" ,
 marginRight: "auto",
    padding:50
}
 const modalTitle = {
margin: 30,
fontSize: 50,
 color: "rgb(120,20,180)"
   }
   const modalP = {
       fontSize: 20,
       padding: 10,
   }
const modalB={
    backgroundColor: "rgb(37, 180, 199)",
   color: "rgb(6, 6, 124)",
    fontSize: 25,
    padding: "20px 30px",
    borderRadius: 10,

}


export default function Modal( ) {

    const [showModal, setShowModal] = useState(false)

useEffect(()=>{
    setShowModal(true)
},[])


  return (
    <div style={modal}   >
{showModal && <div style={styleModal}>
<h1  style={modalTitle} >WAARSCHUWING!</h1>
<p style={modalP} >
Dit is geen website waar je leert hoe je een gerecht klaarmaakt. <br/> 
Het is gewoon een ideeënapp voor mensen die elke dag weer de stress ervaren:
<h2 style={modalTitle}  >Wat eten we vandaag? </h2> 
</p>
<button style={modalB} onClick={(e)=>{
    e.preventDefault()
    setShowModal(false)}} >
    Ok, ik heb het begrepen...
</button>

    </div>}







    </div>
  )
}
