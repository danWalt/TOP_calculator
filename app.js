const numberButtons = document.querySelectorAll('.numbers');
const dataScreen = document.querySelector('.data-screen');
const clearAllButton = document.getElementById('clear-all')
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
        else{
            dataScreen.textContent += button.textContent
        }
    })
})

//when clicking on the C button, the data screen clears and the button flashes
clearAllButton.addEventListener('click', () => {
    dataScreen.textContent = emptyContent
    update()
    numberTwoFlag = false
    numberOne = emptyContent
    clearAllButton.classList.add('btn-clicked')

})


//when clicking on an operator button, the operator is added to the data screen and the button flashes
operators.forEach(operator => {
    operator.addEventListener('click', () => {
        operator.classList.add('btn-clicked')
        let content = operator.textContent
    
    if(!selectedOperator && !numberOne){
        
        numberOne = dataScreen.textContent
        //dataScreen.textContent = content
        selectedOperator = content
    }
    else if (!selectedOperator && numberOne){
        selectedOperator = content
        //dataScreen.textContent = content
    }
    else if (selectedOperator && numberOne){
        numberTwo = dataScreen.textContent
        dataScreen.textContent = calculate();
        update()
        selectedOperator = content
    }
    // else if (!numberOne && !numberTwo) {
    //     dataScreen.textContent = calculate();
    //     update()

    // }
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
    update()
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
                numberTwoFlag = false
                return Number(numberOne) + Number(numberTwo);
                break;
            case '-':
                numberTwoFlag = false
                return Number(numberOne) - Number(numberTwo);
                break;
            case '*':
                numberTwoFlag = false
                return Number(numberOne) * Number(numberTwo);
                break;
            case '/':
                numberTwoFlag = false
                return Number(numberOne) / Number(numberTwo);
                break;
            case '%':
                numberTwoFlag = false
                return ;
                break;
        }
        
    }

 function clearScreen(){  
    if(!numberTwoFlag){
        dataScreen.textContent = emptyContent
        numberTwoFlag = true
        }
    }

 function update() {
    numberOne = dataScreen.textContent
    numberTwo = emptyContent
    selectedOperator = emptyContent
 }