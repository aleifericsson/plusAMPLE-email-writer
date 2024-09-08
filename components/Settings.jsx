import { useState } from "react";
import { sendMessage } from "../scripts/ext-qol";
import Cookies from "js-cookie";
import '../styles/Settings.css'

export default function Settings({init_scanning}){
    const [scanning, set_scanning] = useState(init_scanning);
    
    const toggleScanning = (event) => {
        set_scanning(!scanning)
        sendMessage({message:"toggle_scanning", scanning: !scanning })
        Cookies.set("init_scanning", (!scanning).toString())
    }

    return(
        <>
            <div className="settings-header">
                <img className="logo" src={ chrome.runtime.getURL('images/plusAmple-white.png')}></img>
                <span className="settings-title">Settings</span>
            </div>
            <div className="toggle-box">
                <input
                    type="checkbox"
                    id="scan"
                    className="checkbox"
                    checked={scanning}
                    onChange={toggleScanning}
                />                
                <label className="switch" for="scan"></label>
                <div>Scan for textboxes on this site?</div>
            </div>
        </>
    )
}