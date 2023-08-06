function smallTwoNums(arr) {
    let sorted = arr.sort((a, b) => { 
        return a - b; 
    });
    console.log(sorted.slice(0, 2).join(" "));
}
smallTwoNums([3, 0, 10, 4, 7, 3]);