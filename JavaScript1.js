const yesbtn = document.querySelector('#yesbtn');

yesbtn.addEventListener('click', function () {
    alert('Sabia que no te ibas a negar  shiquito 7u7r');

});

const nobtn = document.querySelector('#nobtn');

nobtn.addEventListener('mouseover', function () {
    const randomx = parseInt(Math.random() * 90);
    const randomy = parseInt(Math.random() * 100);
    nobtn.style.setProperty('top', randomy + '%');
    nobtn.style.setProperty('left', randomx + '%');
    nobtn.style.setProperty('transform', `translate(-${randomX}%,-${randomY}%)`);
})