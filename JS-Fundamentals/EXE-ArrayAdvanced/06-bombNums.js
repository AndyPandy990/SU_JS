function bombNums(arr, impact) {
        const bomb = impact[0];
        const impactRange = impact[1];
        let sum = 0;
      
        let index = arr.indexOf(bomb);
        while (index !== -1) {
          const leftIndex = Math.max(index - impactRange, 0);
          const rightIndex = Math.min(index + impactRange, arr.length - 1);
          const endIndex = Math.min(rightIndex, arr.length - 1);
      
          arr.splice(leftIndex, endIndex - leftIndex + 1);
          sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
      
          index = arr.indexOf(bomb);
        }
      
        console.log(sum);
      }
      bombNums([1, 7, 7, 1, 2, 3], [7, 1]);