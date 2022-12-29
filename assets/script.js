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



let i = 0;
let testme = 0;
let slideCount = slides.length;


function btnClick2() {

    if (i < slideCount) {
        i++;
        let bgImage = slides[i].image;
        banner_img = document.querySelector(".bannerImg").setAttribute("src", "assets/images/slideshow/" + bgImage);
        let slideTextNo = slides[i].tagLine;
        let slidetext = document.getElementById('slidetext').innerHTML = slideTextNo;
    }
    if (i >= slideCount) {
        i = -1;
    }
}

console.log(testme);




function btnClick1() {
    if (i >= 0) {
        i--;
        let bgImage = slides[i].image;
        banner_img = document.querySelector(".bannerImg").setAttribute("src", "assets/images/slideshow/" + bgImage);
        let slideTextNo = slides[i].tagLine;
        let slidetext = document.getElementById('slidetext').innerHTML = slideTextNo;
    }
}








const btnRight = document.getElementById('btn68');

btnRight.addEventListener('click', btnClick2);

const btnLeft = document.getElementById('btn69');
btnLeft.addEventListener('click', btnClick1);


/*

banner_img = document.querySelector(".bannerImg").setAttribute("src", "assets/images/slideshow/slide + bgImage.jpg");

function btnClick() {
    banner_img = document.querySelector(".bannerImg").setAttribute("src", "assets/images/slideshow/slide2.jpg");
}

btnLeft.addEventListener('click', btnClick);

function btnClick2() {
    banner_img = document.querySelector(".bannerImg").setAttribute("src", "assets/images/slideshow/slide1.jpg");
}

btnRight = document.querySelector(".arrow_left");

btnRight.addEventListener('click', btnClick2);
*/