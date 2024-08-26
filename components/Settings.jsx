import { useState } from "react";
import { sendMessage } from "../scripts/ext-qol";

export default function Settings({props}){
    const [popup_visible, set_visible] = useState(false);
    
    const togglePopup = (event) => {
        set_visible(!popup_visible)
        sendMessage({message:"toggle_popup", popup_visible: !popup_visible })
    }

    return(
        <>
            <label>
                <input
                type="checkbox"
                checked={popup_visible}
                onChange={togglePopup}
                />
                <span>{popup_visible ? 'Hide Popup' : 'Show Popup'}</span>
            </label>
        </>
    )
}