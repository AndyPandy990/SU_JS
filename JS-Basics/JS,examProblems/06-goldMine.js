function goldMine(input) {
    let index = 0;

    let countLocations = Number(input[index++]);

    for (let x = 0; x < countLocations; x++) {
        let expectAvgYield = Number(input[index++]);
        let dayz = Number(input[index++]);
        let yielded = 0;

        for (let y = 0; y < dayz; y++) {
            let currentYield = Number(input[index++]);
            yielded += currentYield;
        }

        let avgPerLoc = (yielded / dayz);
        let difference = Math.abs(avgPerLoc - expectAvgYield);

        if (avgPerLoc < expectAvgYield) {
            console.log(`You need ${difference.toFixed(2)} gold.`);
        } else {
            console.log(`Good job! Average gold per day: ${avgPerLoc.toFixed(2)}.`);
        }
    }
}
goldMine(["2",
"10",
"3",
"10",
"10",
"11",
"20",
"2",
"20",
"10"])

;