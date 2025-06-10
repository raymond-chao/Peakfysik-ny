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
  gsap.to(".nav-logo", {
    rotation: 360,
    duration: 2,
  });
  gsap.from(".nav-button", {
    scale:1.2,
    duration: 2,
    ease: "bounce.out",
  });
  gsap.from(".peak-main-header-title", { x:600, duration: 1,
  });
});

