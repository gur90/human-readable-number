module.exports = function toReadable (number) {
  const objNum = {
      0: 'zero',
      1: 'one',
      2: 'two',
      3: 'three',
      4: 'four',
      5: 'five',
      6: 'six',
      7: 'seven',
      8: 'eight',
      9: 'nine',
      10: 'ten',
      11: 'eleven',
      12: 'twelve',
      13: 'thirteen',
      14: 'fourteen',
      15: 'fifteen',
      16: 'sixteen',
      17: 'seventeen',
      18: 'eighteen',
      19: 'nineteen',
      20: 'twenty',
      30: 'thirty',
      40: 'forty',
      50: 'fifty',
      60: 'sixty',
      70: 'seventy',
      80: 'eighty',
      90: 'ninety',
      100: 'one hundred',
      200: 'two hundred',
      300: 'three hundred',
      400: 'four hundred',
      500: 'five hundred',
      600: 'six hundred',
      700: 'seven hundred',
      800: 'eight hundred',
      900: 'nine hundred'
  }
  let result = []
  
  if (number in objNum) {
      return objNum[number]
  }
  const hundr = (Math.floor(number/100))*100;
  if ((number%100) in objNum) {
      return objNum[hundr] + " " + objNum[number%100]
  }
  const tens = (Math.floor((number%100)/10))*10;
  const ones = number%10;
  console.log(hundr, tens, ones);
  
  if (hundr) {
      result.push(objNum[hundr]) 
  } 
  if (tens) {
      result.push(objNum[tens])
  }if (ones) {
      result.push(objNum[ones])
  }
  return result.join(' ')
}
