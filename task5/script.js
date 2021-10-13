const enteredText = document.getElementById('inputField');
const savedText = document.getElementById('duplicateField');
const button = document.getElementById('button')

enteredText.addEventListener('keyup', function (event) {

savedText.innerText = enteredText.value
event.preventDefault()
})

button.addEventListener('click', function (event) {
console.log(savedText.innerText)
savedText.innerText = ''
enteredText.value = ''
event.preventDefault()
})