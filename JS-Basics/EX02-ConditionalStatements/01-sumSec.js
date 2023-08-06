function sumSec(input) {
    let time1 = Number(input[0]);
    let time2 = Number(input[1]);
    let time3 = Number(input[2]);

    let totalSec = time1 + time2 + time3;

    let minutes = Math.floor(totalSec / 60);
    let sec = totalSec % 60;

    if (sec < 10) {
        console.log(`${minutes}:0${sec}`);
    } else {
        console.log(`${minutes}:${sec}`);
    }
}

sumSec(["14", "12", "10"]);