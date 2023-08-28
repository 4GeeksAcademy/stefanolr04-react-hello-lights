import React from "react"
import "./trafficLight.css"
import {useState} from "react"

const Trafficlight = () => {

    const [color, setcolor] = useState("")

    return (
    <>
        <div style={{display: "flex" , justifyContent: "center"}}>
         <div style={{backgroundColor : "black" , width : "20px" , height : "300px"  }}></div>
        </div>
        <div style={{backgroundColor : "black" , width : "300px" , height: "650px" , display: "flex" , justifyContent: "space-around", alignItems: "center",  flexDirection : "column" , borderRadius: "15px"}}>
            <div onClick={()=>setcolor("green")} className={color == "green" ? "lightGreen" : ""} style={{backgroundColor : "green" , width: "200px" , height: "200px" , borderRadius: "50%"}}></div>
            <div onClick={()=>setcolor("yellow")} className={color == "yellow" ? "lightYellow" : ""} style={{backgroundColor : "yellow" , width: "200px" , height: "200px" , borderRadius: "50%"}}></div>
            <div onClick={()=>setcolor("red")} className={color == "red" ? "lightRed" : ""} style={{backgroundColor : "red" , width: "200px" , height: "200px" , borderRadius: "50%"}}></div>

        </div>

    </>
    )
}

export default Trafficlight