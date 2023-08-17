function butts() {
    let content = document.querySelector('#content');
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

function tabs() {
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
}

export {butts, tabs};