

//is dark mode turned on
let turnOn = false;

//when user use popup
if(document.querySelector(".popup")){
  //sounds
  var open = new Audio("open.wav");
  var close = new Audio("close.mp3");
  //get popup elements with query selector
  const button = document.querySelector(".button");
  const circle = document.querySelector(".circle");
  
  //check to see if localstorage has mode key
  //this will then set the toggle animation to the appropriate side
  if(window.localStorage.getItem("mode") == "dark"){
    turnOn = true;
    circle.style.animation = "toggle 0s forwards"
    button.style.animation = "toggleBG 0s forwards"
  }
  else{//light mode
    turnOn == false;
    circle.style.animation = "untoggle 0s forwards"
    button.style.animation = "untoggleBG 0s forwards"
  }

  //add listner to button click (user changing modes)
  button.addEventListener('click', ()=>{
    //if dark mode is currently off, start darkmode, run scripts, play sound.
  if(!turnOn){
    open.play();
  turnOn = true;
  circle.style.animation = "toggle 1s forwards"
  button.style.animation = "toggleBG 1s forwards"
  window.localStorage.setItem("mode", "dark");
  chrome.tabs.executeScript(
    {file:"dark.js"}
  );
  }
  else{
    //turning off dark mode
    close.play();
    turnOn = false;
    circle.style.animation = "untoggle 1s forwards"
    button.style.animation = "untoggleBG 1s forwards"
    window.localStorage.setItem("mode", "light");
    chrome.tabs.executeScript(
      {file:"light.js"}
    );
  }
  });
}

//catch event of user switching to other opened tabs and update to dark mode/light Mode
chrome.tabs.onActivated.addListener(()=>{
  //activate dark mode
  if(window.localStorage.getItem("mode") == "dark"){
    turnOn = true;
    chrome.tabs.executeScript(
      {file:"dark.js"}
    );
  }
  //light mode
  else{
    turnOn = false;
    chrome.tabs.executeScript(
      {file:"light.js"}
    );
  }
});

//catch event of user opening new tabs and update to dark mode/light mode
chrome.tabs.onUpdated.addListener(()=>{
  //activate dark mode
  if(window.localStorage.getItem("mode") == "dark"){
    turnOn = true;
    chrome.tabs.executeScript(
      {file:"dark.js"}
    );
  }
  //light mode
  else{
    turnOn = false;
    chrome.tabs.executeScript(
      {file:"light.js"}
    );
  }
});
