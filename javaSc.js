//accordion
let accordion = document.getElementsByClassName('accordion__item');
let i;

for (i = 0; i < accordion.length; i++) {
    accordion[i].onclick = function () {
        this.classList.toggle("active");

        this.nextElementSibling.classList.toggle("show");
    }
};


//slider
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n)
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("customersSlides");
    let dots = document.getElementsByClassName("dot");

    if (n >slides.length) {
        slideIndex = 1
    }
    if (n < 1){
        slideIndex=slides.length
    }
    for (i = 0; i <slides.length; i++){
slides[i].style.display= "none"
    }
    for (i = 0; i < dots.length; i++){
        dots[i].className= dots[i].className.replace("actives","")
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className = " actives";
}