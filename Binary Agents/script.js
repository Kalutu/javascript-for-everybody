function binaryAgent(str) {
  let biString = str.split(" ");
  let uniString = [];

  /*using the radix (or base) parameter in parseInt, convert the binary
      number to a decimal number while simultaneously converting to a char*/

  for (let i = 0; i < biString.length; i++) {
    uniString.push(String.fromCharCode(parseInt(biString[i], 2)));
  }

  // then simply join the string
  return uniString.join("");
}
