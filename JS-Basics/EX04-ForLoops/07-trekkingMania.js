function trekkingMania(input) {
    let groupNumbers = Number(input[0]);
    let totalParticipants = 0;
    let musalaPar = 0;
    let monbalPar = 0;
    let kilimanjaroPar = 0;
    let kTwoPar = 0;
    let everestPar = 0;

    for (i = 1; i <= input.length - 1; i++) {
        let currentPar = input[i];
        totalParticipants += Number(currentPar);

        if (currentPar <= 5) {
            musalaPar += Number(currentPar);
            
        } else if (currentPar >= 6 && currentPar <= 12) {
            monbalPar += Number(currentPar);
        
        } else if (currentPar >= 13 && currentPar <= 25) {
            kilimanjaroPar += Number(currentPar);

        } else if (currentPar >= 26 && currentPar <= 40) {
            kTwoPar += Number(currentPar);

        } else if (currentPar >= 41) {
            everestPar += Number(currentPar);
        }
    }
    
    let musala = (musalaPar / totalParticipants) * 100;
    let monbal = (monbalPar / totalParticipants) * 100;
    let kilimanjaro = (kilimanjaroPar / totalParticipants) * 100;
    let kTwo = (kTwoPar / totalParticipants) * 100;
    let everest = (everestPar / totalParticipants) * 100;
    console.log(`${musala.toFixed(2)}%`);
    console.log(`${monbal.toFixed(2)}%`);
    console.log(`${kilimanjaro.toFixed(2)}%`);
    console.log(`${kTwo.toFixed(2)}%`);
    console.log(`${everest.toFixed(2)}%`);
} 
trekkingMania(["5",

"25",

"41",

"31",

"250",

"6"]);