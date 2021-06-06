//TOP_CALCULATOR Project tests
import calculate from '../src/calculate.js';
const int1 = 1
const int2 = 2
const zero = 0
const decimal1 = 1.2
const decimal2 = 2.6

// JEST Functions tests
// ADDITION tests


describe("ADDITION tests", () => {

  it('add 2 integers', () => {
    let selectedOperator = '+'
    let numberOne = int1
    let numberTwo = int2
    expect(calculate(selectedOperator, numberOne, numberTwo)).toBe(3);
  });

  it('add integer + 0', () => {
    let selectedOperator = '+'
    let numberOne = int1
    let numberTwo = zero
      expect(calculate(selectedOperator, numberOne, numberTwo)).toBe(1);
    });
  
  it('add 2 decimal', () => {
    let selectedOperator = '+'
    let numberOne = decimal1
    let numberTwo = decimal2
      expect(calculate(selectedOperator, numberOne, numberTwo)).toBe(3.8);
    });
      
  it('add decimal and 0', () => {
    let selectedOperator = '+'
    let numberOne = decimal1
    let numberTwo = zero
      expect(calculate(selectedOperator, numberOne, numberTwo)).toBe(1.2);
    });
  
  it('add integer and decimal', () => {
    let selectedOperator = '+'
    let numberOne = decimal1
    let numberTwo = int2
      expect(calculate(selectedOperator, numberOne, numberTwo)).toBe(3.2);
    });    
  
});

describe("subtraction tests", () => {

  it('subtract 2 integers', () => {
    let selectedOperator = '-'
    let numberOne = int1
    let numberTwo = int2
    expect(calculate(selectedOperator, numberOne, numberTwo)).toBe(-1);
  });


  it('subtract integer and 0', () => {
    let selectedOperator = '-'
    let numberOne = int1
    let numberTwo = zero
      expect(calculate(selectedOperator, numberOne, numberTwo)).toBe(1);
    });
  
  it('subtract 2 decimal', () => {
    let selectedOperator = '-'
    let numberOne = decimal1
    let numberTwo = decimal2
      expect(calculate(selectedOperator, numberTwo, numberOne)).toBe(1.4);
    });
      
  it('subtract decimal and 0', () => {
    let selectedOperator = '-'
    let numberOne = decimal1
    let numberTwo = zero
      expect(calculate(selectedOperator, numberOne, numberTwo)).toBe(1.2);
    });
  
  it('subtract integer and decimal', () => {
    let selectedOperator = '-'
    let numberOne = decimal1
    let numberTwo = int2
      expect(calculate(selectedOperator, numberOne, numberTwo)).toBe(-0.8);
    });
});


describe("multiplication tests", () => {
  test('multiply 2 integers', () => {
    let selectedOperator = '*'
    let numberOne = int1
    let numberTwo = int2
      expect(calculate(selectedOperator, numberOne, numberTwo)).toBe(2);
    });
  
  
  test('multiply integer and 0', () => {
    let selectedOperator = '*'
    let numberOne = int1
    let numberTwo = zero
      expect(calculate(selectedOperator, numberOne, numberTwo)).toBe(0);
    });
  
  test('multiply 2 decimal', () => {
    let selectedOperator = '*'
    let numberOne = decimal1
    let numberTwo = decimal2
      expect(calculate(selectedOperator, numberTwo, numberOne)).toBe(3.12);
    });
      
  test('multiply decimal and 0', () => {
    let selectedOperator = '*'
    let numberOne = decimal1
    let numberTwo = zero
      expect(calculate(selectedOperator, numberOne, numberTwo)).toBe(0);
    });
  
  test('multiply integer and decimal', () => {
    let selectedOperator = '*'
    let numberOne = decimal1
    let numberTwo = int2
      expect(calculate(selectedOperator, numberOne, numberTwo)).toBe(2.4);
    });  

});

describe("division tests", () => {
  test('divide 2 integers', () => {
    let selectedOperator = '/'
    let numberOne = int1
    let numberTwo = int2
      expect(calculate(selectedOperator, numberOne, numberTwo)).toBe(0.5);
    });
  
  
  test('divide integer and 0', () => {
    let selectedOperator = '/'
    let numberOne = int1
    let numberTwo = zero
      expect(calculate(selectedOperator, numberOne, numberTwo)).toBe('can not divide by 0');
    });
  
  test('divide 2 decimal', () => {
    let selectedOperator = '/'
    let numberOne = decimal1
    let numberTwo = decimal2
      expect(calculate(selectedOperator, numberTwo, numberOne)).toBe(2.166666666666667);
    });
      
  test('divide decimal and 0', () => {
    let selectedOperator = '/'
    let numberOne = decimal1
    let numberTwo = zero
      expect(calculate(selectedOperator, numberOne, numberTwo)).toBe('can not divide by 0');
    });
  
  test('divide integer and decimal', () => {
    let selectedOperator = '/'
    let numberOne = decimal1
    let numberTwo = int2
      expect(calculate(selectedOperator, numberOne, numberTwo)).toBe(0.6);
    });       
});

