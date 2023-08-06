function nextDay(year, month, day) {
    let currDate = new Date(year, month - 1, day);
    currDate.setDate(currDate.getDate() + 1);
    let nextYear = currDate.getFullYear();
    let nextMonth = currDate.getMonth() + 1;
    let nextDay = currDate.getDate();

    return `${nextYear}-${nextMonth.toString().padStart()}-${nextDay.toString().padStart()}`
}
console.log(nextDay(2016, 9, 29));