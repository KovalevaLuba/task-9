const link = document.querySelector('#link');

link.addEventListener('click', function (event) {
    event.preventDefault();
    newLink = prompt('Введите другой текст ссылки')
    if (newLink == false) newLink = "Попробуйте еще раз"
    link.innerText = newLink
})