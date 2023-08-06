function aMinortask(input) {
    for (let i = 0; i < input.length; i += 2) {
        const resource = input[i];
        const quantity = input[i + 1];
        console.log(`${resource} -> ${quantity}`);
      }
    }
aMinortask([
    'Gold',
    '155',
    'Silver',
    '10',
    'Copper',
    '17'
    ]
    );