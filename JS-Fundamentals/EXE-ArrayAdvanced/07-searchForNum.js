function searchForNum(arrOne, arrTwo) {
    let numToTake = arrTwo[0];
    let numToDelete = arrTwo[1];
    let searchedNum = arrTwo[2];

    let newArr = arrOne.slice(0, numToTake);
    newArr.splice(0,numToDelete);

    let numCounter = newArr.filter(e => e === searchedNum).length;
    console.log(`Number ${searchedNum} occurs ${numCounter} times.`);
}
searchForNum([5, 2, 3, 4, 1, 6], [5, 2, 3]);