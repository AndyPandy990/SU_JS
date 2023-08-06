function theSmallesNum(input) {
    let index = 0;

    let comma = input[index];
    index++;
    let minN = Number.MAX_SAFE_INTEGER;

    while (comma !== "Stop") {
        let smallerNum = Number(comma);

        if (smallerNum < minN) {
            minN = smallerNum;
        }
        comma = input[index];
        index++;
    }
    console.log(minN);
}
theSmallesNum(["-10", "20", "-30", "Stop"]);