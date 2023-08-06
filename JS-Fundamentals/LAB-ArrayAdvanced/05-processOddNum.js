function processOddNum(arr) {
    return arr.filter((el, i) => i % 2 !== 0).map(x => 2 * x).reverse().join(" ");
    
}
console.log(processOddNum([10, 15, 20, 25]));