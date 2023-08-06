function commElem(fiArr, seArr) {
    
    for (let i = 0; i <fiArr.length; i++) {
            
        let currEl = fiArr[i];
        
        if (seArr.includes(currEl)) {
            console.log(currEl);
        }
    }
}
commElem(['Hey', 'hello', 2, 4, 'Peter', 'e'],
['Petar', 10, 'hey', 4, 'hello', '2']);