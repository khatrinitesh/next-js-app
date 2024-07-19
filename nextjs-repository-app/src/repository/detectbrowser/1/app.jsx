import React,{useEffect} from "react";
import './style.css';

const CustomApp = () => {
    useEffect(() => {
        const ua = navigator.userAgent.match(/(opera|chrome|safari|firefox|msie)\/?\s*(\.?\d+(\.\d+)*)/i);
        let browser;
        if (navigator.userAgent.match(/Edge/i) || navigator.userAgent.match(/Trident.*rv[ :]*11\./i)) {
            browser = "msie";
        } else {
            browser = ua[1].toLowerCase();
        }
        const icon = document.querySelector(`div.icon.${browser}`);
        if (icon) {
            icon.classList.add("active");
        }
    }, []); // Empty dependency array to run the effect only once on mount
  return (
    <>
    <div class="container">
        <div class="icon chrome"></div>
        <div class="icon safari"></div>
        <div class="icon firefox"></div>
        <div class="icon msie"></div>
      </div>
    </>
  );
};

export default CustomApp;
