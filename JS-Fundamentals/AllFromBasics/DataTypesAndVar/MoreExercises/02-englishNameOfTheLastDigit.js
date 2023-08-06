function englishNameOfTheLastDigit(arr) {
    let digitNames = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    let lastDigit = Math.abs(arr % 10);
    return digitNames[lastDigit];
    
}
console.log(englishNameOfTheLastDigit(0));