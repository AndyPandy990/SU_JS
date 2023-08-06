function charsInRange(firstChar, secChar) {
    let startChar = Math.min(firstChar.charCodeAt(), secChar.charCodeAt());
    let endChar = Math.max(firstChar.charCodeAt(), secChar.charCodeAt());
    let charArr = [];
    for (let i = startChar + 1; i < endChar; i++) {
        charArr.push(String.fromCharCode(i));
    }
    return charArr.join(" ");
}
console.log(charsInRange("#", ":"));