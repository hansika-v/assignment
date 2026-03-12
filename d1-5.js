function biggest(a, b, c) {
  let max = a;

  if (b > max) max = b;
  if (c > max) max = c;

  return max;
}

console.log(biggest(10, 50, 30));