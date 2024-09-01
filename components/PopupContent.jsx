import { useState } from "react"
import GenMenu from "./GenMenu.jsx"

export default function PopupContent({setPos, getPos, setClasses}){
    
    const [content, setContent] = useState("default")

    const openGenMenu = () => {
        let pos = getPos()
        if (pos.y < 300){
            setClasses("popup top poop")
            setPos(pos.x, pos.y + 20 + 10)
        }
        else if (pos.y < 450){
            //setPos(pos.x, pos.y + 20 + 10 + 150)
        }
        setContent("generate")
    }

    const goBack = () => {
        setContent("default")
    }

    switch (content){
        case "generate":
            return(
                <GenMenu back = {goBack}/>
            )
        default:
            return(
                <button onClick={openGenMenu}>Generate with AI?</button>
            )
    }
}