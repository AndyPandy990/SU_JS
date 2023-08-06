function treckingMania(input) {
    let index = 0;
    let groups = Number(input[index]);
    index++;

    let musala = 0;
    let monBland = 0;
    let kilimandjaro = 0;
    let k2 = 0;
    let everest = 0; 

    for (let i = 0; i < groups; i++) {
        let people = Number(input[index]);
        index++;

        if (people <= 5) {
            musala += people;
        } else if (people >= 6 && people <= 12) {
            monBland += people;
        } else if (people >= 13 && people <= 25) {
            kilimandjaro += people;
        } else if (people >= 26 && people <= 40) {
            k2 += people;
        } else {
            everest += people;
        }
    }
    console.log((musala / total * 100).toFixed(2));
}
treckingMania