function piccolo(input) {
    const parkingLot = new Set();
    const output = [];
  
    for (const entry of input) {
      const [direction, carNumber] = entry.split(", ");
      if (direction === "IN") {
        parkingLot.add(carNumber);
      } else if (direction === "OUT") {
        parkingLot.delete(carNumber);
      }
    }
  
    if (parkingLot.size === 0) {
      console.log("Parking Lot is Empty");
    } else {
      parkingLot.forEach(carNumber => {
        output.push(carNumber);
      });
  
      output.sort((a, b) => a.localeCompare(b));
      output.forEach(carNumber => {
        console.log(carNumber);
      });
    }
  }
piccolo(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'IN, CA9999TT',
'IN, CA2866HI',
'OUT, CA1234TA',
'IN, CA2844AA',
'OUT, CA2866HI',
'IN, CA9876HH',
'IN, CA2822UU']);