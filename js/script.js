let logo = document.getElementById('logo');
let bild = document.getElementById('bild1');
let maintext = document.querySelector('maintext');
let title = document.getElementById('title'); // Corrected line

window.addEventListener('scroll', () => {
    let value = window.scrollY;

    //title.style.marginTop = value * 2.5 + 'px'; //
    maintext.style.marginTop = value * 2.5 + 'px';
    bild.style.top = value * -1.5 + 'px';
});

document.addEventListener("DOMContentLoaded", function () {
  gsap.from(".peak-main-logo", { x:900, duration: 1.5,
  });
});

