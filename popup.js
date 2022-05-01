if(document.querySelector(".popup")){
  var open = new Audio("open.wav");
  var close = new Audio("close.mp3");
  const button = document.querySelector(".button");
  const circle = document.querySelector(".circle");
  
  let turnOn = false;
  
  button.addEventListener('click', ()=>{
  if(!turnOn){
    open.play();
  turnOn = true;
  circle.style.animation = "toggle 1s forwards"
  button.style.animation = "toggleBG 1s forwards"
  chrome.tabs.executeScript(
    {file:"dark.js"}
  );
  }
  else{
    close.play();
    turnOn = false;
    circle.style.animation = "untoggle 1s forwards"
    button.style.animation = "untoggleBG 1s forwards"
    chrome.tabs.executeScript(
      {file:"light.js"}
    );
  }
  });
}