const slides = [{
        "image": "slide1.jpg",
        "tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
    },
    {
        "image": "slide2.jpg",
        "tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
    },
    {
        "image": "slide3.jpg",
        "tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
    },
    {
        "image": "slide4.png",
        "tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
    }
]

const btnLeft = document.getElementById('btn68');

btnLeft.addEventListener('click', btnClick);

banner_img = document.querySelector(".bannerImg").setAttribute("src", "/assets/images/slideshow/slide1.jpg");

function btnClick() {
    banner_img = document.querySelector(".bannerImg").setAttribute("src", "/assets/images/slideshow/slide2.jpg");
}

btnLeft.addEventListener('click', btnClick);

function btnClick2() {
    banner_img = document.querySelector(".bannerImg").setAttribute("src", "/assets/images/slideshow/slide1.jpg");
}

btnRight = document.querySelector(".arrow_left");

btnRight.addEventListener('click', btnClick2);