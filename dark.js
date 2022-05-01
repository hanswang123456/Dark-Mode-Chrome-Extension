(function(){
    document.querySelector('html').style.filter = "invert(1) hue-rotate(180deg)";

    let med = document.querySelectorAll("img, picture, video");
    
    med.forEach((mediaItem) =>{
        mediaItem.style.filter = "invert(1) hue-rotate(180deg)";
    })
})();


