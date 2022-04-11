'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
  let decimal = 0;
  let result;
  let newNum = num.split('').reverse();
  for (let i = 0; i < newNum.length; i++) {
    result = (newNum[i]*Math.pow(2,i));
    decimal = result + decimal
  }
  return decimal
}

function DecimalABinario(num) {
  // tu codigo aca
  let binaries = [];
  do {
    binaries.push(num % 2)
    num = Math.floor(num / 2);
  } while (num !== 0);
  return binaries.reverse().join('')
}

module.exports = {
  BinarioADecimal,
  DecimalABinario,
}