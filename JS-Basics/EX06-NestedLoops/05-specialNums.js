function specialNums(input) {
    let n = Number(input[0]);
 
    let buffer = "";
 
    for (let n1 = 1; n1 <= 9; n1++) {
        for (let n2 = 1; n2 <= 9; n2++) {
            for (let n3 = 1; n3 <= 9; n3++) {
                for (let n4 = 1; n4 <= 9; n4++) {
                    if(n % n1 === 0 && n % n2 === 0 && n % n3 === 0 && n % n4 === 0){
                        buffer += (`${n1}${n2}${n3}${n4} `);
                    }
                }
            } 
        }
    }
    console.log(buffer);
}
specialNums(["16"]);