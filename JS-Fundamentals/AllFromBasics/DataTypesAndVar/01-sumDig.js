function sumDig(num) {
  let inAsStr = num.toString();
  let sumOfDig = 0;

  for (let i = 0; i < inAsStr.length; i++) {
    let curDig = Number(inAsStr[i]);
    sumOfDig += curDig;
  }
  console.log(sumOfDig);
}
sumDig(543);
