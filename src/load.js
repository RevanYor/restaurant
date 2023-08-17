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

export { load };