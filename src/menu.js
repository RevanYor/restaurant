import { load } from './load'
import { contact } from './contact';

function menu() {
    let content = document.querySelector('#content');

    let soda = document.createElement('h1');
    soda.innerText = 'Sodas';
    content.appendChild(soda);

    let text = document.createElement('p');
    text.innerText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum justo sem, consequat vel suscipit eget, congue nec dui. Donec aliquam.';
    content.appendChild(text);

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

export {menu};