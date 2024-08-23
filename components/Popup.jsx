import { popup_pos, root } from '../ext-main'
import { injectReact } from '../scripts/ext-qol'
import '../styles/Popup.css'
import GenMenu from './GenMenu.jsx'

export default function Popup({props}){ //props: {startx, starty}
    
    const openGenMenu = () => {
        injectReact(GenMenu, root, {startx:popup_pos.x,starty:popup_pos.y})
    }

    return(
        <div className="popup" style={{left:props.startx,top:props.starty}}>
            <button onClick={openGenMenu}>Generate with AI?</button>
        </div>
    )
}