function mT(num) {
    for (let x = 1; x <= num; x++) {
        for(let y = 1; y <= 10; y++) {
            let sum = num * y;
            console.log(`${num} * ${y} = ${sum}`);
        }
        break;
    }
}
mT(100);