function houseParty(arr) {
    let gestList = [];

    for (let person of arr) {
        let details = person.split(" ");
        let gestName = details[0];

        if (details.includes("not")) {
            if (gestList.includes(gestName)) {
                let gestIndex = gestList.indexOf(gestName);
                if (gestIndex !== -1) {
                    gestList.splice(gestIndex,1);
                }
            } else {
                console.log(`${gestName} is not in the list!"`)
            }
        } else {

            if (gestList.includes(gestName)) {
                console.log( `${gestName} is already in the list!`);
            } else {
                gestList.push(gestName);
            }
        }
    }
    gestList.forEach(person => console.log(person));
}
houseParty(['Allie is going!',
            'George is going!',
            'John is not going!',
            'George is not going!']);