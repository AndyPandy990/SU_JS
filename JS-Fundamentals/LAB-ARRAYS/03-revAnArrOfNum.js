function revAnArrOfNum(n, arrNum) {
    let arr = [];
    for (let i = 0; i < n; i++) {
        arr.push(arrNum[i])
    }
    let bff = "";
    for (let i = arr.length - 1; i >= 0; i--) {
        bff += arr[i] + " ";
    }

    console.log(bff);
}
revAnArrOfNum(3, [10, 20, 30, 40, 50]);