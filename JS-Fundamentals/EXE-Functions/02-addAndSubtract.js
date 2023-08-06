function addAndSubtract(one, two,three) {
    function sum(one, two) {
        return one + two;
    }
    let resultOfTheSum = sum(one, two);
    
    function subtract(sum, three) {
        return sum - three;
    }
    return subtract(resultOfTheSum, three)
    
}
console.log(addAndSubtract(23,
    6,
    10
    ));