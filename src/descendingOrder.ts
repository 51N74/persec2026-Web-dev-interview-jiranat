export function descendingOrder(n: number): number {
  return Number(
    n.toString()
      .split('')
      .sort((a, b) => Number(b) - Number(a))
      .join('')
  );
}