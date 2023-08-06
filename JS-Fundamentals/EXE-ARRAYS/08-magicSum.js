function magicSum(arr, n) {

    for (let i = 0; i < arr.length; i++) {

        if (i !== 0) {

            let prevNum = Number(arr[i - 1]);
            
            for (let j = i; j < arr.length; j++) {

                let currNum = Number(arr[j]);
                let sum = currNum + prevNum;

                if (sum == n) {
                    console.log(`${prevNum} ${currNum}`);
                }
            }
        }
    }
}
magicSum([14, 20, 60, 13, 7, 19, 8],
    27);