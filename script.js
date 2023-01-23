function letterCombinations(input_digit) {
  if (!input_digit) return [];
  let result = [''];
  for (let input_digit of input_digit) {
    const letters = mapping[input_digit];
    const temp = [];
    for (let letter of letters) {
      for (let combination of result) {
        temp.push(combination + letter);
      }
    }
    result = temp;
  }
  return result.sort();
}

module.exports = letterCombinations;
