let text = document.getElementById('text');
let logo = document.getElementById('logo');
let bild = document.getElementById('bild1');

window.addEventListener('scroll', () => {	
    let value = window.scrollY;

    text.style.marginTop = value * 2.5 + 'px';
    bild.style.top = value * -1.5 + 'px';
});
