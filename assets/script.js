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
let slideCount = slides.length;

const removeAllDots = () => {
    document.querySelectorAll(".dot").forEach((element) => {
        element.classList.remove('dot_selected');
    })
};

function addDot(i) {
    let dot = document.getElementsByClassName("dot")[i];
    dot.classList.add("dot_selected");
}

function addImg() {
    let bgImage = slides[i].image;
    banner_img = document.querySelector(".bannerImg").setAttribute("src", "assets/images/slideshow/" + bgImage);
}

function addText() {
    let slideTextNo = slides[i].tagLine;
    document.getElementById('slidetext').innerHTML = slideTextNo;
}


function nextSlide() {
    if (i === slideCount - 1) {
        i = 0;
    } else {
        i++;
    }
    addText();
    addImg();
    removeAllDots();
    addDot(i);
}

function previousSlide() {
    if (i === 0) {
        i = slideCount - 1;
    } else {
        i--;
    }
    addText();
    addImg();
    removeAllDots();
    addDot(i);
}

const btnRight = document.getElementById('btn68');
btnRight.addEventListener('click', nextSlide);

const btnLeft = document.getElementById('btn69');
btnLeft.addEventListener('click', previousSlide);


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