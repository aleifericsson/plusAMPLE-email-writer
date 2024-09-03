import { create, render, style, write } from "./scripts/qol.js";
import App from './components/App.jsx';
import { generateRoot, injectReact, removeReact } from "./scripts/ext-qol.js";
import Popup from "./components/Popup.jsx";
import './styles/Root.css'
import { detectTextboxes, popup_pos, undetectTextboxes } from "./scripts/eleDetector.js";
import Cookies from "js-cookie";

const root = generateRoot()
render(document.body, root)
let intervalID
if (Cookies.get("scanning")){
    if(Cookies.get("scanning") === "true"){
        intervalID = setInterval(detectTextboxes, 500)
    }
}
else{
    intervalID = setInterval(detectTextboxes, 500)
}

chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
    if (message.message == "toggle_scanning"){ //{message, scanning}
        if(message.scanning){
            if (intervalID){
                clearInterval(intervalID)
            }
            intervalID = setInterval(detectTextboxes, 500)
            Cookies.set("scanning", "true")
        }
        else{
            clearInterval(intervalID)
            intervalID = null
            removeReact()
            undetectTextboxes()
            Cookies.set("scanning", "false")
        }
    }
});

export {root}