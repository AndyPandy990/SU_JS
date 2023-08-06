function mergeArr(arrOne, arrTwo) {
  let resultArr = [];
  let arrLength = arrOne.length;

  for (let i = 0; i < arrLength; i++) {
    if (i % 2 === 0) {
      resultArr[i] = Number(arrOne[i]) + Number(arrTwo[i]);
    } else {
      resultArr[i] = arrOne[i] + arrTwo[i];
    }
  }
  console.log(resultArr.join(" - "));
}
mergeArr(["5", "15", "23", "56", "35"], ["17", "22", "87", "36", "11"]);
