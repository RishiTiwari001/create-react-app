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
    window.JS.postMessage("Hello from JS");

    window.JS = new JS("event");

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
