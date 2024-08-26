import { useState } from "react"
import GenMenu from "./GenMenu.jsx"

export default function PopupContent(){
    
    const [content, setContent] = useState("default")

    const openGenMenu = () => {
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