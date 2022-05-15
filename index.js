let leftbtn =document.getElementById("leftbtn");
let rightbtn =document.getElementById("rightbtn");
let imgtargeting =document.getElementsById("img");

// leftbtn.addEventListener("click",function() {
//    leftbtn.style.height="1000px";





// });
function myFunction() {
    // Code for Chrome, Safari, Opera
    document.getElementById("leftbtn").style.WebkitTransform = "rotate(20deg)"; 
    // Code for IE9
    document.getElementById("myDIV").style.msTransform = "rotate(20deg)"; 
    // Standard syntax
    document.getElementById("myDIV").style.transform = "rotate(20deg)"; 
}