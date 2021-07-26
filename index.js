// $(document).ready(function() {
//     $(`#toggle`).click(function(){
//         $(`#main-menu-second`).slideToggle();
//         alert('ao that day');
//     });
// })
let a = document.querySelector("#main-menu-second");
let b = document.querySelector("#carouselExampleControls");
let c = document.querySelector("#container-text-hr");
let d = document.querySelector("#container-card");
let h = document.querySelector("#nav-overlay");

function toggle() {
    a.style.display = "block";
    b.style.display = "none";
    c.style.display = "none";
    d.style.marginTop = "500px"
    h.style.display = "block";

}
// function clickout() {
//     alert("dduocj ròi nè");
// } 
function out() {
    a.style.display = "none";
    b.style.display = "block";
    c.style.display = "block";
    d.style.marginTop = "0px"
    h.style.display = "none";
}