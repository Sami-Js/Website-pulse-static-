

new WOW().init();

const $ = (e) => document.querySelector(e);
const navbar = $('.nav-lg');

$('.bars').addEventListener('click' , function () {
navbar.classList.add('nav-md');
});


$('.list .items:first-of-type').addEventListener('click' , function () {navbar.classList.remove('nav-md')})