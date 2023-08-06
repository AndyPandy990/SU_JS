function combos(input) {
    let n = Number(input[0]);
    let sum = 0;
    counter = 0;

    for (let x1 = 0; x1 <= n; x1++) {
        for (let x2 = 0; x2 <= n; x2++) {
            for (let x3 = 0; x3 <= n; x3++) {
                sum = x3 + x2 + x1;
                if (sum === n) {
                    counter++;
                }
            }
        }
    }
    console.log(counter);
}
combos(["25"]);