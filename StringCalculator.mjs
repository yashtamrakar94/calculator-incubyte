class StringCalculator {
  add(numbers) {
    if (numbers === "") {
      return 0;
    }
    const numList = numbers.split(/,|\n/).map(num => parseInt(num, 10));
    return numList.reduce((sum, num) => sum + num, 0);
  }
}

export default StringCalculator