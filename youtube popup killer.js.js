// ==UserScript==
// @name         youtube popup killer
// @namespace    http://tampermonkey.net/
// @version      0.5
// @description  try to take over the world!
// @author       Pass the hash (original code written by Selbereth)
// @match        https://*.youtube.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=youtube.com
// @grant        none
// ==/UserScript==


(function () {
  window.debug = true;
  if (debug) console.log("started");
  var event_type = 0;
  var toggle = false;
  const video = document.querySelectorAll(".video-stream")[0];
  const container = document.querySelectorAll(".ytp-unmute")[0];
  /*container.addEventListener("click", function(){
      console.log(toggle)
      if (!toggle) {
        event_type = 2;
      } else {
        event_type = 1;
      }
      toggle = !toggle;

      //toggle = true;
  });*/
  pauseFind().addEventListener("click", function(){
      console.log(toggle)
      if (!toggle) {
        event_type = 2;
      } else {
        event_type = 1;
      }
      toggle = !toggle;

      //toggle = true;
  });
  console.log(container);
  console.log(video);
  setInterval(() => {
     //event_type = 1;
     //console.log(flag);
    if (!!popupFind()) {
      removePopup();
      if (debug) console.log("remove popup");

      //playVideo();
      //if (video.paused) video.play();
      //if (debug) console.log("done ");
    }
    /*if (video.paused && ( event_type == 0 || event_type == 1 ) ){
        video.play();
        console.log("unpaused");
    }*/
  }, 500);
  setInterval(() => {

    if (video.paused && ( event_type == 0 || event_type == 1 ) ){
        video.play();
        console.log("unpaused");
    }
  }, 500);
})();

function popupFind() {
  return document.querySelector("body > ytd-app > ytd-popup-container");
}
function pauseFind(){
  return document.querySelector("#movie_player > div.ytp-chrome-bottom > div.ytp-chrome-controls > div.ytp-left-controls > button");
}

function removePopup(){
    var popup = popupFind();
    //console.log(popup);
    //setTimeout(playVideo, 1300);
    popup.parentNode.removeChild(popup);
}

/*function playVideo(){
    if (video.paused) video.play();
    //console.log(video);
    if (debug) console.log("resume video");
}*/