module.exports = function getZerosCount(number, base) {
  let factorial = function (num) {
    let b = 2;
    let temp = (num === b ? num : 0);
    let pow = 1;
    while (num > b) {
      while (num % b === 0) {
        num /= b;
        if (b > temp) {
          temp = b;
          pow = 1;
        } else if (b === temp) {
          ++pow;
        }
      }
      b++;
      if (num === b) {
        if (b > temp) {
          temp = b;
          pow = 1;
        } else if (b === temp) {
          ++pow;
        }
      }
    }
    return { 'fact': temp, 'pow': pow };
  };

  let res = 0;
  let fact = factorial(base);

  let i = fact.fact;
  while (i < number) {
    res += Math.floor(number / i);
    i *= fact.fact;
  }

  if (fact.pow > 1) {
    res = Math.floor(res / fact.pow);
  }

  return res;
}