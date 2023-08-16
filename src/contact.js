import { load } from './load'
import { menu } from './menu';

function contact() {
    let content = document.querySelector('#content');

    let title = document.createElement('h1');
    title.innerText = 'Contact us!!';
    content.appendChild(title);

    let image = document.createElement('img');
    image.src = '/src/diner.png';
    content.appendChild(image);

    //Buttons
    let home = document.createElement('button');
    home.classList.add('home');
    home.innerText = 'Home';
    content.appendChild(home);

    let menu = document.createElement('button');
    menu.classList.add('menu');
    menu.innerText = 'Menu';
    content.appendChild(menu);

    let contact = document.createElement('button');
    contact.classList.add('contact');
    contact.innerText = 'contact';
    content.appendChild(contact);

    let homeB = document.querySelector('.home');
let menuB = document.querySelector('.menu');
let contactB = document.querySelector('.contact');

menuB.addEventListener('click', () => {
    let content = document.querySelector('#content');
    content.innerHTML = '';
    menu;
});
contactB.addEventListener('click', () => {
    let content = document.querySelector('#content');
    content.innerHTML = '';
    contact;
});


homeB.addEventListener('click', () => {
    let content = document.querySelector('#content');
    content.innerHTML = '';
    load;
});
}

export { contact };