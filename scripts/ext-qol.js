import React from 'react';
import ReactDOM from 'react-dom/client';
import { addClass, create, write } from './qol';

let root_render = null

function injectReact(Component, root_ele, props={}) {
    if (!root_render){
      root_render = ReactDOM.createRoot(root_ele)
    }
    root_render.render(
      <React.StrictMode>
        <Component props={props}/>
      </React.StrictMode>
    );
  }

function removeReact(){
  if(root_render){  
    root_render.unmount()
    root_render = null
  }
  else{
    console.log("you stupid")
  }
}

function sendMessage(message){
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.sendMessage(tabs[0].id, message);
});
}

function generateRoot(){  
  const rot = create("div")
  addClass(rot, "react-root")
  return rot
}

export {injectReact, sendMessage, removeReact, generateRoot}