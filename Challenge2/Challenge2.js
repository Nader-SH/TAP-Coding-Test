function challenge2(arr) {
  const num = arr.length;
  const expectedSum = (num * (num + 1)) / 2;
  const actualSum = arr.reduce((acc, curr) => acc + curr, 0);
  return expectedSum - actualSum;
}

console.log(challenge2([3, 0, 1]));
console.log(challenge2([9, 6, 4, 2, 3, 5, 7, 0, 1]));
console.log(challenge2([0, 1]));
