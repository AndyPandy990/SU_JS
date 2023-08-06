function sortNums(a, b, c) {
    let arr = [a, b, c];
    arr.sort(function (a, b) { 
        return b - a;
    });
    let print = arr.join('\n');
    console.log(print);

}
sortNums(-5, 1, 2);