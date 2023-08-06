function manipulateArray(array, commands) {
    for (let command of commands) {
      let [action, ...params] = command.split(" ");
  
      switch (action) {
        case "add":
          let addIndex = Number(params[0]);
          let addElement = Number(params[1]);
          array.splice(addIndex, 0, addElement);
          break;
        case "addMany":
          let addManyIndex = Number(params[0]);
          let elementsToAdd = params.slice(1).map(Number);
          array.splice(addManyIndex, 0, ...elementsToAdd);
          break;
        case "contains":
          let elementToFind = Number(params[0]);
          let index = array.indexOf(elementToFind);
          console.log(index);
          break;
        case "remove":
          let removeIndex = Number(params[0]);
          array.splice(removeIndex, 1);
          break;
        case "shift":
          let shiftPositions = Number(params[0]);
          for (let i = 0; i < shiftPositions; i++) {
            let shiftedElement = array.shift();
            array.push(shiftedElement);
          }
          break;
        case "sumPairs":
          let summedArray = [];
          for (let i = 0; i < array.length; i += 2) {
            let pairSum = array[i] + (array[i + 1] || 0);
            summedArray.push(pairSum);
          }
          array = summedArray;
          break;
        case "print":
          console.log("[ " + array.join(", ") + " ]");
          return;
      }
    }
  }
  manipulateArray([1, 2, 3, 4, 5],
    ['addMany 5 9 8 7 6 5', 'contains 15', 'remove 3',
    'shift 1', 'print']);
  