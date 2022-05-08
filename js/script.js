const hiro = document.querySelector('.bgHiro');
const segitiga = document.querySelector('img.polygon');
const persegi = document.querySelector('img.Rectangle');
const maskGroup = document.querySelector('img.maskGroup');

hiro.addEventListener('mouseenter' , function () {
    segitiga.classList.toggle('kebawah');
    persegi.classList.toggle('naik');
});
hiro.addEventListener('mouseleave' , function () {
    segitiga.classList.remove('kebawah');
    segitiga.classList.toggle('keatas');
    persegi.classList.replace('naik', 'turun');
    
});

maskGroup.addEventListener('mouseenter', function () {
    maskGroup.classList.toggle('bawahaja');
});
maskGroup.addEventListener('mouseleave', function () {
    maskGroup.classList.remove('bahwahaja');
    maskGroup.classList.toggle('atasaja');
});