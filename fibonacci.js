/* eslint-disable */
// Fanen Felix Auso
// Wamala Emmanuel Kisakye


module.exports = class Fibonacci {                                                          //Export the fibonacci class
    calculate(parameter) {                                                                  //method to calculate the factorial of a parameter
        let i = 1, j = 0, temp;

        if (typeof (parameter) !== 'number' || parameter < 0) return false                   //Validate input

        while (parameter >= 0) {                                                             //Use while loop for better space and time complexity
            temp = i;
            i = i + j;
            j = temp;
            parameter--;
        }

        return j;                 //return the factorial of a nth number
    }
}