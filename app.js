const numberButtons = document.querySelectorAll('.numbers');
const dataScreen = document.querySelector('.data-screen');
const clearButton = document.getElementById('clear')
const operators = document.querySelectorAll('.operator')
const decimalPoint = document.getElementById('decimal')
const buttons = document.querySelectorAll('.btn')
const equals = document.getElementById('equals')
const emptyContent = '';
let numberOne = ''
let numberTwo = ''
let selectedOperator = ''



//when clicking a number button, the number is added to the data screen and a 'btn-clicked' class is added to flash a border
numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        let content = button.textContent
        dataScreen.textContent += content + ' '
        button.classList.add('btn-clicked')
    })
})

//when clicking on the C button, the data screen clears and the button flashes
clearButton.addEventListener('click', () => {
    dataScreen.textContent = emptyContent
    clearButton.classList.add('btn-clicked')

})


//when clicking on an operator button, the operator is added to the data screen and the button flashes
operators.forEach(operator => {
    operator.addEventListener('click', () => {
        operator.classList.add('btn-clicked')
        let content = operator.textContent
        console.log(content)
    
    if(!selectedOperator && !numberOne){
        console.log(1)
        numberOne = dataScreen.textContent
        dataScreen.textContent += content + ' '
        selectedOperator = content
    }
    else if (selectedOperator && numberOne){
        numberTwo = dataScreen.textContent.slice(dataScreen.textContent.indexOf(content) + 1)
        dataScreen.textContent = calculate();
        numberOne = dataScreen.textContent
        numberTwo = ''
        selectedOperator = ''
    }
    else if (!numberOne && !numberTwo) {
        console.log(2)
        dataScreen.textContent = calculate();
        numberOne = dataScreen.textContent
        numberTwo = ''
        selectedOperator = ''
    }
})
})

//when clicking on the decimal point button, the decimal point is added to the data screen and the button flashes
decimalPoint.addEventListener('click', () => {
    decimalPoint.classList.add('btn-clicked')
    if (dataScreen.textContent.indexOf('.') == -1 && dataScreen.textContent.length > 0) {
        let content = decimalPoint.textContent
        dataScreen.textContent += content
    }
})

equals.addEventListener('click', () => {
    equals.classList.add('btn-clicked')
    numberTwo = dataScreen.textContent.slice(dataScreen.textContent.indexOf(selectedOperator) + 1)
    dataScreen.textContent = calculate();
    numberOne = dataScreen.textContent
    numberTwo = ''
    selectedOperator = ''
    }
)

function removeTransition(e){
    if (e.propertyName !== 'transform') return;

    this.classList.remove('btn-clicked')
  }

buttons.forEach(button => {
    button.addEventListener("transitionend", removeTransition)});


    function calculate(){
        switch(selectedOperator) {
            case '+':
                return Number(numberOne) + Number(numberTwo);
                break;
            case '-':
                return Number(numberOne) - Number(numberTwo);
                break;
            case '*':
                return Number(numberOne) * Number(numberTwo);
                break;
            case '/':
                return Number(numberOne) / Number(numberTwo);
                break;
            case '%':
                return ;
                break;
        }
        
    }