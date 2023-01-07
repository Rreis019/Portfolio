

document.addEventListener("mousemove",(e) =>{
    var cornea = document.querySelector(".cornea img");
    const mouseX = e.x;
    const mouseY = e.y;


    var corneaX = cornea.getBoundingClientRect().x + (cornea.getBoundingClientRect().width/2);
    var corneaY = cornea.getBoundingClientRect().y + (cornea.getBoundingClientRect().height/2);

    var angleDeg = (Math.atan2(corneaX - mouseX,corneaY - mouseY) * 180 / Math.PI);
    angleDeg*=-1;
    angleDeg+=180;
    cornea.style.transform = "rotate(" + (angleDeg-90) + "deg)";
   
})
