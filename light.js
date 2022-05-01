(function(){
    document.querySelector('html').style.filter = "invert(0) hue-rotate(0deg)";

    let med = document.querySelectorAll("img, picture, video");
    
    med.forEach((mediaItem) =>{
        mediaItem.style.filter = "invert(0) hue-rotate(0deg)";
    })
})();


