function revInPlace(arr) {
    for (let i = 0; i < arr.length / 2; i++) {
        let currEl = arr[i];
        let swapEl = arr[arr.length - 1 - i];
        arr[i] = swapEl;
        arr[arr.length - 1 - i] = currEl;

    }
    console.log(arr.join(" "));
}
revInPlace(['33', '123', '0', 'dd']);