function calculator(numO, operator, numT) {
    if (operator === "+") {
        console.log((numO + numT).toFixed(2));
    } else if (operator === "-") {
        console.log((numO - numT).toFixed(2));
    } else if (operator === "/") {
        console.log((numO / numT).toFixed(2));
    } else if (operator === "*") {
        console.log((numO * numT).toFixed(2));
    } 
}
calculator(5, "*", 10);