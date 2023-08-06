function addAndSub(arr) {
    let oldArrSum = 0;
    let newArrSum = 0;
    let lengthArr = arr.length;
    
    for (let i = 0; i < lengthArr; i++) {
        let currNum = Number(arr[i]);
        
        oldArrSum += currNum;
        
        if (currNum % 2 === 0) {
            currNum += i;
        } else {
            currNum -= i;
        }
        arr[i] = currNum;
        newArrSum += currNum;
    }
    
    console.log(arr);
    console.log(oldArrSum);
    console.log(newArrSum);
}
addAndSub([5, 15, 23, 56, 35]);