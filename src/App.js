import React from "react";
import "./App.css";
import { useEffect } from "react";
export default function IndexPage() {
  console.log("heyyaaa");
  // window.webkit.messageHandlers.bridge.postMessage("data");
  //  window.Android.mobileLoginForCaptchaResponse("token");
  useEffect(() => {
    console.log("heyyaaa");
    // window.webkit.messageHandlers.bridge.postMessage("data");
    window.Event.postMessage("Hello from ParkPlus Hitesh Dalla");
        window.Event2.postMessage("Hello from ParkPlus Saurabh Dalla");

        window.Event3.postMessage("Hello from ParkPlus Hitesh Dalla");

        window.Event4.postMessage("Hello from ParkPlus Saurabh Dalla");

    window.Event = new Event("event");
    

    window.addEventListener(
      "event",
      function () {
        // something is performed
      },
      true
    );
    window.Android.handleFoo("event");

    window.postMessage('{"myEvent": true}');
  }, []);

  return <div>Hello World Update</div>;
}
