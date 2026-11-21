function isPrime(x) {
  if (x <= 1) return false;

  let y = 2;

  while (y < x) {
    if (x % y === 0) {
      return false;
    }
    y += 1;
  }

  return true;
}

module.exports = { isPrime };