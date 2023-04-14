const DIV = document.querySelector(".animationDiv")
const BUTTON = document.querySelector(".button")

BUTTON.addEventListener("click",mover)

function mover(event){
    if(DIV.classList.contains("animationDiv--moved")){
        DIV.classList.remove("animationDiv--moved")
    } else{
        DIV.classList.add("animationDiv--moved")
    }
}