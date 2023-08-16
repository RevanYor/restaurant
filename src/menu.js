
function menu() {
    let content = document.querySelector('#content');

    let soda = document.createElement('h1');
    soda.innerText = 'Sodas';
    content.appendChild(soda);

    let text = document.createElement('p');
    text.innerText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum justo sem, consequat vel suscipit eget, congue nec dui. Donec aliquam.';
    content.appendChild(text);
}

export {menu};