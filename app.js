const numberButtons = document.querySelectorAll('.numbers');
const inputBox = document.querySelector('.input-box');
const clearButton = document.getElementById('clear')
const operators = document.querySelectorAll('.operator')
const decimalPoint = document.getElementById('decimal')
const emptyContent = '';
inputBox.textContent = emptyContent;


numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        button.classList.add('btn-clicked')
        let content = button.textContent
        inputBox.value += content + ' '
    })
})

clearButton.addEventListener('click', () => {
    inputBox.value = emptyContent
    clearButton.classList.add('btn-clicked')

})


operators.forEach(operator => {
    operator.addEventListener('click', () => {
        operator.classList.add('btn-clicked')
        let content = operator.textContent
        inputBox.value += content + ' '
    })
})

decimalPoint.addEventListener('click', () => {
    decimalPoint.classList.add('btn-clicked')
    let content = decimalPoint.textContent
    inputBox.value += content
})