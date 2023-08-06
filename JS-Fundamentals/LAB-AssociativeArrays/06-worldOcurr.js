function worldOccurr(input) {
    const wordCountMap = new Map();

    for (const word of input) {
      if (wordCountMap.has(word)) {
        const count = wordCountMap.get(word);
        wordCountMap.set(word, count + 1);
      } else {
        wordCountMap.set(word, 1);
      }
    }
  
    const sorted = Array.from(wordCountMap).sort((a, b) => b[1] - a[1]);
  
    sorted.forEach(([word, count]) => {
      console.log(`${word} -> ${count} times`);
    });
  }
worldOccurr(["Here", "is", "the", "first", "sentence",
"Here", "is", "another", "sentence", "And",
"finally", "the", "third", "sentence"]);