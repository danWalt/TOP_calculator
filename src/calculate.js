


function calculate(selectedOperator, numberOne, numberTwo){
    switch(selectedOperator) {
        case '+':
            return Number(numberOne) + Number(numberTwo);
            break;
        case '-':
            return (Number(numberOne * 10) - Number(numberTwo * 10)) / 10;
            break;
        case '*':
            return Number(numberOne) * Number(numberTwo);
            break;
        case '/':
            if(numberTwo == 0){
                return 'can not divide by 0'
            } 
            return Number(numberOne) / Number(numberTwo);
            break;
    }
    
}

 export default calculate;
