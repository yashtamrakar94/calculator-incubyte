class StringCalculator {
  add(numbers) {
    if (numbers === "") {
      return 0;
    }

    let delimiter = /,|\n/;
    if (numbers.startsWith("//")) {
      const parts = numbers.split('\n', 2);
      delimiter = new RegExp(parts[0].substring(2));
      numbers = parts[1];
    }

    const numList = numbers.split(delimiter).map(num => parseInt(num, 10));
    return numList.reduce((sum, num) => sum + num, 0);
  }
}

export default StringCalculator