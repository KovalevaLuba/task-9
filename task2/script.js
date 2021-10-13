const consoleLog = document.querySelector('#consoleLog');
consoleLog.addEventListener('click', () => {
  
    alert('Служит для вывода информации в консоль');
}) 


const alertEvent = document.querySelector('#alert');
alertEvent.addEventListener('click', () => {
    alert('Служит для вывода информации в диалоговое окно');
})


const promptEvent = document.querySelector('#prompt');
promptEvent.addEventListener('click', () => {
    alert('Служит для ввода информации через диалоговое окно');
})