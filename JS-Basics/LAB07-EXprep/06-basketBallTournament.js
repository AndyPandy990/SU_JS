function basketBallTournament(input) {
    let index = 0;

    let command = input[index];
    index++;

    let winCounter = 0;
    let lostCounter = 0;
    let totalGame = 0;

    while (command !== "End of tournaments") {
        let tournamentsName = command;
        let gameNumber = Number(input[index]);
        index++;

        for (let i = 0; i < gameNumber; i++) {
            totalGame++;
            let teamA = Number(input[index]);
            index++;
            let teamB = Number(input[index]);
            index++;

            if (teamA > teamB) {
                winCounter++;
                console.log(`Game ${i + 1} of tournament ${tournamentsName}: win with ${Math.abs(teamA - teamB)} points.`);
            } else {
                lostCounter++;
                console.log(`Game ${i + 1} of tournament ${tournamentsName}: lost with ${Math.abs(teamA - teamB)} points.`);
            }

        }

        command = input[index];
        index++;
    }
    console.log(`${(winCounter / totalGame * 100).toFixed(2)}% matches win`);
    console.log(`${(lostCounter / totalGame * 100).toFixed(2)}% matches lost`);
}
basketBallTournament(["Ballers",
                        "3",
                        "87",
                        "63",
                        "56",
                        "65",
                        "75",
                        "64",
                        "Sharks",
                        "4",
                        "64",
                        "76",
                        "65",
                        "86",
                        "68",
                        "99",
                        "45",
                        "78",
                        "End of tournaments"]);