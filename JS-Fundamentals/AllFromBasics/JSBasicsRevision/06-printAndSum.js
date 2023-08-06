function printAndSum(start, end) {
    let sum = 0;
    let numbersRow = "";
    for(let x = start; x <= end; x++) {
        sum += x;
        numbersRow +=  `${x} `;
    }
    console.log(numbersRow);
    console.log(`Sum: ${sum}`);
}
printAndSum(5, 10);