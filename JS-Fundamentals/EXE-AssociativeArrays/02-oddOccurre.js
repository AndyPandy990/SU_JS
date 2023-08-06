function oddOccurre(input) {
    const words = input.split(" ");
  
    const wordCountMap = new Map();
    for (const word of words) {
      const lowercaseWord = word.toLowerCase();
      const count = wordCountMap.get(lowercaseWord) || 0;
      wordCountMap.set(lowercaseWord, count + 1);
    }
  
    const oddOccurrences = [];
    wordCountMap.forEach((count, word) => {
      if (count % 2 !== 0) {
        oddOccurrences.push(word);
      }
    });
  
    const output = oddOccurrences.join(" ");
    console.log(output);
  }
  oddOccurre("Cake IS SWEET is Soft CAKE sweet Food");