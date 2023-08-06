function storage(input) {
    const itemQuantityMap = new Map();

    for (const itemString of input) {
      const [item, quantityStr] = itemString.split(" ");
      const quantity = parseInt(quantityStr);
  
      if (isNaN(quantity)) {
        console.log(`Invalid quantity for item: ${item}`);
        continue;
      }
  
      if (itemQuantityMap.has(item)) {
        const existingQuantity = itemQuantityMap.get(item);
        itemQuantityMap.set(item, existingQuantity + quantity);
      } else {
        itemQuantityMap.set(item, quantity);
      }
    }
  
    itemQuantityMap.forEach((quantity, item) => {
      console.log(`${item} -> ${quantity}`);
    });
}
storage(['apple 50',
'apple 61',
'coffee 115',
'coffee 40']);