function storeProvision(stock, ordered) {
    let storage = {}

    for (let index = 0; index < stock.length; index+=2) {
        let product = stock[index];
        let quantity = Number(stock[index + 1]);
        storage[product] = quantity;

    }
    for (let index = 0; index < ordered.length; index+=2) {
        let product = ordered[index];

        if (!storage.hasOwnProperty(product)){
            storage[product] = 0;
        }
        storage[product] += Number(ordered[index + 1]);
    }
    for (let productKey in storage) {
        console.log(`${productKey} -> ${storage[productKey]}`);
    }
}
storeProvision([
    'Chips', '5', 'CocaCola', '9', 'Bananas',
    '14', 'Pasta', '4', 'Beer', '2'
    ],
    [
    'Flour', '44', 'Oil', '12', 'Pasta', '7',
    'Tomatoes', '70', 'Bananas', '30'
    ]
    )