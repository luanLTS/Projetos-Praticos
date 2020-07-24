var slideItem = 0;
console.log(slideItem);
window.onload = function() {
    setInterval(passarSlide, 3000);
    
    var slideShowWidth = document.getElementById("slideshow").offsetWidth;
    console.log(slideShowWidth);
    var slide = document.getElementsByClassName("slide");
    console.log(slide);
    for(var i = 0; i < slide.length; i++) {
        slide[i].style.width = slideShowWidth+"px";
        console.log(i);
    }
}

function passarSlide() {
    var slideShowWidth = document.getElementById("slideshow").offsetWidth;
    console.log(slideShowWidth);
    if (slideItem >= 2) {
        slideItem = 0;
        console.log(slideItem);
    } else {
        slideItem++;
        console.log(slideItem);
    }
    document.getElementsByClassName("slideshowarea")[0].style.marginLeft = "-"+(slideShowWidth * slideItem)+"px";
}