function getMaxLessThanK(n, k) {
  let max = 0;

  for (let i = 1; i < n; i++) {
    for (let j = i + 1; j <= n; j++) {
      let m = i & j;
      if (m < k && m > max) max = m;
    }
  }

  return max;
}
