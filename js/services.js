const nextBtn = document.querySelector('.next-btn');	
const prevBtn = document.querySelector('.prev-btn');
const slides = document.querySelector('.slide');
const numberOfSlides =  slide.length;
let slideNumber = 0;

//slider next button
nextBtn.onClick = () => {
    slideNumber++;
    if (slideNumber >= numberOfSlides) {
        slideNumber = 0;
    }
    updateSlide();
}