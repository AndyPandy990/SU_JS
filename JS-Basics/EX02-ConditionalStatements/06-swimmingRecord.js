function swimRecord(input) {
    let recordInSec = Number(input[0]);
    let distanceInMeter = Number(input[1]);
    let timeInSForMeter = Number(input[2]);

    let haveToSwim = distanceInMeter * timeInSForMeter;
    let timePenalty = Math.floor(distanceInMeter / 15) * 12.5;
    let totalTime = haveToSwim + timePenalty;

if (recordInSec <= totalTime) {
        let notEnoughtTime = totalTime - recordInSec;
    console.log(`No, he failed! He was ${notEnoughtTime.toFixed(2)} seconds slower.`)
} else {

    console.log(`Yes, he succeeded! The new world record is ${totalTime.toFixed(2)} seconds.`)
}

}

swimRecord(["10464", "1500", "20"]);
