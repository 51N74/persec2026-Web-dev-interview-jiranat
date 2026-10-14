
export function tribonacci(
  initial: number[],
  n: number
): number[] {
  if (!Number.isInteger(n) || n < 0) {
    throw new RangeError('n must be a non-negative integer');
  }

  if (initial.length > 3) {
    throw new Error('Initial array must contain at most 3 values');
  }

  const result = initial.slice(0, n);

  while (result.length < n) {
    const next = result
      .slice(-3)
      .reduce((sum, value) => sum + value, 0);

    result.push(next);
  }

  return result;
}
