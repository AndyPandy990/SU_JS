function palinInt(arr) {
    
    for (let i = 0; i < arr.length; i++) {
        
        let numAsStr = arr[i].toString();
        let revNum = numAsStr.split("").reverse().join("");

        if (numAsStr === revNum) {
            console.log(true);
        } else {
            console.log(false);
        }
    }

}
console.log(palinInt([123,323,421,121]));