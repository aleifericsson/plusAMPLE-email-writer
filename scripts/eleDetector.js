import Popup from "../components/Popup.jsx";
import { root } from "../main-ext";
import { injectReact, removeReact } from "./ext-qol";
import { find, getElePos, getMousePos } from "./qol.js";

let textbox_list = []
let popup_pos = {x: 300, y: 500}
let overPopup = false
let popup = null

const detectTextboxes = () =>{
    const textboxes = document.querySelectorAll('[contenteditable="true"]');
    textboxes.forEach((textbox)=>{   
        if (!textbox_list.includes(textbox)){
            textbox_list.push(textbox)
            textbox.addEventListener("focus", showPopup)
            textbox.addEventListener("blur", removePopup)
        }
    })
}

const onPopup = () =>{
    overPopup = true
    console.log(overPopup)
}

const offPopup = () =>{
    overPopup = false
    console.log(overPopup)
}

const showPopup = (e) => {
    popup_pos = getElePos(e.target)
    if (popup_pos.x < 150){
        popup_pos.x = 150
    }
    popup_pos.y -= 20
    injectReact(Popup, root,{startx:popup_pos.x,starty:popup_pos.y})
    setTimeout( () => {
        popup = find(".popup")
        popup.addEventListener("mouseover", onPopup)
        popup.addEventListener("mouseout", offPopup)
    }, 100)
}

const removePopup = (e) => {
    console.log(e.relatedTarget)
    if (overPopup){

    }
    else{
        removeReact()
        popup = null
    }
}

window.addEventListener('click', function(e){  
    if(popup){
        if (!overPopup){
            removeReact()
            popup = null
        }
    } 
  });

export {textbox_list, detectTextboxes, popup_pos}