let nextDom = document.getElementById("next");
let prevDom = document.getElementById("prev");
let carouselDom = document.querySelector(".carousel");
let listItemDom = document.querySelector(".carousel .list");
let thumbnailDom = document.querySelector(".carousel .thumbnail");

nextDom.onclick = function () {
    showSlider('next');
};
prevDom.onclick = function () {
    showSlider('prev');
};

let timeRunning = 3000;
let runTimeOut;

function showSlider(type) {
    let items = document.querySelectorAll(".carousel .list .item");
    let thumbnails = document.querySelectorAll(".carousel .thumbnail .item");

    // Remove old transition classes
    carouselDom.classList.remove('next', 'prev');

    if (type === 'next') {
        // Move first item to the end
        listItemDom.appendChild(items[0]);
        thumbnailDom.appendChild(thumbnails[0]);
        carouselDom.classList.add('next');
    } else {
        // Move last item to the beginning
        listItemDom.prepend(items[items.length - 1]);
        thumbnailDom.prepend(thumbnails[thumbnails.length - 1]);
        carouselDom.classList.add('prev');
    }

    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() => {
        carouselDom.classList.remove('next', 'prev');
    }, timeRunning);
}
