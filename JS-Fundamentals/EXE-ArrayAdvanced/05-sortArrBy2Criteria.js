function sortArrBy2Criteria(arr) {
    let sorted = arr.sort((a, b) => {
        if (a.length !== b.length) {
            return a.length - b.length;
        }
        return a.localeCompare(b);
    });
    console.log(sorted.join("\n"));
}
sortArrBy2Criteria(['Isacc',
                    'Theodor',
                    'Jack',
                    'Harrison',
                    'George']);