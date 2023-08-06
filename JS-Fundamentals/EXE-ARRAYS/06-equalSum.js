function equalSum(arr) {

    let leftSide = 0;
    let rightSide = 0;
    let isEqual = false;
    let arrLength = arr.length;

    for (let currI = 0; currI < arrLength; currI++) {
        for (let i = 0; i <arrLength; i++) {

            if (i !== currI) {
                let num = Number(arr[i]);

                if (i < currI) {
                    leftSide += num;

                } else if (i > currI) {
                    rightSide += num;
                }
            }
            if (currI === 0) {
                leftSide = 0;
            } else if (currI === arrLength - 1) {
                rightSide = 0;
            }
        }

        if (leftSide === rightSide) {
            console.log(currI);
            isEqual = true;
        } else {
            leftSide = 0;
            rightSide = 0;
        }
    }

    if (!isEqual) {
        console.log("no");
    }
}
equalSum([10, 5, 5, 99,
    3, 4, 2, 5, 1,
    1, 4]);