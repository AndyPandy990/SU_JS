function sumOfTwo(input) {
    let start = Number(input[0]);
    let end = Number(input[1]);
    let magNum = Number(input[2]);
    let isFound = false;
    let numOne = 0;
    let numTwo = 0;
    let counter = 0;

    for (let x = start; x <= end; x++) {
        for (let y = start; x <= end; y++) {
            let sum = x + y;
            counter++;
            if (sum === magNum) {
                numOne = x;
                numTwo = y;
                isFound = true;
                break;
            }
        }
        if (isFound) {
            break;
        }
    }
    if (isFound) {
        console.log(`Combination N:${counter} (${numOne} + ${numTwo} = ${magNum})`);
    } else {
        console.log(`${counter} combinations - neither equals ${magNum}`)
    }
}
sumOfTwo(["1",

"10",

"5"])