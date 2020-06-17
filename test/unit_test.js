/* eslint-disable */
// Fanen Felix Auso
// Wamala Emmanuel Kisakye

const Factorial = require('../modules/factorial'),            //import modules 
  Fibonacci = require('../modules/fibonacci'),
  { assert } = require('chai');

describe('Unit test for math functions', () => {

  let input1 = 7,                                                                    //fibonacci series index test input
    input2 = 5,                                                                      //parameter test input
    stringInput = '5',                                                                    //String test input
    negativeInput = -5;                                                                     //Negative integer test input

  it('Check that the program returns the nth element of the fibonacci series', () => {
    const fibonacci = new Fibonacci()

    let value1 = fibonacci.calculate(input1)
    assert.equal(value1, 21);                                                       //Test for fibonacci calculation correctness

    let value2 = fibonacci.calculate(stringInput)
    assert.equal(value2, false);                                                    //Test for String input validation correctness

    let value3 = fibonacci.calculate(negativeInput)
    assert.equal(value3, false);                                                     //Test for negative integer input validation correctness
  });

  it('Check that the method calculates the factorial of a number', () => {
    const factorial = new Factorial()

    let value = factorial.calculate(input2)
    assert.equal(value, 120);                                                       //Test for factorial calculation correctness

    let value2 = factorial.calculate(stringInput)
    assert.equal(value2, false);                                                    //Test for String input validation correctness

    let value3 = factorial.calculate(negativeInput)
    assert.equal(value3, false);                                                    //Test for negative integer input validation correctness
  })
})

