import { butts } from "./butts";

function load() {
    let content = document.querySelector('#content');

    let title = document.createElement('h1');
    title.innerText = 'Awesome Resturant';
    content.appendChild(title);

    let image = document.createElement('img');
    image.src = '/src/image.jpg';
    content.appendChild(image);

    let text = document.createElement('p');
    text.innerText = 'This resturant is sooooo awesome!!';
    content.appendChild(text);
    
}

export { load };