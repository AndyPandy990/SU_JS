function meetings(input) {
    let grafic = {};
    for (let line of input) {
        let [weekday, name] = line.split(" ");

        if (grafic.hasOwnProperty(weekday)) {
            console.log(`Conflict on ${weekday}!`);
        } else {
            grafic[weekday] = name;
            console.log(`Scheduled for ${weekday}`);
        }
    }
    for (let key in grafic) {
        console.log(`${key} -> ${grafic[key]}`);
    }
}
meetings(['Monday Peter',
'Wednesday Bill',
'Monday Tim',
'Friday Tim'])