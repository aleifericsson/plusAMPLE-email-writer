//ONSCREEN POPUP NOT THE SETTINGS POPUP

import { popup_pos, root } from '../main-ext.js'
import { injectReact, removeReact } from '../scripts/ext-qol'
import '../styles/Popup.css'
import PopupContent from './PopupContent.jsx'

export default function Popup({props}){ //props: {startx, starty}

    const closePopup = () =>{
        removeReact()
    }

    return(
        <div className="popup" style={{left:props.startx,top:props.starty}}>
            <div className="top-bar">
                <img className="close-icon" onClick={closePopup} src={ chrome.runtime.getURL('images/close.png')}></img>
            </div>
            <div className='popup-content'>
                <PopupContent />
            </div>
        </div>
    )
}