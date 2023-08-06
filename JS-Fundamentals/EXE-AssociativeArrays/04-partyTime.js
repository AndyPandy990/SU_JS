function partyTime(input) {
    const vipGuests = new Set();
    const regularGuests = new Set();
    let isPartyStarted = false;
  
    for (const guest of input) {
      if (guest === "PARTY") {
        isPartyStarted = true;
        continue;
      }
  
      if (isPartyStarted) {
        if (vipGuests.has(guest)) {
          vipGuests.delete(guest);
        } else if (regularGuests.has(guest)) {
          regularGuests.delete(guest);
        }
      } else {
        if (guest[0].match(/\d/)) {
          vipGuests.add(guest);
        } else {
          regularGuests.add(guest);
        }
      }
    }
  
    const notAttendingGuests = [...vipGuests, ...regularGuests];
    console.log(notAttendingGuests.length); // Use length property to get the count
    notAttendingGuests.forEach(guest => {
      console.log(guest);
    });
  }
  partyTime(['m8rfQBvl',
  'fc1oZCE0','UgffRkOn',
  '7ugX7bm0',
  '9CQBGUeJ',
  '2FQZT3uC',
  'dziNz78I',
  'mdSGyQCJ',
  'LjcVpmDL',
  'fPXNHpm1',
  'HTTbwRmM',
  'B5yTkMQi',
  '8N0FThqG',
  'xys2FYzn',
  'MDzcM9ZK',
  'PARTY',
  '2FQZT3uC',
  'dziNz78I',
  'mdSGyQCJ',
  'LjcVpmDL',
  'fPXNHpm1',
  'HTTbwRmM',
  'B5yTkMQi',
  '8N0FThqG',
  'm8rfQBvl',
  'fc1oZCE0',
  'UgffRkOn',
  '7ugX7bm0',
  '9CQBGUeJ']);