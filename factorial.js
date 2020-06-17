/* eslint-disable */
// Fanen Felix Auso
// Wamala Emmanuel Kisakye


module.exports = class Factorial {                                                    //Export the factorial class
  this.calculate(parameter) {                                                              //method to calculate the factorial of a parameter
    if(typeof(parameter) !== 'number' ||  parameter < 0) return false                 //Validate input
    
    else if (parameter == 0 || parameter == 1) return 1;
      
    for (let i = parameter - 1; i > 1; i--) {                                          //Use for loop for better space and time complexity
      parameter *= i;
    }

    return parameter;                                                                  //return the factorial of a number
  }
}
