function loadingBar(n) {
    let precentCount = n / 10;
    let dotsCount = 10 - precentCount;

    if (precentCount === 10) {
        console.log("100% Complete!");
        console.log(`[${"%".repeat(precentCount)}]`)
    } else {
        console.log(`${n}% [${"%".repeat(precentCount)}${".".repeat(dotsCount)}]`);
        console.log("Still loading...");
    }
}
loadingBar(90); 