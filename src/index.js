import { load } from './load'
import { menu } from './menu';
import { contact } from './contact';
import { butts, tabs } from './butts';

console.log("This is working!")
load();

let homeB = document.querySelector('.home');
let menuB = document.querySelector('.menu');
let contactB = document.querySelector('.contact');

menuB.addEventListener('click', () => {
    let content = document.querySelector('#content');
    content.innerHTML = '';
    menu();
});
contactB.addEventListener('click', () => {
    let content = document.querySelector('#content');
    content.innerHTML = '';
    contact();
});
homeB.addEventListener('click', () => {
    let content = document.querySelector('#content');
    content.innerHTML = '';
    load();
});