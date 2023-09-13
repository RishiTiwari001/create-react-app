import "./App.css";
import { useEffect } from 'react';
export default function IndexPage() {
  useEffect(() => {
    console.log('heyyaaa');
    // window.webkit.messageHandlers.bridge.postMessage("data");
  //  window.Android.mobileLoginForCaptchaResponse("token");
    window.addEventListener("flutterInAppWebViewPlatformReady", function(event) {
            console.log("ready");

            var div = document.body.querySelector('div');
            div.addEventListener('click', function() {
                window.flutter_inappwebview.callHandler('handleData', 1, true, ['bar', 5], {foo: 'baz'});
            });
        });
  },[]);
  return <div>Hello World Update</div>;
}
