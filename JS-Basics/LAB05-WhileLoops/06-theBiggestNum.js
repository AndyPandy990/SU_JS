function theBiggestNum(input) {
    let index = 0;

    let comma = input[index];
    index++;

    let maxN = Number.MIN_SAFE_INTEGER;

    while (comma !== "Stop") {
        let biggerNum = Number(comma);

        if (biggerNum > maxN) {
            maxN = biggerNum;
        }

        comma = input[index];
        index++;
    }
    console.log(maxN);
}
theBiggestNum(["-1", "-2", "Stop"]);