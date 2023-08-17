import { menu } from "./menu";
import { load } from "./load";


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
}
 let home = document.querySelector('.home');
 home.addEventListener('click', load);
 let menuB = document.querySelector('.menu');
 menuB.addEventListener('click', menu);


export { contact };