function equalArrays(firstArr, secondArr) {
    for (let arrOne = 0; arrOne < firstArr.length; arrOne++) {
        firstArr[arrOne] = Number(firstArr[arrOne]);
    }

    for (let arrTwo = 0; arrTwo < secondArr.length; arrTwo++) {
        secondArr[arrTwo] = Number(secondArr[arrTwo]);
    }

    let areEqual = true;

    for (let i = 0; i < firstArr.length; i++) {
        if (firstArr[i] !== secondArr[i]) {
            console.log(`Arrays are not identical. Found difference at ${i} index`);
            areEqual = false;
            break;
        }
    }

    let sumOfFirstArr = 0;
    let sumOfSecondArr = 0;

    for (let num of firstArr) {
        sumOfFirstArr += num;
    }
    for (let num of secondArr) {
        sumOfSecondArr += num;
    }

    if (sumOfFirstArr === sumOfSecondArr) {
        console.log(`Arrays are identical. Sum: ${sumOfFirstArr}`);
    }
}
equalArrays(['1','2','3','4','5'],
['1','2','4','4','5']);