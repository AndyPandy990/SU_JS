function sorting(arr) {
    let sortedNums = [];

    arr.sort((a, b) => b - a);

    while (arr.length > 0) {
        sortedNums.push(arr.shift());
        if (sortedNums.length > 0) {
            sortedNums.push(arr.pop());
        }
    }
    console.log(sortedNums.join(" "));
}
sorting([34, 2, 32, 45, 690, 6, 32,
    7, 19, 47]);