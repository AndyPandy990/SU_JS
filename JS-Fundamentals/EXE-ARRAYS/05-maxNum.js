function maxNum(arr) {
  let result = "";
  let arrLength = arr.length;

  for (let i = 1; i <= arrLength; i++) {
    let isMax = true;
    let currNum = Number(arr[i - 1]);

    for (let j = i; j < arr.length; j++) {
      let nextNum = Number(arr[j]);

      if (nextNum >= currNum) {
        isMax = false;
        break;
      }
    }

    if (isMax) {
      result += `${currNum} `;
    }
  }
  console.log(result);
}
maxNum([14, 24, 3, 19, 15, 17]);
