function evAndOddSub(arr) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = Number(arr[i]);
    }
    let evSum =  0;
    let oddSum = 0;
    for (let num of arr) {
      if (num % 2 == 0) { 
        evSum += num;
      } else {
        oddSum += num;
      }
      
    } 
    console.log(evSum-oddSum);
    
}
evAndOddSub([2,4,6,8,10]);