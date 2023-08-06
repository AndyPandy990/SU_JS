function tennisRankList(input) {
    let tournamentCount = Number(input[0]);
    let startingPionts = Number(input[1]);

    let pointsWon = 0;
    let tournamentsWon = 0;

    for (let i = 2; i < input.length; i++) {
        let tournamentResult = input[i];

        if (tournamentResult === "W") {
            pointsWon += 2000;
            tournamentsWon++;
        } else if (tournamentResult === "F") {
            pointsWon += 1200;
        } else {
            pointsWon += 720;
        }
    }
    
    console.log(`Final points: ${startingPionts + pointsWon}`);

    let avgPoints = Math.floor(pointsWon / tournamentCount);
    console.log(`Average points: ${avgPoints}`);

    let tournamentsWonPercent = (tournamentsWon / tournamentCount * 100);
    console.log(`${tournamentsWonPercent.toFixed(2)}%`);
}
tennisRankList(["5", "1400", "F", "SF", "W", "W", "SF"]);