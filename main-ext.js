import { create, render, style, write } from "./scripts/qol.js";
import App from './components/App.jsx';
import { generateRoot, injectReact, removeReact } from "./scripts/ext-qol.js";
import Popup from "./components/Popup.jsx";
import './styles/Root.css'

const root = generateRoot()
render(document.body, root)
let popup_pos = {x: 300, y: 500}

chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
    if (message.message == "toggle_popup"){ //{message, popup_visible}
        if(message.popup_visible){
            injectReact(Popup, root,{startx:popup_pos.x,starty:popup_pos.y})
        }
        else{
            removeReact()
        }
    }
});

export {root, popup_pos}