let kontakta = document.getElementById('kontakta');
let oss = document.getElementById('oss');

window.addEventListener('scroll', () =>{
    let value = window.scrollY;

    kontakta.style.left = value * 1.5 + 'px';
    oss.style.left = value * -1.5 + 'px';
});