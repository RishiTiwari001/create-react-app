import React from "react";
import "./App.css";
import { useEffect } from 'react';
export default function IndexPage() {

    console.log('heyyaaa');
    // window.webkit.messageHandlers.bridge.postMessage("data");
  //  window.Android.mobileLoginForCaptchaResponse("token");
   useEffect(() => {
    console.log('heyyaaa');
    // window.webkit.messageHandlers.bridge.postMessage("data");
   window.Android.handlerFoo("token");
       
  window.postMessage('{"myEvent": true}');
    
  },[]);
 
  return <div>Hello World Update</div>;
}
