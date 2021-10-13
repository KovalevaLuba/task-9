const link = document.querySelector('#link');

link.addEventListener('click', function (event) {
    console.log('lalaa')
    event.preventDefault();
    newLink = prompt('Введите другой текст ссылки')
    link.innerText = newLink
    
})