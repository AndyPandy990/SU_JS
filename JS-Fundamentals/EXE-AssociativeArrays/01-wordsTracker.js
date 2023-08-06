function wordsTracker(input) {
    const wordsToSearch = input[0].split(" ");
    const sentences = input.slice(1);
  
    const wordCountMap = new Map();

    const allWords = sentences.join(" ");

    const allWordsArray = allWords.split(" ");

    for (const word of wordsToSearch) {
      const count = allWordsArray.filter(w => w === word).length;
      wordCountMap.set(word, count);
    }

    const sorted = Array.from(wordCountMap).sort((a, b) => b[1] - a[1]);

    sorted.forEach(([word, count]) => {
      console.log(`${word} - ${count}`);
    });
  }
wordsTracker([
    'is the',
    'first', 'sentence', 'Here', 'is',
    'another', 'the', 'And', 'finally', 'the',
    'the', 'sentence']
    );