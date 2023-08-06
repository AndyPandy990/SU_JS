function oscars(input) {
    let actorsName = input[0];
    let academyPoints = Number(input[1]);
    let judgesCount = Number(input[2]);


    for (let i = 3; i < input.length; i += 2) {
        let judgeName = input[i];
        let judgePoints = Number(input[i + 1]);

        let pointhsWon = judgeName.length * judgePoints / 2;
        academyPoints += pointhsWon;

        if (academyPoints > 1250.5) {
            console.log(`Congratulations, ${actorsName} got a nominee for leading role with ${academyPoints.toFixed(1)}!`);
            break;
        }
    }

    if (academyPoints <= 1250.5) {
        let pointsNeeded = 1250.5 - academyPoints;
        console.log(`Sorry, ${actorsName} you need ${pointsNeeded.toFixed(1)} more!`);
    }
}
oscars(["Sandra Bullock", "340", "5", "Robert De Niro", "50", "Julia Roberts", "40.5", "Daniel Day-Lewis", "39.4", "Nicolas Cage", "29.9", "Stoyanka Mutafova", "33"]);