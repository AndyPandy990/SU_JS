function cardGame(input) {
    const cardValues = { '2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '8': 8, '9': 9, '10': 10, 'J': 11, 'Q': 12, 'K': 13, 'A': 14 };
    const cardMultipliers = { 'S': 4, 'H': 3, 'D': 2, 'C': 1 };
    const playerValues = {};
  
    for (const line of input) {
      const [name, cards] = line.split(': ');
      const cardsList = cards.split(', ');
  
      const processedCards = new Set(); // Track the unique identifier for each card
      let totalValue = 0;
  
      for (const card of cardsList) {
        const power = card.slice(0, -1);
        const cardType = card.slice(-1);
  
        const cardKey = power + cardType; // Concatenate power and cardType to represent a unique card
  
        if (!processedCards.has(cardKey)) {
          const cardValue = cardValues[power] * cardMultipliers[cardType];
          totalValue += cardValue;
          processedCards.add(cardKey);
        }
      }
  
      if (playerValues[name]) {
        playerValues[name] += totalValue;
      } else {
        playerValues[name] = totalValue;
      }
    }
  
    for (const [player, value] of Object.entries(playerValues)) {
      console.log(`${player}: ${value}`);
    }
  }
cardGame(['Peter: 2C, 4H, 9H, AS, QS',
'Tomas: 3H, 10S, JC, KD, 5S, 10S',
'Andrea: QH, QC, QS, QD',
'Tomas: 6H, 7S, KC, KD, 5S, 10C',
'Andrea: QH, QC, JS, JD, JC',
'Peter: JD, JD, JD, JD, JD, JD']);