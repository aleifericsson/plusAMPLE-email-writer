//ONSCREEN POPUP NOT THE SETTINGS POPUP

import { useState } from 'react'
import { injectReact, removeReact } from '../scripts/ext-qol'
import '../styles/Popup.css'
import PopupContent from './PopupContent.jsx'

export default function Popup({props}){ //props: {startx, starty}

    const [x, setX] = useState(props.startx)
    const [y, setY] = useState(props.starty)
    const [classes, setClasses] = useState("popup")

    const closePopup = () =>{
        removeReact()
    }

    const setPos = (x,y) => {
        setX(x)
        setY(y)
    }

    const getPos = () => {
        return {x, y}
    }


    return(
        <div className={classes}style={{left:x,top:y}}>
            <div className="top-bar">
                <img className="close-icon" onClick={closePopup} src={ chrome.runtime.getURL('images/close.png')}></img>
            </div>
            <div className='popup-content'>
                <PopupContent setPos={setPos} getPos = {getPos} setClasses={setClasses} />
            </div>
        </div>
    )
}