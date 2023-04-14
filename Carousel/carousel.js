const CAROUSEL_IMG = document.querySelector(".carousel__image")
const CAROUSEL_FORWARD = document.querySelector(".carousel__forwardButton")
const CAROUSEL_BACK = document.querySelector(".carousel__backButton")
const IMAGES = ["./Images/Mig.jpg", "./Images/Mig2.jpg", "./Images/Mig3.jpg", "./Images/Mig4.jpg", "./Images/Mig5.jpg"]

var index = 0
CAROUSEL_IMG.src = IMAGES[index]


CAROUSEL_FORWARD.addEventListener("click", shuffleForward)
CAROUSEL_BACK.addEventListener("click", shuffleBack)
CAROUSEL_IMG.addEventListener('animationend', animEnd)


function shuffleForward(event) {
    index++
    if (index == IMAGES.length - 1) { index = 0 }
    
    CAROUSEL_IMG.classList.add('animate__fadeOutRight')
}

function shuffleBack(event) {
    index--
    if (index < 0) {
        index = IMAGES.length - 1;
        CAROUSEL_IMG.src = IMAGES[index]
    }

    CAROUSEL_IMG.classList.add('animate__fadeOutLeft')
}


function animEnd(anim) {
    CAROUSEL_IMG.classList.remove(CAROUSEL_IMG.classList[3])
    CAROUSEL_IMG.classList.remove(CAROUSEL_IMG.classList[2])

    setTimeout(() => {
        CAROUSEL_IMG.src = IMAGES[index]
    }, 1);

    if (anim.animationName == 'fadeOutRight') {
        CAROUSEL_IMG.classList.add('animate__fadeInLeft')
    } else if (anim.animationName == 'fadeOutLeft') {
        CAROUSEL_IMG.classList.add('animate__fadeInRight')
    }
}