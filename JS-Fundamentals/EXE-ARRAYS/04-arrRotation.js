function arrRotation(arr, wankel) {
    
    for (let i = 1; i <= wankel; i++) {
        let firstEl = arr.shift();
        arr.push ( firstEl);
    }
    console.log(arr.join(" "));
}
arrRotation([51, 47, 32, 61, 21], 2);