function factorialDivision(numOne, numTwo) {

    function factorial(num) {
        if (num === 0) {
            return 1;
        } else {
            return num * factorial(num - 1);
        }
    }
    let firstNum = factorial(numOne);
    let secNum = factorial(numTwo);
    let result = firstNum / secNum;
    console.log(result.toFixed(2));
      // if (numOne === 0 || numOne === 1) {
    //     return 1;
    // }

    // if (numTwo === 0 || numTwo === 1) {
    //     return 1;
    // }

    // for (let i = numOne - 1; i >= 1; i--) {
    //     numOne *= i;
    // }
    
    // for (let i = numTwo - 1; i >= 1; i--) {
    //     numTwo *= i;
    // }
    // console.log((numOne / numTwo).toFixed(2));
}
factorialDivision(5, 2);