function contact() {
    let content = document.querySelector('#content');

    let title = document.createElement('h1');
    title.innerText = 'Contact us!!';
    content.appendChild(title);

    let image = document.createElement('img');
    image.src = '/src/diner.png';
    content.appendChild(image);
}

export { contact };