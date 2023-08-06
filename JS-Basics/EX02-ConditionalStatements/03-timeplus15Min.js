function timePlus15Min(input) {
    let hours = Number(input[0]);
    let min = Number(input[1]);

    let minFromHours = hours * 60;
    let totalTime = minFromHours + min + 15;

    let totalHours = Math.floor(totalTime / 60);
    let totalMin = totalTime % 60;

    if (totalHours == 24) {
        totalHours = 0;
    }

    if (totalMin < 10) {
        console.log(`${totalHours}:0${totalMin}`);
    } else {
        console.log(`${totalHours}:${totalMin}`);
    }
}

timePlus15Min(["12", "49"])