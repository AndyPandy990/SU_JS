function oddAndEvenSum(num) {
    let numAsStr = num.toString();

    let oddSum = 0;
    let evenSum = 0;
    let numAsStrLength = numAsStr.length;

    for (let i = 0; i < numAsStrLength; i++) {
        let currNum = Number(numAsStr[i]);

        if (currNum % 2 === 0) {
            evenSum += currNum;
        } else {
            oddSum += currNum;
        }
    }
    return `Odd sum = ${oddSum}, Even sum = ${evenSum}`;
}
console.log(oddAndEvenSum(1000435));