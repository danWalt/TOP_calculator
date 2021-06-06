
import calculate from './calculate.js';

const numberButtons = document.querySelectorAll('.numbers');
const dataScreen = document.querySelector('.data-screen');
const clearAllButton = document.getElementById('clear-all')
const clearButton = document.getElementById('clear')
const operators = document.querySelectorAll('.operator')
const decimalPoint = document.getElementById('decimal')
const buttons = document.querySelectorAll('.btn')
const equals = document.getElementById('equals')
const emptyContent = '';
let numberOne = ''
let numberTwo = ''
let selectedOperator = ''
let numberTwoFlag = false



//when clicking a number button, the number is added to the data screen and a 'btn-clicked' class is added to flash a border
numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        button.classList.add('btn-clicked')
        if(numberOne && selectedOperator){
            clearScreen()
            dataScreen.textContent += button.textContent
        }
        else if (dataScreen.textContent == '0'){
            dataScreen.textContent = button.textContent
        }
        else{
            dataScreen.textContent += button.textContent
        }
    })
})

//when clicking on the AC button, the data screen clears and the button flashes
clearAllButton.addEventListener('click', () => {
    dataScreen.textContent = 0
    updateScreenAfterCalculation()
    numberTwoFlag = false
    numberOne = emptyContent
    clearAllButton.classList.add('btn-clicked')
})

//when clicking on the C button, the last clicked number is deleted and the button flashes
clearButton.addEventListener('click', () => {
    dataScreen.textContent = dataScreen.textContent.slice(0, -1)
    clearButton.classList.add('btn-clicked')
})


//when clicking on an operator button, the operator is added to the data screen and the button flashes
operators.forEach(operator => {
    operator.addEventListener('click', () => {
        operator.classList.add('btn-clicked')
        let content = operator.textContent
    
    if(!selectedOperator && !numberOne){
        numberOne = dataScreen.textContent
        selectedOperator = content
    }
    else if (!selectedOperator && numberOne){
        selectedOperator = content
    }
    else if (selectedOperator && numberOne){
        numberTwo = dataScreen.textContent
        dataScreen.textContent = calculate(selectedOperator, numberOne, numberTwo);
        numberTwoFlag = false
        updateScreenAfterCalculation()
        selectedOperator = content
    }
  
})
})

//when clicking on the decimal point button, the decimal point is added to the data screen and the button flashes
decimalPoint.addEventListener('click', () => {
    decimalPoint.classList.add('btn-clicked')
        dataScreen.textContent += decimalPoint.textContent
    
})

equals.addEventListener('click', () => {
    equals.classList.add('btn-clicked')
    if(selectedOperator){
        console.log(selectedOperator)
        console.log(dataScreen.textContent)
        numberTwo = dataScreen.textContent
        console.log(calculate(selectedOperator, numberOne, numberTwo))
        dataScreen.textContent = calculate(selectedOperator, numberOne, numberTwo);
        numberTwoFlag = false
        updateScreenAfterCalculation()
        }
    }
)

function removeTransition(e){
    if (e.propertyName !== 'transform') return;

    this.classList.remove('btn-clicked')
  }

buttons.forEach(button => {
    button.addEventListener("transitionend", removeTransition)});


    

 function clearScreen(){  
    if(!numberTwoFlag){
        dataScreen.textContent = emptyContent
        numberTwoFlag = true
        }
    }

 function updateScreenAfterCalculation() {
    numberOne = dataScreen.textContent
    numberTwo = emptyContent
    selectedOperator = emptyContent
 }
